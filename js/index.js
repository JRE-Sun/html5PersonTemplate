$(function() {
    // alert("<s></s>");
    $('#aa').waypoint(function() {
        // alert('B5教程网 www.bcty365.com');
        $("#img1").fadeToggle("slow");
    }, { offset: -304 });

    $(".div1").css("height", window.innerHeight + "px");
    $(".div2").css("height", window.innerHeight + "px");
    $(".div3").css("height", window.innerHeight + "px");
    $(".div4").css("height", window.innerHeight + "px");
    $(".div5").css("height", window.innerHeight + "px");

    // 固定导航条代码
    var navHeight = $(".header").offset().top;
    // alert(navHeight);
    var navFix = $(".header");
    $(window).scroll(function() {
            if ($(this).scrollTop() > navHeight) {
                navFix.addClass("navFix");
                $(".fixbg").css("display", "block");
                $(".content .div1 .header .navbar li a").addClass("change");
            } else {
                navFix.removeClass("navFix");
                $(".fixbg").css("display", "none");
                $(".content .div1 .header .navbar li a").removeClass("change");
            }
        })
        // 固定导航条代码结束

    //内容信息导航锚点开始
    $('.navbar').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 768,
        scrollSpy: true
    });

    // $('.click-me').navScroll({
    //     navHeight: 0
    // });

    // $('.nav-wrap').on('click', '.nav-mobile', function(e) {
    //     e.preventDefault();
    //     $('.nav-wrap ul').slideToggle('fast');
    // });
    //内容信息导航锚点结束

});