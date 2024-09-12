"use strict";
// 1. Basic Types va Unions
// a) O'zgaruvchilarni TypeScript turlari bilan e'lon qilish:
let ism = "Ali";
let yosh = 25;
let talabami = true;
let hobby = null;
// b) Raqam yoki string qabul qiluvchi va har doim string qaytaruvchi funksiya:
function stringgaAylantir1(qiymat) {
    return qiymat.toString();
}
// b) Kitob obyektlarini yaratish:
const kitob1 = {
    sarlavha: "O'zbek tilining asoslari",
    muallif: "Nodirbek",
    nashrYili: 2020,
    sahifalarSoni: 150,
    mavjud: true
};
const kitob2 = {
    sarlavha: "TypeScript uchun qo'llanma",
    muallif: "Gulnora",
    nashrYili: 2021,
    sahifalarSoni: 200,
    mavjud: false
};
// c) Kitob haqidagi ma'lumotni qaytaruvchi funksiya:
function kitobHaqidaMalumot(kitob) {
    return `Sarlavha: ${kitob.sarlavha}, Muallif: ${kitob.muallif}, Nashr yili: ${kitob.nashrYili}, Sahifalar soni: ${kitob.sahifalarSoni}, Mavjud: ${kitob.mavjud}`;
}
// 3. Amaliy mashq: Kutubxona tizimi
// a) Kutubxona classini yaratish:
class Kutubxona {
    constructor() {
        this.kitoblar = [];
    }
    kitobQoshish(kitob) {
        this.kitoblar.push(kitob);
    }
    kitobniTopish(sarlavha) {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }
    mavjudKitoblarSoni() {
        return this.kitoblar.length;
    }
}
// b) Kutubxona classidan obyekt yaratish va kitoblar qo'shish:
const kutubxona = new Kutubxona();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
// c) Kitobni izlab topish:
const izlanganKitob = kutubxona.kitobniTopish("TypeScript uchun qo'llanma");
console.log(izlanganKitob ? kitobHaqidaMalumot(izlanganKitob) : "Kitob topilmadi");
// d) Mavjud kitoblar sonini chiqaring:
console.log(`Mavjud kitoblar soni: ${kutubxona.mavjudKitoblarSoni()}`);
class Talaba {
    constructor(ism, email, kurs, fanlar) {
        this.ism = ism;
        this.email = email;
        this.kurs = kurs;
        this.fanlar = fanlar;
    }
    talabaMalumoti() {
        return `Ism: ${this.ism}, Email: ${this.email}, Kurs: ${this.kurs}, Fanlar: ${this.fanlar.join(", ")}`;
    }
}
const talabalar = [
    new Talaba("Azizbek", "azizbek@example.com", 2, ["Matematika", "Ingliz tili"]),
    new Talaba("Gulnora", "gulnora@example.com", 1, ["Tarix", "Biologiya"])
];
talabalar.forEach(talaba => console.log(talaba.talabaMalumoti()));
// 1. Basic Types va Unions
// b) Yuqoridagi ma'lumotlardan foydalanib, shaxs haqida ma'lumot chiqaruvchi funksiya:
function shaxsMalumoti(ism, yosh, talabami, manzil) {
    return `Ism: ${ism}, Yosh: ${yosh}, Talabami: ${talabami ? "Ha" : "Yo'q"}, Manzil: ${manzil}`;
}
// 2. Unions
// a) Telefon raqamini ifodalovchi o'zgaruvchi:
let telefonRaqam;
// b) Raqam yoki string qabul qiluvchi va har doim string qaytaruvchi funksiya:
function stringgaAylantir(qiymat) {
    return qiymat.toString();
}
// 3. Objects
let talabaObj = {
    ism: "Dilorom",
    yosh: 22,
    kurs: 3,
    fanlar: ["Matematika", "Fizika", "Kimyo"]
};
// b) Talaba obyektidan foydalanib, talaba haqida ma'lumot chiqaruvchi funksiya:
function talabaMalumoti(talaba) {
    return `Ism: ${talaba.ism}, Yosh: ${talaba.yosh}, Kurs: ${talaba.kurs}, Fanlar: ${talaba.fanlar.join(", ")}`;
}
// 4. Interfaces
// b) Kitob interfeysi asosida kamida 2 ta kitob obyektini yaratish:
const kitob3 = {
    sarlavha: "JavaScript: The Good Parts",
    muallif: "Douglas Crockford",
    nashrYili: 2008,
    sahifalarSoni: 176,
    mavjud: true
};
const kitob4 = {
    sarlavha: "TypeScript Deep Dive",
    muallif: "Basarat Syed",
    nashrYili: 2020,
    sahifalarSoni: 420,
    mavjud: false
};
// c) Kitoblar ro'yxatini qabul qilib, ularning o'rtacha sahifalar sonini hisoblaydigan funksiya:
function ortachaSahifalarSoni(kitoblar) {
    const jamiSahifalar = kitoblar.reduce((total, kitob) => total + kitob.sahifalarSoni, 0);
    return jamiSahifalar / kitoblar.length;
}
// Qo'shimcha mashq:
// Yuqoridagi barcha funksiyalarni chaqirib, natijalarni konsolga chiqaring:
console.log(shaxsMalumoti("Ali", 25, true, "Toshkent"));
console.log(kitobHaqidaMalumot(kitob1));
console.log(kitobHaqidaMalumot(kitob2));
const kitoblar = [kitob1, kitob2, kitob3, kitob4];
console.log(`O'rtacha sahifalar soni: ${ortachaSahifalarSoni(kitoblar)}`);
console.log(talabaMalumoti(talabaObj));
