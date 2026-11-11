var text = "";
var i = 0;

do {
    text += "<br>Angka " + i;
    i++;
}
while (i < 10);

document.getElementById("demo").innerHTML = text;
