;(function(w){
  function Snake(option){
    this.map = option.map;
    this.direction = option.direction || 'left';
    this.speed = option.speed || 1;
    this.size = option.size || 25;
    this.isEat = false;
    this.body = [
      {x:16,y:6},
      {x:17,y:6},
      {x:18,y:6},
      {x:19,y:6}
    ];
  }

  Snake.prototype = {
    constructor : Snake,

    //渲染
    render : function(){
      //移动
      this.move();

      //遍历蛇身,渲染每一节
      for (var i = 0; i < this.body.length; i++) {
        var obj = this.body[i];
        var s = document.createElement('div');

        //设置样式
        s.style.width = this.size + 'px';
        s.style.height = this.size + 'px';
        s.style.borderRadius = '50%';
        s.style.position = 'absolute';
        s.style.left = obj.x * this.size +'px';
        s.style.top = obj.y * this.size +'px';

        //设置蛇头
        var color = 'transparent';
        if(i>0){
          color='blue';
        }
        if(i==0){
          s.style.zIndex = 10;
          s.style.backgroundImage = 'url(head.png)';
          s.style.backgroundSize = '100% 100%';
        }
        s.style.backgroundColor = color;

        this.map.box.appendChild(s);
      }
    },
    
    //蛇移动
    move : function(){
      //原理: 减蛇尾,加蛇头
       var head = this.body[0]; //蛇头
       var x = head.x;
       var y = head.y;

       switch (this.direction){
         case 'left': {
           x--;
           break;
         }
         case 'right': {
           x++;
           break;
         }
         case 'up': {
           y--;
           break;
         }
         case 'down': {
           y++;
           break;
         }
       }
       //加头
       this.body.unshift({x:x,y:y});
       //去尾
       if(!this.isEat){
         //吃了,就删尾巴
         this.body.pop();
       }

       this.isEat = false;
     },

    //吃
    eat : function(){
       this.isEat = true;
    }

  }

  w.Snake = Snake;

})(window)

