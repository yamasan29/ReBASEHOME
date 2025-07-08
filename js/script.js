//ドロワーメニュー
const menuBtn = document.getElementById("menu-btn");
const drawerMenu = document.getElementById("drawer-menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  drawerMenu.classList.add("open");
});

// メニュー内のリンクをクリックしたら閉じる
document.querySelectorAll(".drawer-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    drawerMenu.classList.remove("open");
  });
});

closeBtn.addEventListener("click", () => {
  drawerMenu.classList.remove("open");

  // ホームセクションへスクロール（#homeへ）
  const homeSection = document.querySelector("#home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" }); // なめらかに移動
  }
});

//フェードイン
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});

//topへ戻るボタン

$(function() {
  // スクロール時の処理
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $('#back-to-top').fadeIn(300);
    } else {
      $('#back-to-top').fadeOut(300);
    }
  });

  // クリック時にトップへ戻る
  $('#back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
