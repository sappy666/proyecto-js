function cambiar(imagen){
    let img = document.querySelector('img');
    let titulo = document.querySelector('#titulo');
    img.style.width="50%"

    switch (imagen){
        case 1:
            img.src = "./assets/img/img1.jpg";
            break;
        case 2:
            img.src = "./assets/img/img2.jpg";
            break;
        case 3:
            img.src = "./assets/img/img3.jpg";
            break;
        default:
            alert(imagen);
    }
}