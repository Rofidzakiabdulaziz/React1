

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
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

// no 5
const angka1 = [2, 3];
const angka2 = [...angka1, 4, 5];
console.log(angka2); // Output: [1, 2, 3, 4]


const user1 = { nama: "Rofi", umur: 17 };
const user2 = { ...user1, kelas: "XII" };
console.log(user2); 

function hitung(...angka) {
  return angka.reduce((acc, curr) => acc + curr, 0);
}
console.log(hitung(3, 2, 3, 4)); 

// no 7

const AmbilData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data lu udah diambil bos");
    }, 2000);
  });
};

AmbilData().then(response => console.log(response));


const fetchData = async () => {
  try {
    const response = await AmbilData();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

fetchData(); 

// no 8 

 class Person {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  perkenalan() {
    return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
  }
}

const rofi = new Person("rofi", 17);
console.log(rofi.perkenalan()); 
// Inheritance
class Murid extends Person {
  constructor(nama, umur, mataPelajaran) {
    super(nama, umur);
    this.mataPelajaran = mataPelajaran;
  }

  belajar() {
    return `Saya Belajar ${this.mataPelajaran}.`;
  }
}

const Rofiganteng = new Murid("Rofi", 17, "React JS");
console.log(Rofiganteng.perkenalan()); 
console.log(Rofiganteng.belajar());  
