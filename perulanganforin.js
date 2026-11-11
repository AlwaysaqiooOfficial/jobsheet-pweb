var txt = "";
var mahasiswa = {
    Nama: "Dzimar Rauhillah",
    Alamat: "Tasikmalaya",
    Usia: 17
};

for (var x in mahasiswa) {
    txt += mahasiswa[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
