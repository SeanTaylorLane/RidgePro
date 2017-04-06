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