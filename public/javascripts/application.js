$(document).ready(function(){
    $("input[type=text]").focus(function() { $(this).val('');  } );
    $("textarea").focus(function() { $(this).val(''); } );
    $(window).bind('orientationchange', function(event) {
        if (window.orientation == 90 || window.orientation == -90 || window.orientation == 270) {
            $('meta[name="viewport"]').attr('content', 'height=device-width,width=device-height,initial-scale=1.0,maximum-scale=1.0');
        } else {
            $('meta[name="viewport"]').attr('content', 'height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0');
        }
    }).trigger('orientationchange');
});

