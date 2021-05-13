window.addEventListener("load", function () {
  // store tabs variable
  const myTabs = document.querySelectorAll("ul.nav-tabs > li");

  function myTabClicks(tabClickEvent) {
    for (let i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }
    const clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    const myContentPanes = document.querySelectorAll(".tab-pane");
    for (let i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }
    const anchorReference = tabClickEvent.target;
    const activePaneId = anchorReference.getAttribute("href");
    const activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }

  for (let i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks)
  }


});

/*
document.querySelector(".to-top-bebidas").addEventListener("click", function () {
  scrollToTop();
});

document.querySelector(".to-top-alimentos").addEventListener("click", function () {
  scrollToTop();
});

document.querySelector(".to-top-postres").addEventListener("click", function () {
  scrollToTop();
});

document.querySelector(".to-top-desayunos").addEventListener("click", function () {
  scrollToTop();
});

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 2);
  }
};
*/
