var x = 1;
switch (x) {
    case 1:
        text = "Angka satu";
        break;
    case 2:
        text = "Angka Dua";
        break;
    default:
        text = "Tidak ada keterangan";
}
document.getElementById("demo").innerHTML = text;
