export function start(content){
        // main menu
        let menuWrapper = document.createElement("div");
            menuWrapper.setAttribute("id", "menuWrapper");
        let menuLeft = document.createElement("div");
            menuLeft.setAttribute("class", "left");
        let menuCenter = document.createElement("div");
            menuCenter.setAttribute("class", "center");
        let menuRight = document.createElement("div");
            menuRight.setAttribute("class", "right");
        menuWrapper.appendChild(menuLeft);
        menuWrapper.appendChild(menuCenter);
        menuWrapper.appendChild(menuRight);
        content.appendChild(menuWrapper);

        // header area
        let headerWrapper = document.createElement("div");
            headerWrapper.setAttribute("id", "header");
        let headerLeft = document.createElement("div");
            headerLeft.setAttribute("class", "left");
        let headerRight = document.createElement("div");
            headerRight.setAttribute("class", "right");
        headerWrapper.appendChild(headerLeft);
        headerWrapper.appendChild(headerRight);
        content.appendChild(headerWrapper);

        // main content area
        let mainContent = document.createElement("div");
            mainContent.setAttribute("id", "main");
        content.appendChild(mainContent);

        // footer area
        let footer = document.createElement("div");
            footer.setAttribute("id", "footer");
        let footerLeft = document.createElement("div");
            footerLeft.setAttribute("class", "left");
        let footerCenter = document.createElement("div");
            footerCenter.setAttribute("class", "center");
        let footerRight = document.createElement("div");
            footerRight.setAttribute("class", "right");
        footer.appendChild(footerLeft);
        footer.appendChild(footerCenter);
        footer.appendChild(footerRight);
        content.appendChild(footer);       
}

