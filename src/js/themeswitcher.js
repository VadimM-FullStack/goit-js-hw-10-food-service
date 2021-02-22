const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const bodyRef = document.querySelector("body");
const localTheme = localStorage.getItem("theme");
const themeSwitchRef = document.getElementById("theme-switch-toggle");

const onLoad = function () {
  if (localTheme === Theme.DARK) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
    themeSwitchRef.setAttribute("checked", true);
  }
};

const onClickToggleTheme = function () {
  if (themeSwitchRef.checked) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  }
};

document.addEventListener("DOMContentLoaded", onLoad);
themeSwitchRef.addEventListener("change", onClickToggleTheme);
