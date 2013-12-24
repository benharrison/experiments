// http://west-wind.com/Weblog/posts/1006040.aspx

$(document).ready(function () {
    $(".numberinput").forceNumeric();
});


// forceNumeric() plug-in implementation
jQuery.fn.forceNumeric = function () {
    return $(this).each(function () {
        $(this).keydown(function (e) {
            var char = String.fromCharCode(e.keyCode);

            // numbers are  ok
            if (e.keyCode <= 57 && e.keyCode >= 48 ||
            // Backspace and Tab and Enter
                e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 13 ||
            // Home and End
                e.keyCode == 35 || e.keyCode == 36 ||
            // left and right arrows
                e.keyCode == 37 || e.keyCode == 39 ||                         
            // Del and Ins
                e.keyCode == 46 || e.keyCode == 45)
                
                return true;

            return false;
        });
    });
}
