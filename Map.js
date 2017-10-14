;(function(w){
  function Map(option){
    this.color = option.color || 'pink';
    this.row = option.row || 30; //行数
    this.col = option.col || 40; //列数
    this.size = option.size || 25; //行间距和列间距,构成每个小格子的大小
    this.width = this.col * this.size; //地图总宽度=列数*间距
    this.height = this.row * this.size; //地图总高度=行数*间隔
    this.box = null;  //表示地图的div盒子
  }
  
  //方法:  渲染地图
  Map.prototype.render = function () {
    //创建地图标签
    this.box = document.createElement('div');
    //设置地图样式
    this.box.style.backgroundColor = this.color;
    this.box.style.width = this.width + 'px';
    this.box.style.height = this.height + 'px';
    this.box.style.position = 'relative'; //设置相对定位,因为food和snake要根据map来定位
    
    //将地图追加到body
    w.document.body.appendChild(this.box);
  }
  
  w.Map = Map;
  
})(window)