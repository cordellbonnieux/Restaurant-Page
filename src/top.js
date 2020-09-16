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
            let title = document.createElement("h1");
                title.textContent = "Don's Cafe";
            center.appendChild(title);
        let right = document.createElement("div");
            right.setAttribute("class", "right");
            right.innerHTML = ` social links here `;
    menuWrapper.appendChild(left);
    menuWrapper.appendChild(center);
    menuWrapper.appendChild(right);
}