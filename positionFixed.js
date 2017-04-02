function menuFix() {
    var menuHeight = document.getElementsByClassName("menu")[0].offsetHeight;
    var notMenu = document.getElementById("notmenu");
    
    notMenu.style.marginTop = menuHeight + "px";
    
    console.log(menuHeight);
    console.log("dicks"); //easter egg!
}

document.getElementsByTagName("body")[0].addEventListener("load", menuFix, true); // Not sure why capturing works and bubbling doesn't even call the event handler... whatever I'll look it up later