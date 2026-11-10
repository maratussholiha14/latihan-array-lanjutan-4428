const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

daftarBuku.splice(daftarBuku.indexOf("CSS Dasar"), 1, "CSS Modern");
daftarBuku.splice(daftarBuku.indexOf("JavaScript Dasar") + 1, 0, "git Dasar");
daftarBuku.splice(daftarBuku.indexOf("PHP Dasar"), 1);

console.log("awal:", daftarBuku);
console.log("terbaru:", daftarBuku, " Total:", daftarBuku.length);