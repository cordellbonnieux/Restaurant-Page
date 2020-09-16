import {start} from "./start.js";
import {tabs} from "./tabsy.js";
import {about} from "./about.js";
import {menu} from "./menu.js";
import {top} from "./top.js";
// load page
const content = document.getElementById('content');
start(content);
tabs();
about();
menu();
top();


// add images (make a module later)
import donBanner from "./img/dons-banner.jpg";
import donDon from "./img/donMascot.png";
// don mascot
const mascot = new Image();
mascot.src = donDon;
mascot.setAttribute("id", "donMascot");
const headerLeft = document.getElementById("headerLeft");
headerLeft.appendChild(mascot);



//css
import css from "./style.css";