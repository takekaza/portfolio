// ローディングアニメーションJS
"use strict";

//読み込みが完了したら実行
window.addEventListener("load", function () {
  // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
  endLoading();
});

//10秒経過した段階で、上記の処理を上書き、強制終了
setTimeout("endLoading()", 10000);

//ローディング非表示処理
function endLoading() {
  // 1秒かけてロゴを非表示にし、その後0.8秒かけて背景を非表示にする
  $(".js-loading img").fadeOut(1000, function () {
    $(".js-loading").fadeOut(900);
  });
}

// // スクロールリンク
// $(function () {
//   // スクロールのオフセット値
//   var offsetY = -10;
//   // スクロールにかかる時間
//   var time = 800;
//   // ページ内リンクのみを取得
//   $("a[href^=#]").click(function () {
//     // 移動先となる要素を取得
//     var target = $(this.hash);
//     if (!target.length) return;
//     // 移動先となる値
//     var targetY = target.offset().top + offsetY;
//     // スクロールアニメーション
//     $("html,body").animate({ scrollTop: targetY }, time, "swing");
//     // ハッシュ書き換えとく
//     window.history.pushState(null, null, this.hash);
//     // デフォルトの処理はキャンセル
//     return false;
//   });
// });

$(function () {
  // スクロールアップ
  $(window).scroll(function () {
    $(".content").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 300) {
        $(this).addClass("effect-scroll");
      }
    });
  });
  // スクロールアニメーション
  ScrollReveal().reveal(".profile__title", {
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
    reset: false, // 何回もアニメーション表示するか
    origin: "left",
    distance: "1900px",
    scale: 0.5,
    delay: 1500,
  });
  ScrollReveal().reveal(".profile__sub", {
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
    reset: false, // 何回もアニメーション表示するか
    origin: "left",
    distance: "1900px",
    scale: 0.5,
    delay: 2200,
  });
  ScrollReveal().reveal(".main-image", {
    duration: 1200, // アニメーションの完了にかかる時間
    viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
    reset: false, // 何回もアニメーション表示するか
    origin: "right",
    distance: "390px",
    scale: 0.5,
    delay: 1500,
  });
  ScrollReveal().reveal(".profile_box__sub ", {
    duration: 1350, // アニメーションの完了にかかる時間
    viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
    reset: false, // 何回もアニメーション表示するか
    origin: "left",
    distance: "300px",
    scale: 0.5,
    delay: 1400,
  });
});
