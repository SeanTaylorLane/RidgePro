function hideNav() {
    var nav = document.getElementsByTagName("nav")[0];
    var navHeight = nav.offsetHeight;
    var top = "-" +(navHeight + 11) + "px";
    
    nav.style.top = top;
    
    console.log(top);
    console.log("dicks"); //easter egg!
}

//document.getElementsByTagName("body")[0].addEventListener("load", hideNav, true); // Not sure why capturing works and bubbling doesn't even call the event handler... whatever I'll look it up later

function scrollNav() {
    var nav = document.getElementsByTagName("nav")[0];
    
    if (document.body.scrollTop > 231 || document.documentElement.scrollTop > 231) {
        nav.style.top = "0";
    } else if (document.body.scrollTop < 231 || document.documentElement.scrollTop < 231) {
        nav.style.top = "-88px";
    }
//    console.log(nav.style.top);
}

var mobileNavOpen = false;
function mobileNav() {
    var mobileNav = document.getElementById("mobilenav");
    var navItems = document.getElementsByClassName("mobilenav__item");
    var navArrow = document.getElementsByClassName("fa-chevron-down")[0];
    
    if (mobileNavOpen) {
        mobileNav.style.top = "-351px";
        navArrow.style.transform = "rotateX(0deg)";
        mobileNav.style.justifyContent = "flex-end";
        setTimeout(function() {
            for (i=0;i<navItems.length;i++) {
            navItems[i].style.display = "none";
        }}, 450);
        mobileNavOpen = false;
    } else {
        mobileNav.style.top = "0";
        navArrow.style.transform = "rotateX(180deg)";
        mobileNav.style.justifyContent = "space-around";
        for (i=0;i<navItems.length;i++) {
            navItems[i].style.display = "block";
        }
        mobileNavOpen = true;
    }
}