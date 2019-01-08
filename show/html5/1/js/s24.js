/* 鼠标特效 */
    /* 这个方法用来随机一个十六进制颜色代码，让每一次点击浮动文字的颜色不同 */
    function co(){
        var colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        var colorArray = colorElements.split(",");
        var color ="#";
        for(var i =0;i<6;i++){
        color+=colorArray[Math.floor(Math.random()*16)];
        }
		//color = "#f00";
        return color;
    };
    var a_idx = 0;
    jQuery(document).ready(function($) {
		$("body").click(function(e) {
			/*这个数组中的每一个字符是你要浮动显示的词或句子，每次点击鼠标后按顺序出现*/
			var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
			   "z-index": 9e24,
			   "top": y - 20,
			   "left": x,
			   "position": "absolute",
			   "font-weight": "bold",
			   "color": co()
			});
			$("body").append($i);
			$i.animate({
			   "top": y - 180,
			   "opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
		});
    });