export function footer(){
    const credit = document.getElementById("credit");
        const nameLinkText = document.createElement("p");
            nameLinkText.innerHTML = "This project was created by ";
            credit.appendChild(nameLinkText);
        const nameLink = document.createElement("a");
            nameLink.innerHTML = "Cordell Bonnieux";
            nameLink.href = "https://cordellbonnieux.com";
            nameLink.target = "_blank";
            nameLinkText.appendChild(nameLink);
    const goUp = document.getElementById("goUp");
        const goUpA = document.createElement("a");
            goUpA.innerHTML = "^ back to top";
            goUpA.href = "#menuWrapper";
            goUp.appendChild(goUpA);
}