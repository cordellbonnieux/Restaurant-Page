export function menu(){
    let menuContainer = document.getElementById("menu");
    //starters Container
    let startersContainer = document.createElement("div");
        startersContainer.setAttribute("id", "startersContainer");
        menuContainer.appendChild(startersContainer);
        // starters title
    let startersTitle = document.createElement("h2");
        startersTitle.textContent = "Starters";
        startersContainer.appendChild(startersTitle);
    //starters
    let starters = document.createElement("div");
        starters.setAttribute("id", "starters");
        starters.setAttribute("class", "menuSection");
        startersContainer.appendChild(starters);
        // starter 1
        let starter1 = document.createElement("div");
            starter1.setAttribute("class", "menuItem");
            starter1.setAttribute("id", "starter1");
            let starter1Title = document.createElement("h3");
                starter1Title.textContent = "Starter 1"
            let starter1Price = document.createElement("span");
                starter1Price.textContent = "12";
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
                starter3Price.textContent = "7";
            let starter3Text = document.createElement("p");
                starter3Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            starters.appendChild(starter3);
            starter3.appendChild(starter3Title);
            starter3.appendChild(starter3Price);
            starter3.appendChild(starter3Text);
    //sandwiches Container
    let sandwichesContainer = document.createElement("div");
        sandwichesContainer.setAttribute("id", "sandwichesContainer");
        menuContainer.appendChild(sandwichesContainer);
    // sandwiches title
    let sandwichesTitle = document.createElement("h2");
        sandwichesTitle.textContent = "Sandwiches";
        sandwichesContainer.appendChild(sandwichesTitle);
    // sandwiches
    let sandwiches = document.createElement("div");
        sandwiches.setAttribute("id", "sandwiches");
        sandwiches.setAttribute("class", "menuSection");
        sandwichesContainer.appendChild(sandwiches);
        // sandwich 1
        let sandwich1 = document.createElement("div");
            sandwich1.setAttribute("class", "menuItem");
            sandwich1.setAttribute("id", "sandwich1");
            let sandwich1Title = document.createElement("h3");
                sandwich1Title.textContent = "sandwich 1"
            let sandwich1Price = document.createElement("span");
                sandwich1Price.textContent = "10";
            let sandwich1Text = document.createElement("p");
                sandwich1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            sandwiches.appendChild(sandwich1);
            sandwich1.appendChild(sandwich1Title);
            sandwich1.appendChild(sandwich1Price);
            sandwich1.appendChild(sandwich1Text);
        // sandwich 2
        let sandwich2 = document.createElement("div");
            sandwich2.setAttribute("class", "menuItem");
            sandwich2.setAttribute("id", "sandwich2");
            let sandwich2Title = document.createElement("h3");
                sandwich2Title.textContent = "sandwich 2"
            let sandwich2Price = document.createElement("span");
                sandwich2Price.textContent = "11";
            let sandwich2Text = document.createElement("p");
                sandwich2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            sandwiches.appendChild(sandwich2);
            sandwich2.appendChild(sandwich2Title);
            sandwich2.appendChild(sandwich2Price);
            sandwich2.appendChild(sandwich2Text);
        // sandwich 3
        let sandwich3 = document.createElement("div");
            sandwich3.setAttribute("class", "menuItem");
            sandwich3.setAttribute("id", "sandwich3");
            let sandwich3Title = document.createElement("h3");
                sandwich3Title.textContent = "sandwich 3"
            let sandwich3Price = document.createElement("span");
                sandwich3Price.textContent = "13";
            let sandwich3Text = document.createElement("p");
                sandwich3Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            sandwiches.appendChild(sandwich3);
            sandwich3.appendChild(sandwich3Title);
            sandwich3.appendChild(sandwich3Price);
            sandwich3.appendChild(sandwich3Text);
    //bowls Container
    let bowlsContainer = document.createElement("div");
        bowlsContainer.setAttribute("id", "bowlsContainer");
        menuContainer.appendChild(bowlsContainer);
    // bowls title
    let bowlsTitle = document.createElement("h2");
        bowlsTitle.textContent = "Bowls";
        bowlsContainer.appendChild(bowlsTitle);
    //bowls
    let bowls = document.createElement("div");
        bowls.setAttribute("id", "bowls");
        bowls.setAttribute("class", "menuSection");
        bowlsContainer.appendChild(bowls);
        // bowl 1
        let bowl1 = document.createElement("div");
            bowl1.setAttribute("class", "menuItem");
            bowl1.setAttribute("id", "bowl1");
            let bowl1Title = document.createElement("h3");
                bowl1Title.textContent = "Bowl 1"
            let bowl1Price = document.createElement("span");
                bowl1Price.textContent = "12";
            let bowl1Text = document.createElement("p");
                bowl1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            bowls.appendChild(bowl1);
            bowl1.appendChild(bowl1Title);
            bowl1.appendChild(bowl1Price);
            bowl1.appendChild(bowl1Text);
        // bowl 2
        let bowl2 = document.createElement("div");
            bowl2.setAttribute("class", "menuItem");
            bowl2.setAttribute("id", "bowl2");
            let bowl2Title = document.createElement("h3");
                bowl2Title.textContent = "Bowl 2"
            let bowl2Price = document.createElement("span");
                bowl2Price.textContent = "10";
            let bowl2Text = document.createElement("p");
                bowl2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            bowls.appendChild(bowl2);
            bowl2.appendChild(bowl2Title);
            bowl2.appendChild(bowl2Price);
            bowl2.appendChild(bowl2Text);
        // bowl 3
        let bowl3 = document.createElement("div");
            bowl3.setAttribute("class", "menuItem");
            bowl3.setAttribute("id", "bowl3");
            let bowl3Title = document.createElement("h3");
                bowl3Title.textContent = "Bowl 3"
            let bowl3Price = document.createElement("span");
                bowl3Price.textContent = "10";
            let bowl3Text = document.createElement("p");
                bowl3Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.";
            bowls.appendChild(bowl3);
            bowl3.appendChild(bowl3Title);
            bowl3.appendChild(bowl3Price);
            bowl3.appendChild(bowl3Text);
        // maybe try a for each loop for menu items with an array?
}