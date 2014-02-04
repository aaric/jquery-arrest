/**
 * 描述：继承jQuery的Window向下滚动预隐藏DOM时使其置顶显示插件
 * 用法：$(selector).arrest(height);
 * 作者：Aaric
 * 日期：2013-12-24
 */
(function($){
	$.fn.extend({
		arrest: function(height) {
			var isUp = true;
			var isDown = false;
			var selector = $(this);	/*缓存选择对象*/
			var selectorTop = $(selector).offset().top;	/*获得选择对象的文档高度*/
			var selectorCssPosition = $(selector).css('position');	/*保存选择对象的position之前CSS属性*/
			$(window).scroll(function(){
				/*获得Window向下滚动的偏移量*/
				var windowTop = $(window).scrollTop();
				/*console.log(windowTop + ':' + selectorTop);*/
				/*比较Window偏移量与选择对象的偏移量*/
				if(windowTop >= selectorTop) {
					isDown = true;
					if(isUp) {
						/*当向下滚动的文档高度大于选择对象的文档高度时设置置顶*/
						$(selector).css('position', 'fixed');
						$(selector).css('top', height);
						isUp = !isUp;
					}
				} else {
					isUp = true;
					if(isDown) {
						/*当向下滚动的文档高度小于选择对象的文档时恢复到原始*/
						$(selector).css('position', selectorCssPosition);
						isDown = !isDown;
					}
				}
			});
		}
	});
})(jQuery);