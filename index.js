function move(){
    let imageDiv = document.querySelector(".container");
    let images = imageDiv.querySelectorAll("div");
    imageDiv.insertBefore(images[2] , images[0]);
}

