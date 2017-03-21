var currentSlide = 1; // Global variable for keeping track of the current slide. Default slide is #1, so the next slide should be slide #2 (position 1 in array)
var slides = document.getElementsByClassName("slide"); // creates a global array that holds all the slides

function nextSlide() {
    //if any buttons are in focus, end program
    
    /*for (var i=0, i < slides.length, i++) {
        slides[i].style.display = "none";
        // (sets all slides in slideshow to display none)
    }*/
    
    // This code below is to compensate for some weird errors with my for loop :(
    slides[0].style.display = "none";
    slides[1].style.display = "none";
    slides[2].style.display = "none";
    
    slides[currentSlide].style.display = "block";
    console.log(currentSlide);
    
    if (currentSlide>=(slides.length - 1)) { //if the current slide is the last index available in the array, set currenSlide to the first index
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}

//setInterval(nextSlide(), 2000);