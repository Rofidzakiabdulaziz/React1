

//  Membuat variabel menggunakan let dan const:
let kelas = "XI";
const nama = "Rofi Dzaki Abdul Aziz";


// no 2
const nyapa = (nama) => `WOY,${nama}`

console.log(nyapa("Rofi"))

// no 3 
const angka = [2,3,4]
const [dua,tiga,empat] =  angka
console.log(dua,tiga,empat)

const pengguna = {orang : "Rofi" , umur : 30};
const {orang , umur} = pengguna
console.log(orang,umur) ;

// no 4 
const angka1 = [2, 3];
const angka2 = [...angka1, 4, 5];
console.log(angka2); // Output: [1, 2, 3, 4]


const user1 = { nama: "Rofi", umur: 17 };
const user2 = { ...user1, kelas: "XII" };
console.log(user2); // Output: { nama: "Mirza", umur: 30, pekerjaan: "Guru" }

function hitung(...angka) {
  return angka.reduce((acc, curr) => acc + curr, 0);
}
console.log(hitung(3, 2, 3, 4)); // Output: 10