$(function() {
    // alert($(window).height());


    $(".div2").waypoint(function() {
        $("#img1").addClass("img1");
        $("#img2").addClass("img2");
        $("#img3").addClass("img3");
        $("#img4").addClass("img4");
        $("#img5").addClass("img5");
        $("#img6").addClass("img6");
    }, { offset: 250 });

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

    $.scrollify({
        section: ".panel"
    });

    //内容信息导航锚点开始
    $('.navbar').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 768,
        scrollSpy: true
    });
    //内容信息导航锚点结束

    $("#rocket-to-top").click(function() {
        $("html,body").animate({ scrollTop: $(window).scrollTop() + $(window).height() }, "slow");
    });

    $("#rocket-to-top").hover(function() {
        $(this).css("background", "url(images/向下箭头2.png) no-repeat");
    }, function() {
        $(this).css("background", "url(images/向下箭头1.png) no-repeat");
    });
});