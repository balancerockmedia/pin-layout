/* based algorithm found at http://stackoverflow.com/questions/7109362/how-to-replicate-pinterest-coms-absolute-div-stacking-layout */

(function($) {
  	$.fn.pinLayout = function(options) {
  	  	
		// helper to get min value from array
		Array.min = function(array) {
		    return Math.min.apply(Math, array);
		};
		
		// helper to get array index by value
		Array.prototype.findIndexByValue = function(value) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] === value) {
					return i;
				}
			}
		}
		
		// defaults
		var settings = $.extend({
			'column_width': 200,
			'pin_gutter': 10
		}, options);
		
		// resize fuction
		var resize = function() {
			var window_width = $(window).width();
		
			var container_width = (window_width / 10) * 9;
	
			var container_gutter = (window_width / 10) / 2;
		
			$('#container').css({
				'width': container_width,
				'margin-left': container_gutter
			});
	
			var num_columns = Math.floor(container_width / settings.column_width);
	
			var num_pins = $('.pin').length;
	
			var column_heights = [];
	
			for (var i = 0; i < num_columns; i++) {
				column_heights.push(0);
			}
	
			$('.pin').each(function(index) {
				var min = Array.min(column_heights);
				var index = column_heights.findIndexByValue(min);
		
				var left = index * (settings.column_width + settings.pin_gutter);
		
				var top = column_heights[index];
		
				$(this).css({
					'left': left,
					'top': top
				});
		
				column_heights[index] += $(this).outerHeight() + settings.pin_gutter;
			});
		};
		
		// run once on DOM load to set up inial layout
		$(function() {
			resize();
		});
		
		// run when the window changes size
		$(window).resize(function() {
			resize();
		});

  	};
})(jQuery);