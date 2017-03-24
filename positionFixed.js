function menuFix() {
    var menuHeight = document.getElementsByClassName("menu")[0].offsetHeight;
    var notMenu = document.getElementById("notmenu");
    
    notMenu.style.marginTop = menuHeight + "px";
    
   // console.log(menuHeight);
}