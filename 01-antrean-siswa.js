const antreanSiswa = ["andi","budi","citra"];
antreanSiswa.push("deni");
antreanSiswa.unshift("eka");

console.log("antreanAwal :", antreanSiswa, "jumlah :", antreanSiswa.length);
console.log("siswa dihapus :", antreanSiswa.shift());
console.log("siswa dihapus :", antreanSiswa.pop());
console.log("antreanAkhir :", antreanSiswa, "jumlah sisa :", antreanSiswa.length);
