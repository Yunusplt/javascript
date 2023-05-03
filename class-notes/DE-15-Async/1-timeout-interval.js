//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama
//****************************************** */

// const bekle=(ms)=>{
// const start=new Date().getTime()
// while(new Date().getTime()<start+ms){

// }
// console.log(start);
// console.log(new Date().getTime());
// }

console.log("hello1");

// console.time("timer1")//kronometreyi başlat
// bekle(3000)
// console.timeEnd("timer1")//kronometreyi durdur


//*Asenkron (setTimeout) 1 seferlik
//******************************** */

// setTimeout(()=>{
//     console.log("selamlar");
// },2000)

// console.log("hello2");

// setTimeout(()=>{
//     console.log("naber nasilsin");
// },3000)

//todo setTimeout macrotaskqueue girer ve hello 2 selamlardan önce basilir.

//!hello-Selamlar- Naber napıyorsun çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking

console.log("sayac basliyor");

let sayac = 0

const interval1 = setInterval(()=>{
 console.log(++sayac);
 if (sayac==5) {
    clearInterval(interval1)
 }
},1000)

setTimeout(()=>{
    console.log("sayac durduruldu");
},6000)


