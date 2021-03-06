export function start(content){
        // main menu
        let menuWrapper = document.createElement("div");
            menuWrapper.setAttribute("id", "menuWrapper");
        content.appendChild(menuWrapper);

        // header area
        let headerWrapper = document.createElement("div");
            headerWrapper.setAttribute("id", "header");
        let headerLeft = document.createElement("div");
            headerLeft.setAttribute("class", "left");
            headerLeft.setAttribute("id", "headerLeft");
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
            footerCenter.setAttribute("id", "credit");
        let footerRight = document.createElement("div");
            footerRight.setAttribute("class", "right");
            footerRight.setAttribute("id", "goUp");
        footer.appendChild(footerLeft);
        footer.appendChild(footerCenter);
        footer.appendChild(footerRight);
        content.appendChild(footer);       
}

