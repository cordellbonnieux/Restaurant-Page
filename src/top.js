export function top(){
    const menuWrapper = document.getElementById("menuWrapper");
        let left = document.createElement("div");
            left.setAttribute("class", "left");
            let address = document.createElement("address");
                address.textContent = "123 Fake Street, Vancouver BC";
            let time = document.createElement("span");
                time.textContent = "Open 9 to 9 Everyday"
            left.appendChild(address);
            left.appendChild(time);
        let center = document.createElement("div");
            center.setAttribute("class", "center");
            center.setAttribute("id", "pageLogo");
        let right = document.createElement("div");
            right.setAttribute("class", "right");
            right.setAttribute("id", "social");
            let facebookWrapper = document.createElement("a");
                facebookWrapper.setAttribute("id", "facebookWrapper");
                right.appendChild(facebookWrapper);
            let instagramWrapper = document.createElement("a");
                instagramWrapper.setAttribute("id", "instagramWrapper");
                right.appendChild(instagramWrapper);
            let twitterWrapper = document.createElement("a");
                twitterWrapper.setAttribute("id", "twitterWrapper");
                right.appendChild(twitterWrapper);
    menuWrapper.appendChild(left);
    menuWrapper.appendChild(center);
    menuWrapper.appendChild(right);
}