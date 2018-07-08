$(document).ready(function () {
    $('.tabs').tabs();

    $(".dropdown-trigger").dropdown();

    let stickyNavTop = $("#navbar").offset().top;

    let stickyNav = () => {
        let scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $("#navbar").addClass("sticky");
        } else {
            $("#navbar").removeClass("sticky");
        }
    };

    $(window).scroll(() => stickyNav());

    $(".pagination-item").click(function () {
        $(".pagination-item").removeClass("active");
        $(this).addClass("active");

        let index = parseInt($(this).children().html());
        $(".navigation").removeClass("disabled");
        if (index == 5) {
            $("#next").parent().addClass("disabled");
        } else if (index == 1) {
            $("#previous").parent().addClass("disabled");
        }
        return false;
    });

    $("#previous").click(function () {
        if (!$(this).parent().hasClass("disabled")) {
            let prev = $(".pagination .active").prev();

            $(".pagination .active").removeClass("active");
            $(prev).addClass("active");

            if (parseInt($(prev).children().html()) == 1) {
                $(prev).prev().addClass("disabled");
            }
        }
        return false;
    });

    $("#next").click(function () {
        if (!$(this).parent().hasClass("disabled")) {
            let next = $(".pagination .active").next();

            $(".pagination .active").removeClass("active");
            $(next).addClass("active");

            if (parseInt($(next).children().html()) == 5) {
                $(next).next().addClass("disabled");
            }
        }
        return false;
    });

    $(".app").click(function () {
        window.open("app.html", "_blank");
    });

    console.log($(".type").width());
});