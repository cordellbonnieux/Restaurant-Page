export function tabs(){
    // content area
    let tabsy = document.getElementById('main');
        tabsy.setAttribute("class", "tabsy");
        // About "restaurant" tab
        let tab1 = document.createElement("input");
            tab1.type = "radio";
            tab1.name = "tab";
            tab1.checked = true;
            tab1.value = "checked";
            tab1.setAttribute("id", "tab1");
            tabsy.appendChild(tab1);
            let tab1Button = document.createElement("label");
                tab1Button.setAttribute("class", "tabButton tab1Button");
                tab1Button.setAttribute("for", "tab1");
                tab1Button.innerText = "About Us";
                tabsy.appendChild(tab1Button);
            let tab1Tab = document.createElement("div");
                tab1Tab.setAttribute("class", "tab");
                tabsy.appendChild(tab1Tab);
                let tab1Content = document.createElement("div");
                    tab1Content.setAttribute("class", "content");
                    tab1Content.setAttribute("id", "about");
                    tab1Tab.appendChild(tab1Content);
        // menu tab
        let tab2 = document.createElement("input");
            tab2.type = "radio";
            tab2.name = "tab";
            tab2.value = "checked";
            tab2.setAttribute("id", "tab2");
            tabsy.appendChild(tab2);
            let tab2Button = document.createElement("label");
                tab2Button.setAttribute("class", "tabButton tab2Button");
                tab2Button.setAttribute("for", "tab2");
                tab2Button.innerText = "Menu";
                tabsy.appendChild(tab2Button);
            let tab2Tab = document.createElement("div");
                tab2Tab.setAttribute("class", "tab");
                tabsy.appendChild(tab2Tab);
                let tab2Content = document.createElement("div");
                    tab2Content.setAttribute("class", "content");
                    tab2Content.setAttribute("id", "menu");
                    tab2Tab.appendChild(tab2Content);
        // contact tab
        let tab3 = document.createElement("input");
            tab3.type = "radio";
            tab3.name = "tab";
            tab3.value = "checked";
            tab3.setAttribute("id", "tab3");
            tabsy.appendChild(tab3);
            let tab3Button = document.createElement("label");
                tab3Button.setAttribute("class", "tabButton tab3Button");
                tab3Button.setAttribute("for", "tab3");
                tab3Button.innerText = "Contact";
                tabsy.appendChild(tab3Button);
            let tab3Tab = document.createElement("div");
                tab3Tab.setAttribute("class", "tab");
                tabsy.appendChild(tab3Tab);
                let tab3Content = document.createElement("div");
                    tab3Content.setAttribute("class", "content");
                    tab3Content.setAttribute("id", "contact");
                    tab3Tab.appendChild(tab3Content);
}