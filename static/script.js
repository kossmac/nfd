(function($) {

    $(document).ready(function(){

        $('#warning li:gt(3), #critical li:gt(3), .okay li:gt(3)').hide();
        window.setInterval(function(){
            $('#warning li:first')
                .hide()
                .detach()
                .appendTo($('#warning'));
            $('#critical li:first')
                .hide()
                .detach()
                .appendTo($('#critical'));
            $('.okay li:lt(4)')
                .hide()
                .detach()
                .appendTo($('.okay'));
            $('#warning li:lt(4), #critical li:lt(4), .okay li:lt(4)').show();
        }, 2000);
        var changed = false;
        var warningColor = $('#warning').css("backgroundColor");
        var criticalColor = $('#critical').css("backgroundColor");
        var font_Color = $('h3').css("fontcolor")
        console.log(font_Color);
        window.setInterval(function(){

        }, 500)
    });

})(jQuery);