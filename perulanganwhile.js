var text = "";
var i = 0;

while (i < 10) {
    text += "<br>Angka " + i;
    i++;
}

document.getElementById("demo").innerHTML = text;
