$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {

    $("#header").toggleClass("open");
  });
  $("#mask , #navi a").on("click", function () {

    $("#header").removeClass("open");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {

    let href = $(this).attr("href");

    let target = $(href == "#" || href == "" ? "html" : href);

    let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 600, "swing");

    return false;
  });
  // 動きのきっかけとなるアニメーションの名前を定義
  function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight + $(this).height()) {
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  /*=================================================
    スライダー
    ===================================================*/
  $('.slider').slick({
    autoplay: true, // 自動再生ON
    fade: true, // フェードON
    arrows: false, // 矢印OFF
    speed: 2000, // スライド、フェードアニメーションの速度1000ミリ秒
    autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
    pauseOnFocus: false, // フォーカスで一時停止OFF
    pauseOnHover: false, // マウスホバーで一時停止OFF
  });
});

