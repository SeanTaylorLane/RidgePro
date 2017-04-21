function showModal(index) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal__image");
    var header = document.getElementById("modal__header");
    var alt;
    var officers = document.getElementsByClassName("officers__avatar");
    
    modalImage.src = officers[index].src;
    alt = officers[index].alt;
    header.innerHTML = alt;
    
    
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
    setTimeout(function() {modal.style.display = "none";}, 600);
}