//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz.
//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır
console.log("Nesneler");
//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const bosObject= new Object({})
console.log(bosObject);

const car1= new Object({name: "BMW", engine:1.6, model:2000})
console.log(car1);                 // {name: 'BMW', engine: 1.6, model: 2000}
console.log(car1.name);           // BMW
console.log(car1["engine"]);      // 1.6
//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const car2=new Object({})
car2.name="Mercedes"
car2.motor=2.0
car2.model=2001

console.log(car2);             //  {name: 'Mercedes', motor: 2, model: 2001}



//* ==================================================================
//*  2   Object Constructor (OOP ile ayrintili daha sonra görecegiz)
//* ==================================================================


//? kalip olusturup ayni seyleri yazarken isleri kolaylastirmaka amac.

function calisanlar(id, isim, maas) {
    this.calisanId=id
    this.calisanName=isim
    this.calisanMaas=maas
    console.log(this);   // tüm herkesi yazdirdi.

}

//! eger onject consructor kullancak isek this gerekli, arrow function da this kullanimi saglikli olmadigindan burada deceleration functuíon kullandik.
//! this keyword'u icinde bulundugu scope'daki objeyi refere eder
console.log(this); 
//? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir
 
const kisi1=new calisanlar(101, "Mehmet", 80000)
const kisi2=new calisanlar(102, "Osman", 90000)
const kisi3=new calisanlar(103, "Nergis", 100000)

console.log(kisi1);
console.log(kisi2);

//! arrow function this keywoddu desteklenmiyor.




//* ==================================================================
//*  3-          Object Literal    (En cok kullanilan yol)
//* ==================================================================

// let birth=1980
const person={

    name:"Johny",
    surname:"Deep",
    birth : 1970,
    job : "actor",
    hasDriverLicence: true,
    // agefind: function () {
    //     return new Date().getFullYear()-this.birth
    // }

    languages:["C", "C++", "JAVA", "PYTHON"]

}


console.log(person);
console.log(person.name);
console.log(person["job"]);
console.log(person.languages[2]);



//? write kalici bir degisiklik 

person.birth += 5 
console.log(person.birth);           //1975



//? alt alta yazdir. degisiklik yap 

person.languages.map((item)=>item.toLowerCase()).forEach((item)=>console.log(item))


//?  yeni bir propert ekleyebiliriz.

person.location = "America"

console.log(person);



//* ==================================================================
//*  3-                     Objecteki yöntemler
//* ==================================================================



const mensch={

    name:"Johny",
    surname:"Deep",
    birth : 1970,
    job : "actor",
    hasDriverLicence: true,

    ageFind:function () {

        console.log(this);     
        //? function cagirilinca ilk this i görüyor. bu this tüm objecti calistiriyor. sonra tarihi döndürüyor. 
        return new Date().getFullYear()-this.birth
    },

    summary:function () {
        return `${this.name} oyuncusu ${this.ageFind()} yasindadir.`
    }

}


//? ageFind functiondaki this keywordu yazmassak globaldeki birrth degiskenini cagirabilir. this kisman buradaki demek. 


console.log(mensch);
console.log(mensch.ageFind());
console.log(mensch.summary());  
//? summary icersinde ageFind functionu yeniden cagirildigi icin tüm object yeniden yine yazdirilir.



console.log(Object.keys(mensch));
console.log(Object.values(mensch));




//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.
//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. arrow kullanınca,  object in içindeki this keyword ü, global scope u (window) ifade ettiği için, this value nun global scope a bağlanmasını önlemek için, object yöntemi içinde normal function u kullanın.


// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.


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
  },]


  console.log(people);

  //! ornek: people dizisinde ki joblari göster.

  people.forEach((item) => console.log(item.job))


  //! ornek2 : yaslari 1 arttir ve sonucu yeni bir diziye aktar.


  const ages = people.map((a) => a.age+1)

  console.log(ages);
  console.log(people[0].age);



//! Ornek 3 : yaslari 1 er arttir, sonucu dizide kalici degistir. 

people.map((item, i, array)=>array[i].age = array[i].age+1 )

console.log(people);


//! ornek 4 : people dizisini yaslari degismis olarak yeni bir objeli dizi olusturalim.

//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım

const yeniPeople = people.map((kisi) => ({
  name1: kisi.name,
  surname1: kisi.surname,
  job1: kisi.job,
  age1: kisi.age + 5,
}));

console.log(yeniPeople);
console.log(people);




//! ornek 5 : yasi 33 ün üstünde olan kisilerin namelerini listele.

people.filter((kisi)=>kisi.age > 33).forEach((kisi)=>console.log(kisi.name))



//! ornek 6   people dizisine yeno object ekle 

people.push({name:"ali", surname:"GEL", job:"developer", age:50})
console.log(people);



//! Ornek 6 : her elemanin name ini büyük harfle yaz, yaslarini 2 kat yap , job larinin önüne senior kelimesi ekle. ve yeni bir diziye at...

const updatePeople = people.map((kisi)=>({

    name:kisi.name.toUpperCase(),
    age: kisi.age*2,
    job:"senior " + kisi.job

}))

console.log(updatePeople);





//! ornek 7 Developer olanlarin adlarini ve yaslarini yeni bir object olarak saklayiniz


const newPeop = people.filter((kisi)=>kisi.job=="developer").map((kisi)=>({
    name:kisi.name,
    age:kisi.age

}))

console.log(newPeop);



//! ornek 8 ortalama yasi hesaplayiniz.

console.log(people.reduce((toplam, eleman)=>toplam + eleman.age, 0)/people.length)




























