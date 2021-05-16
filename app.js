$(document).ready(function () {

    let me = 0;

    $(".box").click(function () {

        if (me == 0) {
            $(this).addClass("green");
            me = 1
            
        }
        else if (me == 1) {
            $(this).addClass("orange");
            me = 0
        }

    });
});