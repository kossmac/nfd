(function($) {

    $(document).ready(function(){

        $('#warning li:gt(3), #critical li:gt(3)').hide();
        window.setInterval(function(){
            $('#warning li:first')
                .hide()
                .detach()
                .appendTo($('#warning'));
            $('#critical li:first')
                .hide()
                .detach()
                .appendTo($('#critical'));
            $('#warning li:lt(4), #critical li:lt(4)').show();

        }, 2000);

    });

})(jQuery);