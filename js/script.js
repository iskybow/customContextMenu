(function($) {

    function myEvents(item) {
        switch ($(item).data('action')) {
            case 'first': console.log(1); break;
            case 'second': console.log(2); break;
            case 'third': console.log(3); break;
        }
    }

    $(".jsClick").customContextMenu({
        btnClass: '.jsClick',
        events: myEvents,
    });

})(jQuery);