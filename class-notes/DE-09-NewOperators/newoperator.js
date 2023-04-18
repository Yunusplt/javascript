//! Yeni Gelen Özellikleri Görüyoruz. New Operator...


//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================


const  car = {
    title : "BMW",
    model : 1990,
    engine : 1.6
} 

const  car4 = {
    title : "Mercedes",
    model : 1990,
    engine : 1.6
}

//* 1 klasik yol 

console.log(car.title);                 // BMW
console.log(car["model"]);              // 1990


//* 2. yol 

const{title, model}=car

console.log(title, model, car.engine);    // BMW 1990 1.6


//*NESTED OBJECT example:
const arabalar = {
  car1: {
    marka: "BMW",
    model: 1990,
    renk: "red",
  },
  car2: {
    marka: "MERCEDES",
    model: 1980,
    renk: "white",
  },
  car3: {
    marka: "AUDI",
    model: 2000,
    renk: "gray",
  },
};

//! bunu nasil ortaya sacicammmmmmm ?????????
//* 1 klasik yol 
console.log(arabalar);                        //{car1: {…}, car2: {…}, car3: {…}}
console.log(arabalar.car1.renk);              //red
console.log(typeof arabalar);                 // object
console.log(typeof arabalar.car1.renk);       // string

//* 2. yol
const{car1,car2,car3} = arabalar
console.log(car1);                     //{marka: 'BMW', model: 1990, renk: 'red'}
console.log(car1.marka);                // BMW

const{marka, renk} = car1
console.log(renk);                      // red





//! kar ikinin keylerini farkli girmeliyiz. yoksa yukardaki car1 in keyleri ile karisir...... objecti olustururken farkli isimle olustursaydik. bu sefer döngüleri kullanip tüm markalara  ulasmak isteseydik ulasamazdik....

const{marka:marka2, renk:renk2} = car2

console.log(renk2);                                   // white 

//!################  object-object gezinme ########################
for(let i in arabalar){
    console.log(arabalar[i].marka);      // BMW \n MERCEDES \n AUDI
}
//! ########################################################################
//* ornek: Array-Object gezinme-DEST
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Thomas",
    surname: "Müller",
    job: "tester",
    age: 35,
  }
];
for (let i in people) {
  console.log(people[i].name);    // mustafa \n Thomas 
}
people.forEach((item)=>{

    // console.log(item.name);
    // console.log(item.surname);

    const{name,surname,job,age} = item
    //* bu sefer esitligin sag tarafini farkli yazdik. kisi . yazdik cünkü dizi icinde object var bu sefer.
    console.log(name);                  
    console.log(surname);
    console.log(job);
    console.log(age);
})



//! Fonksiyonlar object parametreleri destructuring yapabilir. 

const kontrol=(veri)=>{
    console.log(veri);
    console.log(veri.adi);
    console.log(veri.renk);

    const{adi, renk, yildiz} = veri  // destructing

    console.log(adi);
    console.log(renk);


}

// kontrol({adi:"GS", renk:"sari-kirmizi", yildiz:4})

//? best practice

const data = {adi:"GS", renk:"sari-kirmizi", yildiz:4}
kontrol(data)


//!'#######################################################

const kontrol2 = ({adi, renk, yildiz}) => {

    console.log(adi);
    console.log(renk);

}

const data2 = {adi:"FB", renk:"sari-lacivert", yildiz:3}
kontrol2(data2)


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************


const personel={

    pName:"Johny",
    surname:"DEEP",
    job:"actor",
    age:55

}

// const{pName} = personel

// console.log(pName);
// console.log(personel.job);


const{pName, ...gerisi} = personel
console.log(pName);                   // Johny
console.log(personel.job);            // actor
console.log(gerisi);                  // {surname: 'DEEP', job: 'actor', age: 55}

//! gerisi yazmakla personel.job veya personel.surname yazmak ayni sey

//!#########################################################################

//*Object Kopya
//? orginal diziyle ayni sartlarda bir kopya
const ikizPersonel = personel   //? bu bi ise yaramaz sahte kopya.
console.log(ikizPersonel);
console.log(personel);


//? orjinal diziden farkli bir kopya olusturma 

const{...gerisiKopya} = personel
console.log(gerisiKopya);


//? herbirine degisiklik yapip görelim noluyor....
console.log("##############################");
//****orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz */

gerisiKopya.age=45

console.log(personel);          // 55
console.log(ikizPersonel);      // 55
console.log(gerisiKopya);       // 45 


console.log("##############################");
//*****  orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi*/

ikizPersonel.age=100

console.log(personel);        //100
console.log(ikizPersonel);    //100
console.log(gerisiKopya.age);     // 45

//todo bu yüzden 3 nokta ile kopyalama yapmak daha mantikli... 

//!######################################################################

//! ARRAY KOPYA (REST)

const autos = ["anadol", "renault", "tofas", "ferrari"]

//*bu da yöntem
// const [ilk, ikinci,...geriKalan] = autos

// console.log(ilk);
// console.log(geriKalan);


const number = [10, 20, 30, 40]
const ikizNumber = number

const [...number2] = number

number2.push(999)

console.log(number);
console.log(ikizNumber);
console.log(number2);

console.log("################################################");

ikizNumber.unshift(222)
number.push(555)


console.log(number);
console.log(ikizNumber);
console.log(number2);


//todo 2- bir fonksiyonun argument lerini diziye cevirmek icin kullanilabiilir,

//! ORNEK 1 ###############################################################
const sum = (x,y) => x+y

console.log(sum(1,2,3,4,5,6));       // 3  sadece ilk iki parametreyi topladi.

//! dogrusu

const sum2=(...x) => {
    console.log(x);                         // [1, 2, 3, 4, 5, 6]
    console.log(x.reduce((toplam,a)=> toplam + a, 0));   // 21
}
sum2(1,2,3,4,5,6)

const sum3=(ilk, ikinci, ...x) => {
    console.log(x);                           // [3, 4, 5, 6]
    console.log(x.reduce((toplam,a)=> toplam + a, 0));  // 18
}
sum3(1,2,3,4,5,6)

//! ORNEK 2 ###############################################################

const show=(name, surname, ...title)=>{
console.log(title);              // ['developer', 'mom', 'chemistry', 'teacher']
console.log(name);                // ozlem
console.log(surname);             // kara

console.log(`${name} ${surname} is a ${title}`);
// ozlem kara is a developer and mom and chemistry and teacher
console.log(`${name} ${surname} is a ${title.join(" and ")}`);
// ozlem kara is a developer and mom and chemistry and teacher
}

show("ozlem", "kara", "developer", "mom", "chemistry", "teacher")



//! ##########################################################################
//! ##########################################################################
//! ##########################################################################
//! ##########################################################################

//? --------------------------------------------------------------------------
//? SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? --------------------------------------------------------------------------


const zeug = ["Aircraft", "Helicopter", "Bicycle"]

const otomobiles = ["Trucks", "Bus", "Car", "Suv"]

console.log([zeug, otomobiles]);         // [Array(3), Array(4)]

console.log(zeug.concat(otomobiles)); 
//   ['Aircraft', 'Helicopter', 'Bicycle', 'Trucks', 'Bus', 'Car', 'Suv']

console.log(...zeug, "Bus", ...otomobiles, "Tir");
// Aircraft Helicopter Bicycle Bus Trucks Bus Car Suv Tir
console.log([...zeug, "Bus", ...otomobiles, "Tir"]);
// ['Aircraft', 'Helicopter', 'Bicycle', 'Bus', 'Trucks', 'Bus', 'Car', 'Suv', 'Tir']
console.log(...zeug);                     // Aircraft Helicopter Bicycle
console.log("".concat(zeug));             // Aircraft,Helicopter,Bicycle
console.log(zeug.join(","));              // Aircraft,Helicopter,Bicycle


//!###################################################################
//!###################################################################
//!###################################################################
//!###################################################################
//!###################################################################

const personel3 = {
  pName: "Johny",
  surname: "DEEP",
  job: "actor",
  age: 55,               //todo ONEMLI dün bunu uzun yoldan yapmistik 
};


const yeni={...personel3, job:"father", location:"USA"}
console.log(yeni);

//!###################################################################
//!###################################################################
//!###################################################################


//!diğer file daki örneği spread ile çözeceğiz
//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım
const insanlar = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },{
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },{
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },{
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },{
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

const yeniPeople = insanlar.map((kisi) => ({
  name: kisi.name,
  surname: kisi.surname,
  job: kisi.job,
  age: kisi.age + 5,
}));

// insanlar.map((kisi)=>{bu süslünün amaci object oldugunu anlasin diye})
const yeniinsan=insanlar.map((kisi)=>({
    ...kisi, age:kisi.age+5 //...kisi objectleri süslerinden kurtarir.
}))

console.log(yeniinsan);


































































































