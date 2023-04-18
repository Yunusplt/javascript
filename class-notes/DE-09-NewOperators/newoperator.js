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

console.log(car.title);
console.log(car["model"]);


//* 2. yol 

const{title, model}=car

console.log(title, model, car.engine);


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

//! bunu nasil ortaya sacicammmmmmm ?????????ß

//* 1 klasik yol 

console.log(arabalar.car1.renk);


//* 2. yol

const{car1,car2,car3} = arabalar

console.log(car1);
console.log(car1.marka);

const{marka, renk} = car1

console.log(renk);


//! kar ikinin keylerini farkli girmeliyiz. yoksa yukardaki car1 in keyleri ile karisir...... objecti olustururken farkli isimle olustursaydik. bu sefer döngüleri kullanip tüm markalara  ulasmak isteseydik ulasamazdik....


const{marka:marka2, renk:renk2} = car2

console.log(renk2);

//!################  object-object gezinme ########################

for(let i in arabalar){
    console.log(arabalar[i].marka);


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
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];


people.forEach((kisi)=>{

    // console.log(kisi.name);
    // console.log(kisi.surname);
    // console.log(kisi.job);
    // console.log(kisi.age);


    const{name,surname,job,age} = kisi 
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
console.log(pName);
console.log(personel.job);
console.log(gerisi);

//! gerisi yazmakla personel.job veya personel.surname yazmak ayni sey


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
console.log(gerisiKopya);     // 45

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


//! 2- bir fonksiyonun argument lerini diziye cevirmek icin kullanilabiilir,
//! ORNEK 1 ###############################################################
const sum = (x,y) => x+y

console.log(sum(1,2,3,4,5,6));       // 3  sadece ilk iki parametreyi topladi.

//! dogrusu

const sum2=(...x) => {console.log(x);

    console.log(x.reduce((toplam,a)=> toplam + a, 0));


}

sum2(1,2,3,4,5,6)



//! ORNEK 2 ###############################################################


const show=(name, surname, ...title)=>{
console.log(title);
console.log(name);
console.log(surname);

console.log(`${name} ${surname} is a ${title}`);
console.log(`${name} ${surname} is a ${title.join(" and ")}`);

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

console.log([zeug, otomobiles]);

console.log(zeug.concat(otomobiles));

console.log(...zeug, "Bus", ...otomobiles, "Tir");
console.log([...zeug, "Bus", ...otomobiles, "Tir"]);

console.log(...zeug);
console.log("".concat(zeug));
console.log(zeug.join(","));


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
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
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


































































































