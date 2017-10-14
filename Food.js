;(function(w){
  function Food(option) {
    this.color = option.color || 'orange';
    this.size = option.size || 25;
    this.x = 0; //行
    this.y = 0; //列
    this.map = option.map;
    
    this.setPoints(); //食物的随机位置
    
  }
  
  //渲染
  Food.prototype.render = function(){
    var f = document.createElement('div');
    
    f.style.width = this.size + 'px';
    f.style.height = this.size + 'px';
    f.style.backgroundColor = this.color;
    f.style.position = 'absolute';
    f.style.left = this.x * this.size +'px';
    f.style.top = this.y * this.size +'px';
    
    this.map.box.appendChild(f);
  }
  
  Food.prototype.setPoints = function(){
    this.x = parseInt(Math.random()*this.map.col);
    this.y = parseInt(Math.random()*this.map.row);
  }
  
  w.Food = Food;
  
})(window)