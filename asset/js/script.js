$(document).ready(function () {

    $(".nav ul li a").on("click", function () {
        $(".nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $(".menu").on("click", function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open-menu");
    });

    $(".nav").on("click", function () {
        $(".menu").removeClass("active");
        $(".overlay").removeClass("open-menu");
    });
});