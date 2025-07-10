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
// gallery.js

document.addEventListener('DOMContentLoaded', function () {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = Array.from(thumbnails).map(t => t.getAttribute('data-full'));
  let currentIndex = 0;

  function updateMainImage(index) {
    mainImage.src = images[index];

    thumbnails.forEach((t, i) => {
      t.classList.toggle('active', i === index);

      if (i === index) {
        t.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    });

    currentIndex = index;
  }

  // サムネイルクリック
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      updateMainImage(index);
    });
  });

  // 前へ
  prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(newIndex);
  });

  // 次へ
  nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % images.length;
    updateMainImage(newIndex);
  });
});
