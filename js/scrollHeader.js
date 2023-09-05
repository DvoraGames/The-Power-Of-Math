$(document).ready(function () {
    var screenWidth = $(window).width();
    var index = $("body").is("#index_Page");
    var menuShow = false;
    
    $("#menu-btn").click(function () {
        $("#menu-btn").toggleClass("active");
        $(".navbar").toggleClass("down");
    });

    if (index) {

        $("#header").css("position", "fixed");
        $("#header").css("top", "-100px")

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 250) {
                $("#header").css("top", "0px")
            } else {
                $("#header").css("top", "-100px")
            }
        });
    } else {
        $("header").css("position", "sticky");
    }
});