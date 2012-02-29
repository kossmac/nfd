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
        /*var warningFontColor;
        var criticalFontColor;
        var helpWarning;
        var helpCritical;*/
        var i = 0;
        var id = window.setInterval(function(){
            if (changed) {
                helpWarning = $('#warning').css("backgroundColor");
                helpCritical = $('#critical').css("backgroundColor");
                warningFontColor = $('#warning h3').css("color");
                criticalFontColor = $('#critical h3').css("color");
                $('#warning').css('backgroundColor', warningFontColor);
                $('#critical').css('backgroundColor', criticalFontColor);
                $('#warning h3').css('color', helpWarning);
                $('#critical h3').css('color', helpCritical);
                i++;
                changed = false;
            } else {
                helpWarning = $('#warning').css("backgroundColor");
                helpCritical = $('#critical').css("backgroundColor");
                warningFontColor = $('#warning h3').css("color");
                criticalFontColor = $('#critical h3').css("color");
                $('#warning').css('backgroundColor', warningFontColor);
                $('#critical').css('backgroundColor', criticalFontColor);
                $('#warning h3').css('color', helpWarning);
                $('#critical h3').css('color', helpCritical);
                changed = true;
            }
            if (i >= 3) window.clearInterval(id);
        }, 500);
    });

})(jQuery);