// Toggle Sidebar
function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.className === "sidebar") {
    sidebar.classList.add("sidebar-active");
  } else {
    sidebar.classList.remove("sidebar-active");
  }
}

// Tables
let tables = document.querySelectorAll("table");
tables.forEach((table) => {
  table.classList.add("table");
  table.classList.add("table-bordered");
  table.classList.add("table-hover");
  table.style.margin = "1rem auto";
});

let tableCode = document.querySelectorAll("code>table");
tableCode.forEach((eachTableCode) => {
  eachTableCode.classList.remove("table");
});

// Copyright Year
let currentYear = document.getElementById("currentYear");
let setYear = new Date();
currentYear.innerHTML = setYear.getFullYear();

// Share Post
function toShare(event) {
  let social = event.target;
  let urlPost = location.toString();

  let share;

  switch (true) {
    case social.classList.contains("whatsapp"):
      share = "https://api.whatsapp.com/send?text=" + urlPost;
      window.open(share, "_blank");
      break;
    case social.classList.contains("linkedin"):
      share = "https://www.linkedin.com/shareArticle?mini=true&url=" + urlPost;
      window.open(share, "_blank");
      break;
    case social.classList.contains("mastodon"):
      share = "https://mastodon.com.br/share?url=" + urlPost;
      window.open(share, "_blank");
      break;
    case social.classList.contains("telegram"):
      share = "https://t.me/share/url?url=" + urlPost;
      window.open(share, "_blank");
      break;
    case social.classList.contains("reddit"):
      share = "https://www.reddit.com/submit?url=" + urlPost;
      window.open(share, "_blank");
      break;
    case social.classList.contains("pocket"):
      share = "https://getpocket.com/save?url=" + urlPost;
      window.open(share, "_blank");
      break;
    default:
      share = urlPost;
      let copyUrl = document.querySelector(".fa-share-nodes");
      copyUrl.addEventListener("click", () => {
        navigator.clipboard.writeText(share);
        copyUrl.setAttribute("title", "Copiado!");
      });
      break;
  }
}

// Animations
function blurAnimation() {
  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-animation");
      } else {
        entry.target.classList.remove("show-animation");
      }
    });
  });

  const elements = document.querySelectorAll(".hidden-animation");

  elements.forEach((elements) => {
    myObserver.observe(elements);
  });
}

blurAnimation();

// Back to Top
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  backToTop();
});

// Banner Post
let bannerPost = document.querySelector(".post-banner img");

if (bannerPost) {
  let bannerSrc = bannerPost.getAttribute("src");
  if (!bannerSrc.includes("assets")) {
    let bannerHidden = document.querySelector(".post-banner");
    bannerHidden.style.display = "none";
  }
}
