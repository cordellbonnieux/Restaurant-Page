export function tabs(){
    let tabsy = document.getElementById('main');
        tabsy.setAttribute("class", "tabsy");
        // About "restaurant" tab
        let tab1 = document.createElement("input");
            tab1.type = "radio";
            tab1.name = "tab";
            tab1.value = "checked";
            tab1.setAttribute("id", "tab1");
            tabsy.appendChild(tab1);
            let tab1Button = document.createElement("label");
                tab1Button.setAttribute("class", "tabButton");
                tab1Button.setAttribute("for", "tab1");
                tab1Button.innerText = "About Us";
                tabsy.appendChild(tab1Button);
            let tab1Tab = document.createElement("div");
                tab1Tab.setAttribute("class", "tab");
                tabsy.appendChild(tab1Tab);
                let tab1Content = document.createElement("div");
                    tab1Content.setAttribute("class", "content");
                    tab1Content.setAttribute("id", "about");
                    //tab1Content.innerText = "all of that goes here...";
                    tab1Tab.appendChild(tab1Content);
        // menu tab
        let tab2 = document.createElement("input");
            tab2.type = "radio";
            tab2.name = "tab";
            tab2.value = "checked";
            tab2.setAttribute("id", "tab2");
            tabsy.appendChild(tab2);
            let tab2Button = document.createElement("label");
                tab2Button.setAttribute("class", "tabButton");
                tab2Button.setAttribute("for", "tab2");
                tab2Button.innerText = "Menu" // add menu.js module
                tabsy.appendChild(tab2Button);
            let tab2Tab = document.createElement("div");
                tab2Tab.setAttribute("class", "tab");
                tabsy.appendChild(tab2Tab);
                let tab2Content = document.createElement("div");
                    tab2Content.setAttribute("class", "content");
                    tab2Content.innerText = "menu goes here...";
                    tab2Tab.appendChild(tab2Content);
}