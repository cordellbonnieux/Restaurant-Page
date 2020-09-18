export function about(){
    let about = document.getElementById("about");
        let title = document.createElement("h2");
            title.textContent = "Our restaurant started in 2016...";
        let paraContainer = document.createElement("div");
            paraContainer.setAttribute("id", "paraContainer");
        let para = document.createElement('p');
            para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis.
            Nunc scelerisque mollis felis ac molestie. Praesent metus purus, pharetra sit amet varius vel, tincidunt condimentum erat. 
            Mauris mollis elementum massa, vitae efficitur urna imperdiet nec. Pellentesque convallis cursus dui eget sagittis. 
            Fusce placerat risus velit, vel ultricies dui volutpat id.`;
        let imgWrapper = document.createElement('div');
            imgWrapper.setAttribute("id", "aboutUsImgSection");
    about.appendChild(title);
    paraContainer.appendChild(para);
    about.appendChild(paraContainer);
    about.appendChild(imgWrapper);

}