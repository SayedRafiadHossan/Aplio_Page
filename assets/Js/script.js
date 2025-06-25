function closeSearchModal() {
  const search = document.getElementById("search-container");
  search.style.display = "none";
}

function openSearchModal() {
  const search = document.getElementById("search-container");
  search.style.display = "block";
}

function autoNavbar() {
  //   console.log(window.scrollY);
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
