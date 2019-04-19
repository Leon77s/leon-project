function drag(obj,title){
	this.obj = obj;
	this.title = title? this.obj.querySelector(title) :obj;
}
drag.prototype = Object.assign(drag.prototype,{
	init : function(){
		var _this = this;
		document.onmousemove = function(e){
			var disX = e.offsetX,
				disY = e.offsetY;
				document.onmousemove = function(e){
					var _top=disX-e.clientX;
						_left=disy-e.clientY;
						_this.move(_top, _left);
				}
				document.onmouseup = function (){
					document.onmousemove = null;
				}
				return false;
		}
	},
	move: function(top,left){
		if(left < 0) left = 0;
		if(top < 0) top = 0;
		
		if(left>tools.getBody().width - this.obj.offsetWidth){
			left = tools.getBody().width - this.obj.offsetWidth;
		}
		if(top > tools.getBody().height - this.obj.offsetHeight) {
			top = tools.getBody().height - this.obj.offsetHeight;
		}
		tools.setStyle(this.obj, {
			left : left + "px",
			top : top + "px"
		})
	}
})