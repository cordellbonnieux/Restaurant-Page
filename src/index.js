import {start} from "./start.js";
import {tabs} from "./tabsy.js";
import {about} from "./about.js";
import {menu} from "./menu.js";



const content = document.getElementById('content');
start(content);
tabs();
about();
menu();

// load the stylesheet in at the end?
//css
import css from "./style.css";