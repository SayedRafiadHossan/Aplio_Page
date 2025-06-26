function autoNavbar() {
  const navBar = document.getElementById("full-navbar");
  if (window.scrollY > 100) {
    navBar.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    navBar.style.backdropFilter = "blur(10px)";
    navBar.style.padding = "5px 0px";
  } else {
    navBar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    navBar.style.backdropFilter = "blur(0px)";
    navBar.style.padding = "20px 0px";
  }
}

function closeSearchModal() {
  const search = document.getElementById("search-container");
  search.style.display = "none";
}

function openSearchModal() {
  const search = document.getElementById("search-container");
  search.style.display = "block";
}

// FAQ

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    question.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
