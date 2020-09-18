import {start} from "./start.js";
import {tabs} from "./tabsy.js";
import {about} from "./about.js";
import {menu} from "./menu.js";
import {top} from "./top.js";
import {contact} from "./contact.js";
import {footer} from "./footer.js";
    // load images
    import background from "./img/wallpaper.png";
    import donBanner from "./img/dons-banner.jpg";
    import donDon from "./img/donMascot.png";
    import aboutUsImg from "./img/aboutUs.jpg";
    import donsLogo from "./img/donsLogo.png";
    // load menu images
    import starter1 from "./img/menu/starter1.jpg";
    import starter2 from "./img/menu/starter2.jpg";
    import starter3 from "./img/menu/starter3.jpg";
    //
    import sandwich1 from "./img/menu/sandwich1.jpg";
    import sandwich2 from "./img/menu/sandwich2.jpg";
    import sandwich3 from "./img/menu/sandwich3.jpg";
    //
    import bowl1 from "./img/menu/bowl1.jpg";
    import bowl2 from "./img/menu/bowl2.jpg";
    import bowl3 from "./img/menu/bowl3.jpg";
    // load social icons
    import facebook from "./img/social/Facebook_2.png";
    import instagram from "./img/social/Instagram_2.png";
    import twitter from "./img/social/Twitter_2.png";
// load page
const content = document.getElementById('content');
start(content);
tabs();
about();
top();
menu();
contact();
footer();
// add images
function addLogo(){
    const logo = new Image();
        logo.src = donsLogo;
        logo.setAttribute("id", "logo");
    const pageLogoArea = document.getElementById("pageLogo");
    pageLogoArea.appendChild(logo);
}
addLogo();
function socialIcons(){
    //social icons
    const social = document.getElementById("social");
    // fb
    const fbIcon = new Image();
    fbIcon.src = facebook;
    fbIcon.setAttribute("id", "facebook");
    social.appendChild(fbIcon);
    // insta
    const instaIcon = new Image();
    instaIcon.src = instagram;
    instaIcon.setAttribute("id", "instagram");
    social.appendChild(instaIcon);
    // Twitter
    const twitterIcon = new Image();
    twitterIcon.src = twitter;
    twitterIcon.setAttribute("id", "twitter");
    social.appendChild(twitterIcon);
}
socialIcons();
function mascotDon(){
    // don mascot
    const mascot = new Image();
    mascot.src = donDon;
    mascot.setAttribute("id", "donMascot");
    const headerLeft = document.getElementById("headerLeft");
    headerLeft.appendChild(mascot);
}
mascotDon();
function addAboutUsImg(){
    // about us section image
    const aboutUs = new Image();
    aboutUs.src = aboutUsImg;
    aboutUs.setAttribute("id", "aboutUsImg");
    const aboutUsSection = document.getElementById("aboutUsImgSection");
    aboutUsSection.appendChild(aboutUs);
}
addAboutUsImg();
function addMenuImages(){
    const starter1Id = document.getElementById("starter1");
    const starter2Id = document.getElementById("starter2");
    const starter3Id = document.getElementById("starter3");
    //
    const sandwich1Id = document.getElementById("sandwich1");
    const sandwich2Id = document.getElementById("sandwich2");
    const sandwich3Id = document.getElementById("sandwich3");
    //
    const bowl1Id = document.getElementById("bowl1");
    const bowl2Id = document.getElementById("bowl2");
    const bowl3Id = document.getElementById("bowl3");
    // starters
    let starter1Img = new Image();
        starter1Img.src = starter1;
        starter1Img.setAttribute("id", "starter1Img");
        starter1Img.setAttribute("class", "menuImg");
        starter1Id.prepend(starter1Img);
    let starter2Img = new Image();
        starter2Img.src = starter2;
        starter2Img.setAttribute("id", "starter2Img");
        starter2Img.setAttribute("class", "menuImg");
        starter2Id.prepend(starter2Img);
    let starter3Img = new Image();
        starter3Img.src = starter3;
        starter3Img.setAttribute("id", "starter3Img");
        starter3Img.setAttribute("class", "menuImg");
        starter3Id.prepend(starter3Img);
    // sandwiches
    let sandwich1Img = new Image();
        sandwich1Img.src = sandwich1;
        sandwich1Img.setAttribute("id", "sandwich1Img");
        sandwich1Img.setAttribute("class", "menuImg");
        sandwich1Id.prepend(sandwich1Img);
    let sandwich2Img = new Image();
        sandwich2Img.src = sandwich2;
        sandwich2Img.setAttribute("id", "sandwich2Img");
        sandwich2Img.setAttribute("class", "menuImg");
        sandwich2Id.prepend(sandwich2Img);
    let sandwich3Img = new Image();
        sandwich3Img.src = sandwich3;
        sandwich3Img.setAttribute("id", "sandwich3Img");
        sandwich3Img.setAttribute("class", "menuImg");
        sandwich3Id.prepend(sandwich3Img);
    // bowls
    let bowl1Img = new Image();
        bowl1Img.src = bowl1;
        bowl1Img.setAttribute("id", "bowl1Img");
        bowl1Img.setAttribute("class", "menuImg");
        bowl1Id.prepend(bowl1Img);
    let bowl2Img = new Image();
        bowl2Img.src = bowl2;
        bowl2Img.setAttribute("id", "bowl2Img");
        bowl2Img.setAttribute("class", "menuImg");
        bowl2Id.prepend(bowl2Img);
    let bowl3Img = new Image();
        bowl3Img.src = bowl3;
        bowl3Img.setAttribute("id", "bowl3Img");
        bowl3Img.setAttribute("class", "menuImg");
        bowl3Id.prepend(bowl3Img);
}
addMenuImages();
// add css
import css from "./style.css";