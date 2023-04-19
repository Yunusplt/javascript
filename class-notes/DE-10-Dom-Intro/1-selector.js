//* ======================================================
//*                   getElementById()
//* ======================================================


//! example_1 (button style) ##################################################

const button = document.getElementById("btn")    // btn is Id name

button.style.width = "200px"
button.style.height = "80px"
button.style.fontSize = "40px"
button.style.color = "yellow"
button.style.backgroundColor = "red"


//! example_2 (pragraph style) ##################################################

const paragraf = document.getElementById("par")  // par is Id name 

paragraf.style.backgroundColor = "gray"
paragraf.style.color = "orange"
paragraf.style.fontSize = "50px"
paragraf.style.padding = "10px"

//!##############################################################################


//* =============================================================================
//*                   getElementByTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*=============================================================================


//! example_3  (img style) ######################################################

const resim = document.getElementsByTagName("img")

console.log(resim);                  // HTML Collection 

resim[0].style.width = "300px"
resim[1].style.border = "5px solid red"

//!##############################################################################


//* ======================================================
//*                   getElementByCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const baslik = document.getElementsByClassName("H1")   // H1 is class name 

console.log(baslik);                                  //HTML Collection

baslik[0].style.color = "red"
baslik[1].style.textAlign = "center"

//! array'i degistiren methodlari kullanabiliriz.
//! tüm ayni isimdeki classlara erisip degisiklik yapmak icin
//! asagidaki gibi for döngüsü kullanilabilir.

for (let i=0 ; i < baslik.length; i++){

    baslik[i].style.color = "purple"
    baslik[i].style.fontSize = "50px"

}
//todo yukarda kirmizi deniyor asagida purple deniyor. asagida olan kazanir. 
//!######################################################################

baslik[0].innerHTML=" <a href='https://www.clarusway.com' >DOM COK KOLAY</a> "
//todo DOM SELECTOR yazan h1 etiketini, DOM COK KOLAY yazan <a> etiketine dönusturduk

// baslik[1].innerHTML="NAPIYORSUN"

baslik[1].textContent = "NASILSIN"
//todo sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, içeriği de değiştirebilir

//!###################################################################################

//* ===================================================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*====================================================================================

document.querySelector("title").textContent="DOM MANiPULATION 💜"
document.querySelector("#badi").style.backgroundImage="linear-gradient(green, pink)"
document.querySelector(".H2").style.color="yellow"
//todo birden fazla h2 olsa ilkini alirdi. 
document.querySelector("p")     //! ilk p getirir.
document.querySelectorAll("p")  //! tüm p ler geldi. 
console.log(document.querySelectorAll("p"));            // NodeList

document.querySelectorAll("p")[1].style.fontSize = "70px"


//!###################################################################################


// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.
