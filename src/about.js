export function about(){
    let about = document.getElementById("about");
        let title = document.createElement("h3");
            title.textContent = "Our restaurant started in 2016...";
        let para = document.createElement('p');
            para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis.
            Nunc scelerisque mollis felis ac molestie. Praesent metus purus, pharetra sit amet varius vel, tincidunt condimentum erat. 
            Mauris mollis elementum massa, vitae efficitur urna imperdiet nec. Pellentesque convallis cursus dui eget sagittis. 
            Fusce placerat risus velit, vel ultricies dui volutpat id. Proin quis iaculis neque.
            Aliquam erat volutpat. Etiam bibendum augue eu orci ultricies malesuada. Donec quis rhoncus erat, ut porttitor nunc.
            Maecenas efficitur fermentum ligula, ac egestas turpis imperdiet et. Aenean et ex ante. 
            Quisque placerat mollis diam, sed interdum nisl molestie eu. In et neque eu quam consectetur gravida quis sed magna. 
            Mauris elit dui, vehicula sed nunc eu, fermentum consectetur est.`;
        let imgWrapper = document.createElement('div');
            imgWrapper.setAttribute("id", "aboutUsImg");
    about.appendChild(title);
    about.appendChild(para);
    about.appendChild(imgWrapper);
}