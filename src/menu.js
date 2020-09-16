let menu = document.getElementById("menu");
export function starters(){
    //starters
    let starters = document.createElement("div");
        starters.setAttribute("id", "starters");
        starters.setAttribute("class", "menuSection");
        menu.appendChild(starters);
        // starter 1
        let starter1 = document.createElement("div");
            starter1.setAttribute("class", "menuItem");
            starter1.setAttribute("id", "starter1");
            let starter1Title = document.createElement("h3");
                starter1Title.textContent = "Starter 1"
            let starter1Price = document.createElement("span");
                starter1Price.textContent = "8";
            let starter1Text = document.createElement("p");
                starter1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter1);
            starter1.appendChild(starter1Title);
            starter1.appendChild(starter1Price);
            starter1.appendChild(starter1Text);
        // starter 2
        let starter2 = document.createElement("div");
            starter2.setAttribute("class", "menuItem");
            starter2.setAttribute("id", "starter2");
            let starter2Title = document.createElement("h3");
                starter2Title.textContent = "Starter 2"
            let starter2Price = document.createElement("span");
                starter2Price.textContent = "8";
            let starter2Text = document.createElement("p");
                starter2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter2);
            starter2.appendChild(starter2Title);
            starter2.appendChild(starter2Price);
            starter2.appendChild(starter2Text);
        // starter 3
        let starter3 = document.createElement("div");
            starter3.setAttribute("class", "menuItem");
            starter3.setAttribute("id", "starter3");
            let starter3Title = document.createElement("h3");
                starter3Title.textContent = "Starter 3"
            let starter3Price = document.createElement("span");
                starter3Price.textContent = "8";
            let starter3Text = document.createElement("p");
                starter3Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter3);
            starter3.appendChild(starter3Title);
            starter3.appendChild(starter3Price);
            starter3.appendChild(starter3Text);
        // maybe try a for each loop for menu items with an array?
}