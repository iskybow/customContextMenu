(function ($) {
    $.fn.customContextMenu = function (options) {
        var config = $.extend({}, {
            btnClass: '',
            events: ''
        }, options);

        return this.each(function () {
            $(options.btnClass).bind("contextmenu", function (event) {
                event.preventDefault();
                $(".custom-menu").finish().toggle(100).
                css({
                    top: event.pageY + "px",
                    left: event.pageX + "px"
                });
            });

            $(document).bind("mousedown", function (e) {
                if (!$(e.target).parents(".custom-menu").length > 0) {
                    $(".custom-menu").hide(100);
                }
            });

            $(".custom-menu li").click(function(){
                options.events($(this));
                $(".custom-menu").hide(100);
            });
        });
    };
})(jQuery);