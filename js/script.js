AOS.init();

$(function(){

    var open = false;

    $(".trigger").click(function(){
        if(open == false) {
            $(".navmenu").animate({
                "left" : "0",
            });
            $(".navclose").fadeIn();
            $(".navopen").fadeOut();
            open = true;
        }
        else {
            $(".navmenu").animate({
                "left" : "100%",
            });
            $(".navclose").fadeOut();
            $(".navopen").fadeIn();
            open = false;
        }
    });

    $(".navLink").click(function(){
        $(".navmenu").animate({
            "left" : "100%",
        });
        $(".navclose").fadeOut();
        $(".navopen").fadeIn();
        open = false;
    });

});