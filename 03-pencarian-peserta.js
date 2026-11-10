const pesertaLomba = ["alya", "bintang", "citra", "daffa", "nabila"];
const namaDicari = "citra";

console.log("===PENCARIAN PESERTA LOMBA===");
if(pesertaLomba.includes(namaDicari)) {
    const indeks = pesertaLomba.indexOf(namaDicari);
    console.log("nama:", namaDicari);
    console.log("status: Terdaftar");
    console.log("indeks:", indeks);
    console.log("nomor urut:", indeks + 1);
} else {
    console.log("Nama:", namaDicari);
    console.log("Status: Siswa belum terdaftar");
}
