function menumobile() {
    let nameicon = document.getElementById("iconmenus");
    let menu = document.getElementById("menuicon");
    var x = document.getElementById("menumobile");
    if (x.style.display === "block") {
        x.style.display = "none";
        menu.style.position = "absolute";
        document.getElementById("iconmenus").innerHTML = "menu";

    } else {
        x.style.display = "block";
        menu.style.position = "fixed";
        document.getElementById("iconmenus").innerHTML = "close";


    }
}