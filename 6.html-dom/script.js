document.getElementById("header").innerHTML = "This header text is coming from Javascript"
document.getElementById("para").innerHTML = "This para is coming from Javascript"

function editDOMControl(){
    document.getElementById("header").style.backgroundColor = "crimson";
    document.getElementById("header").style.color = "white";
    document.getElementById("firstName").value = "Hello"
}