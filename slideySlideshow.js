var currentSlide = 0; // Slideshow starts off on slide 1
var slideshow = document.getElementById("slide-span");
var slideNav = document.getElementsByClassName("slide-nav");
slideNav[currentSlide].style.background = "slategray";

/* ARGUMMENTS FOR changeSlide() FUNCTION 
100: next slide
99: previous slide
0: first slide
1: second slide
2: third slide
etc.
*/

function changeSlide(arg) {
    var left;
    
    switch (arg) {
        case 100:
            left = -((currentSlide + 1) * 100);
            slideNav[currentSlide].style.background = "white";
            currentSlide++;
            if (left<=(0-300)) {
                left=0;
                currentSlide=0;
            }
            break;
        
        case 99:
            left = -((currentSlide - 1) * 100);
            slideNav[currentSlide].style.background = "white";
            currentSlide--;
            if (left>0) {
                left= 0-200;
                currentSlide=2;
            }
            break;
    }
    
    if ((arg>=0) && (arg<=2)) {
        left= -(arg*100);
        slideNav[currentSlide].style.background = "white";
        currentSlide=arg;
    }
    
    /*switch (0<=arg<=2) {
        case true:
          left = -(arg*100);
          break;
        case false:
          console.log("Invalid changeSlide() argument!");
          break;
        case undefined:
          console.log("Invalid changeSlide() argument!");
          break;
    }*/
    
    slideshow.style.left = left + "%";
    slideNav[currentSlide].style.background = "slategray";
}

//setInterval(changeSlide, 9000, 100);