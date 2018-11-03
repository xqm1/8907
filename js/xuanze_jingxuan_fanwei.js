$(function () {
    $("._topleft").live('click',function () {
        $(window).attr('location','创作_精选.html');
    })

    $("._ul1 li").live('click',function () {
        $("._ul1 li img").each(function () {
            $(this).hide();
        })
        var a1 = $(this).attr("k1")
        $("._ul1 li img").eq(a1).show();
    })
    $("._ul1 li img").hide()

})