(function () {
  const storageKey = "siteLang";
  const root = document.documentElement;

  function normalizeLanguage(value) {
    return value === "zh" ? "zh" : "en";
  }

  function readStoredLanguage() {
    try {
      return normalizeLanguage(localStorage.getItem(storageKey) || root.dataset.lang);
    } catch (error) {
      return normalizeLanguage(root.dataset.lang);
    }
  }

  function storeLanguage(lang) {
    try {
      localStorage.setItem(storageKey, lang);
    } catch (error) {
      // Keep the UI usable when storage is unavailable.
    }
  }

  function updateSidebarToc(lang) {
    document.querySelectorAll('#toc-sidebar a[href^="#"]').forEach((link) => {
      const headingId = decodeURIComponent(link.getAttribute("href").slice(1));
      const heading = document.getElementById(headingId);
      const label = lang === "zh" ? heading?.dataset.tocTextZh : heading?.dataset.tocTextEn;

      if (label) {
        link.textContent = label;
      }
    });
  }

  function applyLanguage(lang) {
    const nextLang = normalizeLanguage(lang);
    root.dataset.lang = nextLang;
    root.lang = nextLang === "zh" ? "zh-CN" : "en";

    if (document.body) {
      document.body.dataset.lang = nextLang;
    }

    document.querySelectorAll("[data-language-current]").forEach((label) => {
      label.textContent = nextLang === "zh" ? "中文" : "EN";
    });

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      const isChinese = nextLang === "zh";
      button.setAttribute("aria-pressed", String(isChinese));
      button.setAttribute("title", isChinese ? "Switch to English" : "切换到中文");
      button.setAttribute("aria-label", isChinese ? "Switch to English" : "Switch to Chinese");
    });

    updateSidebarToc(nextLang);
    window.requestAnimationFrame(() => updateSidebarToc(nextLang));

    storeLanguage(nextLang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(readStoredLanguage());

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(root.dataset.lang === "zh" ? "en" : "zh");
      });
    });
  });
})();
