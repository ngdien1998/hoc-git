$(document).ready(() => {
    $('.tabs').tabs();

    $(".dropdown-trigger").dropdown();

    let stickyNavTop = $("#navbar").offset().top;

    let stickyNav = () => {
        let scrollTop = $(window).scrollTop();

        if (scrollTop >= stickyNavTop) {
            $("#navbar").addClass("sticky");
            //$("#sidebar").addClass("sticky-sidebar");
        } else {
            $("#navbar").removeClass("sticky");
            //$("#sidebar").removeClass("sticky-sidebar");
        }
    };

    stickyNav();

    $(window).scroll(() => stickyNav());

    $('.carousel').carousel();

    $('.collapsible').collapsible();
});