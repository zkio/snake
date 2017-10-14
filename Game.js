;(function(w){
  function Game() {
    this.map = new Map({color:'pink'});
    this.food = new Food({map:this.map});
    this.snake = new Snake({map:this.map});
    this.timer = null;
  }
  
  Game.prototype = {
    constructor : Game,
    //开始游戏
    start : function () {
      //渲染
      this.map.render();
      //用户控制
      this.userControl();
      var _this = this;
      //开定时器
      this.timer = setInterval(function(){
        //定时器的this指向window
        //先清除地图,再重新渲染
        _this.map.box.innerHTML = '';
        _this.render();
        //碰撞检测
        _this.impact();
        //游戏结束(边界检测)
        _this.over();
        
      },200);
    },
    
    //渲染
    render : function () {
      this.food.render();
      this.snake.render();
    },
    //碰撞检测
    impact : function(){
      var head = this.snake.body[0];
      if(head.x == this.food.x && head.y ==this.food.y){
        this.snake.eat();
        this.food.setPoints();
      }
    },
    //游戏结束(边界检测)
    over : function () {
      var head = this.snake.body[0];
      if(head.x < 0 || head.y < 0 || head.x > this.map.col - 1 || head.y > this.map.row - 1){
        clearInterval(this.timer);
        alert('GAME OVER');
      }
    },
    
    //用户控制
    userControl : function () {
      var snake = this.snake;
      window.onkeydown = function (e) {
        var keycode = e.keyCode;
        //上下左右
        switch(keycode){
          case 37:{
            snake.direction = 'left';
            break;
          }
          case 38:{
            snake.direction = 'up';
            break;
          }
          case 39:{
            snake.direction = 'right';
            break;
          }
          case 40:{
            snake.direction = 'down';
            break;
          }
        }
      }
      
    }
  }
  
  w.Game = Game;
  
})(window)