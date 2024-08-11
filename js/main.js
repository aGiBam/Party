$(function () {
  // for spinner loading
  $(".spinner").fadeOut(1000, function () {
    $(".loading").fadeOut(1000);
    $("body").css("overflow", "auto");
  });

  // for Accordion
$("#open").css("display","block")

  $(".toggle").click(function () {
    if ($(this).siblings().css("display") === "none") {
      $(this).siblings().slideDown(300);
    } else {
      $(this).siblings().slideUp(300);
    }

    // for close all div except div i click it
    for (let i = 0; i < $(".toggle").length; i++) {
      $($(".toggle")[i]).not(this).siblings().slideUp(300);
    }
  });

  // for timer
  setInterval(() => {
    let currentDate = new Date();
    let futureDate = new Date("2023-10-25");

    let diffDate = futureDate - currentDate - 1000 * 60 * (2 * 60);

    let seconds = Math.floor(diffDate / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
  }, 1000);

  // for textarea
  let myTextarea = document.getElementById("textareaField");
  myTextarea.oninput = function () {
    if (myTextarea.value.length < 100) {
      console.log("equal");
      $("#countDownNumber")
        .text(100 - myTextarea.value.length)
        .css("color", "#333");
    } else {
      $("#countDownNumber").text(100 - myTextarea.value.length);
      $("#countDownNumber")
        .text(" your available character finished ")
        .css("color", "red");
    }
  };

  // for close and open side navbar
  $(".sideNav").css("left", `-${$(".sideNav").outerWidth()}px`);
  $(".openIcon").click(function () {
    if ($(".sideNav").css("left") === "0px") {
      $(".sideNav").css("left", `-${$(".sideNav").outerWidth()}px`);
    } else {
      $(".sideNav").css("left", 0);
    }
  });

  // for scroll
  $("a[href^='#']").click(function (e) {
    let href = e.target.getAttribute("href");
    let sectionOffset = $(href).offset().top;
    $("body,html").animate({ scrollTop: sectionOffset }, 300);
  });
});
