console.log("ok");
const tabs = [...document.querySelectorAll(".tab")];

const tabsAnimation = (e) => {
  const tabContents = [...document.querySelectorAll(".tab-content")];

  const indexToRemove = tabs.findIndex((tab) =>
    tab.classList.contains("active-tab")
  );

  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  const indexToShow = tabs.indexOf(e.target);

  tabs[indexToShow].classList.add("active-tab");
  tabContents[indexToShow].classList.add("active-tab-content");
};

tabs.forEach((tab) => tab.addEventListener("click", tabsAnimation));
