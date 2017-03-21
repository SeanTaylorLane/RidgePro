var currentSlide = 0;
var slides = document.getElementsByClassName("slide");

//console.log(slides[currentSlide].innerHTML);

function nextSlide(slideTo) {
    var nextSlide;
    var top = "12";
    var middle = "11";
    var bottom = "10";
    
    if (slideTo==0){ // If slide 1 is called
        nextSlide=0;
    } else if (slideTo==1) { // If slide 2 is called
        nextSlide=1;
    } else if (slideTo==2) { // If slide 3 is called
        nextSlide=2;
    } else { // If no slide is called (set to next slide in cycle)
        if (currentSlide==(slides.length-1)) { //If the current slide is the end of the array, set the nextslide to be the beginning
            nextSlide=0;
        } else { // If there are more items in the array, set the nextSlide to be the next item
            nextSlide=currentSlide+1;
        }
    } // End determining nextSlide code
    
    slides[nextSlide].style.zIndex = "11";
    slides[currentSlide].style.opacity = "0";
    slides[currentSlide].style.zIndex = "10";
    slides[nextSlide].style.zIndex = "13";
    slides[currentSlide].style.opacity = "1";
    
    currentSlide = nextSlide; //sets the slide that just transitioned into focus as the currentSlide. Variable nextSlide is local and dies with the function.
    
    console.log("currentSlide is now nextSlide, which is " + currentSlide);
}

