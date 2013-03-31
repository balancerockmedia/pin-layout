/* based algorithm found at http://stackoverflow.com/questions/7109362/how-to-replicate-pinterest-coms-absolute-div-stacking-layout */

(function($) {
    $.fn.pinLayout = function(options) {
        
        // defaults
        var settings = $.extend({
            total_column_width: 200,
            column_padding: 10,
            column_margin: 10,
            fade_in: true
        }, options);
        
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
        
        // resize fuction
        var resize = function(first_time) {
            // get window width
            var window_width = $(window).width();
            
            // get 90% of the window width
            var container_width = Math.floor((window_width / 10) * 9);
    
            // set container margin to 5% of window_width
            var container_margin = Math.floor((window_width / 10) / 2);
    
            // set number of columns that fit in the container
            var num_columns = Math.floor(container_width / (settings.total_column_width + settings.column_margin));
            
            var wrapper_margin = Math.floor((container_width - (num_columns * (settings.total_column_width + settings.column_margin))) / 2);
            
            if (wrapper_margin >= container_margin) {
                container_width = container_width - (wrapper_margin - container_margin);
            }
            
            $('#container').css({
                'width': container_width - 15, // take into account the scroll bar
                'margin-left': container_margin
            });
            
            $('#wrapper').css({
                'left': wrapper_margin
            });
            
            var num_pins = $('.pin').length;
    
            var column_heights = [];
    
            for (var i = 0; i < num_columns; i++) {
                column_heights.push(0);
            }
    
            $('.pin').each(function(index) {
                var min = Array.min(column_heights);
                var index = column_heights.findIndexByValue(min);
        
                var left = index * (settings.total_column_width + settings.column_margin);
        
                var top = column_heights[index];
        
                $(this).css({
                    'left': left,
                    'top': top,
                    'padding': settings.column_padding,
                    'width': function() {
                        return settings.total_column_width - (settings.column_padding * 2)
                    }
                });
        
                column_heights[index] += $(this).outerHeight() + settings.column_margin;
            });
            
            // fade in sequence
            if (first_time === true && settings.fade_in === true) {
                $('.pin').hide();
                
                var counter = 0;
                var interval = setInterval(function() {
                    $('.pin').eq(counter).fadeIn();
                    
                    if (counter < num_pins - 1) {
                        counter++;
                    } else {
                        clearInterval(interval);
                    }
                }, 100);
            }
        };
        
        // run once on DOM load to set up inial layout
        $(function() {
            resize(true);
        });
        
        // run when the window changes size
        $(window).resize(function() {
            resize();
        });

    };
})(jQuery);