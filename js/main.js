/* based algorithm found at http://stackoverflow.com/questions/7109362/how-to-replicate-pinterest-coms-absolute-div-stacking-layout */

Array.min = function(array) {
    return Math.min.apply(Math, array);
};

Array.prototype.findIndexByValue = function(value) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return i;
		}
	}
}

var column_width = 200;
var pin_gutter = 10;

function resize() {
	var window_width = $(window).width();
		
	var container_width = (window_width / 10) * 9;
	
	var container_gutter = (window_width / 10) / 2;
		
	$('#container').css({
		'width': container_width,
		'margin-left': container_gutter
	});
	
	var num_columns = Math.floor(container_width / column_width);
	
	var num_pins = $('.pin').length;
	
	var column_heights = [];
	
	for (var i = 0; i < num_columns; i++) {
		column_heights.push(0);
	}
	
	$('.pin').each(function(index) {
		var min = Array.min(column_heights);
		var index = column_heights.findIndexByValue(min);
		
		var left = index * (column_width + pin_gutter);
		
		var top = column_heights[index];
		
		$(this).css({
			'left': left,
			'top': top
		});
		
		column_heights[index] += $(this).outerHeight() + pin_gutter;
	});
};

$(function() {
	resize();
});

$(window).resize(function() {
	resize();
});