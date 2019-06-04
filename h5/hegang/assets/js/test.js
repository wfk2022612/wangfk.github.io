(function (jqEl) {
    var originTop = jqEl.offset().top
    $(window).on("scroll", function () {
        var scrollY = window.scrollY || document.body.scrollTop | document.documentElement.scrollTop
        if (scrollY >= originTop) {
            jqEl.css({
                position: 'fixed',
                top: '0',
                'z-index': 10
            })
        } else {
            jqEl.css({
                position: "relative",
                top: null,
                'z-index': null
            })
        }
    })
})($("#test"))