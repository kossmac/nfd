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
        var changed = false;
        var warningColor = $('#warning').css("backgroundColor");
        var criticalColor = $('#critical').css("backgroundColor");
        var font_Color = $('h3').css("fontcolor")
        console.log(font_Color);
        window.setInterval(function(){

        }, 500)
    });

})(jQuery);

/*var aktiv = window.setInterval("Farbe()", 500);
var i = 0, farbe = 1;

function Farbe(){
    if (farbe == 1) {
        document.bgColor = "#FFA500";
        farbe = 2;
    } else {
        document.bgColor = "#000";
        farbe = 1;
    }
    i = i + 1;
    if (i >= 10)
        window.clearInterval(aktiv);
}*/