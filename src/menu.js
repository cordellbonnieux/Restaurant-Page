export function menu(){
    let menu = document.getElementById("menu");
    //starters
    let starters = document.createElement("div");
        starters.setAttribute("id", "starters");
        starters.setAttribute("class", "menuSection");
        menu.appendChild(starters);
        // some css for now
        //starters.style.cssText = "display:block; width:90%; margin:25px auto; background:rgba(255,255,255,0.8);";
        // starter 1
        let starter1 = document.createElement("div");
            starter1.setAttribute("class", "menuItem");
            let starter1Img = document.createElement("div");
                starter1Img.setAttribute("id", "starter1Img");
            let starter1Title = document.createElement("h3");
                starter1Title.textContent = "Starter 1"
            let starter1Price = document.createElement("span");
                starter1Price.textContent = "8";
            let starter1Text = document.createElement("p");
                starter1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter1);
            starter1.appendChild(starter1Img);
            starter1.appendChild(starter1Title);
            starter1.appendChild(starter1Price);
            starter1.appendChild(starter1Text);
        // starter 2
        let starter2 = document.createElement("div");
            starter2.setAttribute("class", "menuItem");
            let starter2Img = document.createElement("div");
                starter2Img.setAttribute("id", "starter2Img");
            let starter2Title = document.createElement("h3");
                starter2Title.textContent = "Starter 2"
            let starter2Price = document.createElement("span");
                starter2Price.textContent = "8";
            let starter2Text = document.createElement("p");
                starter2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter2);
            starter2.appendChild(starter2Img);
            starter2.appendChild(starter2Title);
            starter2.appendChild(starter2Price);
            starter2.appendChild(starter2Text);
        // starter 3
        let starter3 = document.createElement("div");
            starter3.setAttribute("class", "menuItem");
            let starter3Img = document.createElement("div");
                starter3Img.setAttribute("id", "starter3Img");
            let starter3Title = document.createElement("h3");
                starter3Title.textContent = "Starter 3"
            let starter3Price = document.createElement("span");
                starter3Price.textContent = "8";
            let starter3Text = document.createElement("p");
                starter3Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter3);
            starter3.appendChild(starter3Img);
            starter3.appendChild(starter3Title);
            starter3.appendChild(starter3Price);
            starter3.appendChild(starter3Text);

        // maybe try a for each loop for menu items with an array?
}