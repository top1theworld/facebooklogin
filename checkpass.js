let i = document.getElementById("pass");
i.addEventListener('keyup',() => {
    console.log(i.value);
    document.getElementById("checkpw").style.display = "block";
    document.getElementById("checkpw").innerHTML = i.value;
}
)