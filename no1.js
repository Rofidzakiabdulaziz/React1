

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
console.log(orang,umur) 