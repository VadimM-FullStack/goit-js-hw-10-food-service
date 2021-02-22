import menu from "../menu.json";
import itemsTemplate from "../templates/menu-items.hbs";

const markupMenu = itemsTemplate(menu);
const menuRef = document.querySelector(".js-menu");

menuRef.insertAdjacentHTML("beforeend", markupMenu);
