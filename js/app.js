"use strict";

// ハンバーガーメニュー
$(document).ready(function () {
  $(".drawer").drawer();
});

// スライドアニメーション
$(".img-slider").slick({
  autoplay: true,
  accessibility: true,
  autoplaySpeed: 2000,
  vartical: false,
  centerMode: true,
  fade: true,
  centerMode: true,
});

// アコーディオン
$(".accordion-btn1").on("click", function () {
  $(".accordion1 ul").slideToggle();
});

$(".accordion-btn2").on("click", function () {
  $(".accordion2 ul").slideToggle();
});

$(".accordion-btn3").on("click", function () {
  $(".accordion3 ul").slideToggle();
});
