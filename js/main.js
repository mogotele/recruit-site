const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((otherItem) => {
      const otherAnswer = otherItem.querySelector(".faq-answer");

      otherItem.classList.remove("is-open");
      otherAnswer.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    alert(
      `${name}様\nご応募ありがとうございます。\n現在はサンプルフォームのため、実際の送信は行われていません。`
    );
  });
}

// ========================================
// ハンバーガーメニュー
// ========================================

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuButton && siteNav) {
  const closeMenu = () => {
    menuButton.classList.remove("is-open");
    siteNav.classList.remove("is-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");

    document.body.classList.remove("menu-open");
  };

  // ページを開いた時は必ず閉じた状態にする
  closeMenu();

  menuButton.addEventListener("click", () => {
    const isOpen = !siteNav.classList.contains("is-open");

    menuButton.classList.toggle("is-open", isOpen);
    siteNav.classList.toggle("is-open", isOpen);

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );

    document.body.classList.toggle("menu-open", isOpen);
  });

  // メニュー内のリンクを押したら閉じる
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // PC幅に戻した時もメニューを閉じる
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      closeMenu();
    }
  });
}