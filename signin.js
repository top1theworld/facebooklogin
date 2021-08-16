function signin() {
    var x = document.getElementById("form_signin_dialog");
    if (x.open == true) {
        x.open = false;
        document.getElementById("top").style.backgroundColor = "#f0f2f5";
        document.getElementById("label").style.opacity = "1";
        document.getElementById("login").style.opacity = "1";
        document.getElementById("reg_page").style.opacity = "1";
        document.getElementById("bottom").style.opacity = "1";
    } else {
        x.open = true;
        document.getElementById("top").style.backgroundColor = "rgba(255, 255, 255, .8)";
        document.getElementById("bottom").style.backgroundColor = "rgba(255, 255, 255, .8)";
        document.getElementById("label").style.opacity = "0.1";
        document.getElementById("login").style.opacity = "0.1";
        document.getElementById("reg_page").style.opacity = "0.1";
        document.getElementById("bottom").style.opacity = "0.1";
    }

}