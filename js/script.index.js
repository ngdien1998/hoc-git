$(document).ready(function () {
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true
    });

    $(".btn-sign-up").click(function () {
        window.open("./sign.up.html", "_self");
    });

    $("#dang-nhap").click(function () {
        window.open("./login.html", "_self");
    });

    $(".app-game").click(function () {
        window.open("webgame.html", "_blank");
    });

    $(".app").click(function () {
        window.open("./app.html", "_blank");
    });

    $("#banner-2").click(function() {
        window.open("software.html", "_blank");
    });

    $("#banner-3").click(function () {
        window.open("news.html", "_blank");
    });

    $(".news").click(function () {
        window.open("news.html", "_blank");
    });
});