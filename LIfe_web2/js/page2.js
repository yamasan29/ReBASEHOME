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

//物件画像
document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");

  // 初期表示で最初のサムネイルをアクティブにする
  if (thumbnails.length > 0) {
    thumbnails[0].classList.add("active");
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // 現在アクティブなサムネイルからactiveクラスを削除
      const currentActive = document.querySelector(".thumbnail.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }

      // クリックされたサムネイルにactiveクラスを追加
      this.classList.add("active");

      // メイン画像をフェードアウトさせる
      mainImage.style.opacity = 0;

      // 画像のロードが完了してから表示する（少し遅延させてフェードアウトを強調）
      setTimeout(() => {
        const newImageSrc = this.getAttribute("data-full");
        mainImage.src = newImageSrc; // 新しい画像のパスを設定
        mainImage.alt = this.alt; // altテキストも更新

        // 新しい画像が表示されたらフェードインさせる
        mainImage.style.opacity = 1;
      }, 300); // CSSのtransition時間と同じか少し長めに設定
    });
  });
});
