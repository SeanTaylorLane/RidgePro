function showModal() {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal__image");
    
    modal.style.display = "block";
//    modal.style.background = "rgba(0,0,0,0.8);"
    modal.style.opacity = "1";
//    modalImage.style.transform = "scale(1,1)";
    modal.style.background = "rgba(0,0,0,0.8)";
}

function closeModal() {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal__image");
    
//    modalImage.style.transform = "scale(1,1)";
    modal.style.background = "rgba(0,0,0,0)";
    modal.style.opacity = "0";
    setTimeout(function() {modal.style.display = "none";}, 1000);
}