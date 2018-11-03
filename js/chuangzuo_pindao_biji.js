window.onload = function () {
    $(".footimgs").eq(0).click(function () {
        $(".footimgs").each(function () {
            $(".footimgs p").css("color","");
            $(".footimgs img").eq(0).attr("src","images/mtab1_off.png")
            $(".footimgs img").eq(1).attr("src","images/mtab2_off.png")
            $(".footimgs img").eq(2).attr("src","images/mtab3_off.png")
            $(".footimgs img").eq(3).attr("src","images/mtab4_off.png")
            $(".footimgs img").eq(4).attr("src","images/mtab5_off.png")
        })
        var r = $(this).attr("k")
        $(".footimgs p").eq(r).css("color","blue");
        $(".footimgs img").eq(r).attr("src","images/mtab1_on.png")
    })

    $(".footimgs").eq(1).click(function () {
        $(".footimgs").each(function () {
            $(".footimgs p").css("color","");
            $(".footimgs img").eq(0).attr("src","images/mtab1_off.png")
            $(".footimgs img").eq(1).attr("src","images/mtab2_off.png")
            $(".footimgs img").eq(2).attr("src","images/mtab3_off.png")
            $(".footimgs img").eq(3).attr("src","images/mtab4_off.png")
            $(".footimgs img").eq(4).attr("src","images/mtab5_off.png")
        })
        var r = $(this).attr("k")
        $(".footimgs p").eq(r).css("color","blue");
        $(".footimgs img").eq(r).attr("src","images/mtab2_on.png")
    })

    $(".footimgs").eq(2).click(function () {
        $(".footimgs").each(function () {
            $(".footimgs p").css("color","");
            $(".footimgs img").eq(0).attr("src","images/mtab1_off.png")
            $(".footimgs img").eq(1).attr("src","images/mtab2_off.png")
            $(".footimgs img").eq(2).attr("src","images/mtab3_off.png")
            $(".footimgs img").eq(3).attr("src","images/mtab4_off.png")
            $(".footimgs img").eq(4).attr("src","images/mtab5_off.png")
        })
        var r = $(this).attr("k")
        $(".footimgs p").eq(r).css("color","blue");
        $(".footimgs img").eq(r).attr("src","images/mtab3_on.png")
    })

    $(".footimgs").eq(3).click(function () {
        $(".footimgs").each(function () {
            $(".footimgs p").css("color","");
            $(".footimgs img").eq(0).attr("src","images/mtab1_off.png")
            $(".footimgs img").eq(1).attr("src","images/mtab2_off.png")
            $(".footimgs img").eq(2).attr("src","images/mtab3_off.png")
            $(".footimgs img").eq(3).attr("src","images/mtab4_off.png")
            $(".footimgs img").eq(4).attr("src","images/mtab5_off.png")
        })
        var r = $(this).attr("k")
        $(".footimgs p").eq(r).css("color","blue");
        $(".footimgs img").eq(r).attr("src","images/mtab4_on.png")
    })
    $(".footimgs").eq(4).click(function () {
        $(".footimgs").each(function () {
            $(".footimgs p").css("color","");
            $(".footimgs img").eq(0).attr("src","images/mtab1_off.png")
            $(".footimgs img").eq(1).attr("src","images/mtab2_off.png")
            $(".footimgs img").eq(2).attr("src","images/mtab3_off.png")
            $(".footimgs img").eq(3).attr("src","images/mtab4_off.png")
            $(".footimgs img").eq(4).attr("src","images/mtab5_off.png")
        })
        var r = $(this).attr("k")
        $(".footimgs p").eq(r).css("color","blue");
        $(".footimgs img").eq(r).attr("src","images/mtab5_on.png")
    })
}