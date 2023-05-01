let liste = []

//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için bütün p leri çağır içeriğinde input.value varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir

let total = 0
let completed = 0

const listeInput = document.querySelector("#todo-input")
const listeUl = document.querySelector("#todo-ul")
const listeButon = document.querySelector("#todo-button")
const toplam = document.querySelector("#toplam")


//! add butonuna basilinca olacaklar.

listeButon.onclick=()=>{
    if(!listeInput.value){
        alert("Lütden bir task giriniz!")
    }else if (liste.includes(listeInput.value)) {
        return
        //todo if in icerisindeki sart dogru ise hic birsey yapma devam et. return deger döndürürdü. artik deger yoksa bos döndür devem et demek aslinda. Aslinda burada return yazmasak da olur. ama Best Practice i bu...
    }else{
        

        liste.push(listeInput.value)
        total += 1


        listeUl.innerHTML = `<li class="ayse">
            <i id="firstEmo" class="fa-solid fa-check"></i> 
            <p>${liste[liste.length-1]}</p>  
            <i id="secondEmo" class="fa-solid fa-trash"></i> 
        </li>` + listeUl.innerHTML

        //todo p yi ekrana bastirmanin 2. yolu 
        // todo <p>${listeInput.value}</p> 
        console.log(listeInput.value);
        total.textContent = total 

        listeInput.value=""
        listeInput.focus()


    }




//!silme metodu, ekrana basıldığı süslü de olmalı, dışarıda fa-trash lara tıklayınca, remove mantıklı değil, ortada fa-trash daha oluşmadan (add butonuna basılmadan) js ye çağırmak gibi oluyor
// trash butonuna tıklanınca
createSilButon()

//!check
createCheckButon()

};

const createSilButon=()=>{

    //! ul deki bütün fa-trash ulas.
    document.querySelectorAll(".fa-trash").forEach((a)=>{
        a.onclick=()=>{
            
            //! listeden silme 
            // console.log(a.closest("li").querySelector("p").textContent);
            liste = liste.filter((yapilacaklar)=> yapilacaklar!= a.closest("li").
//! closest=herhangi bir elemanın istediğiniz uzaklıktaki parent ına götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanın adını yazarak direk ulaşabiliriz
            
            
            querySelector("p").textContent)

            console.log(liste);
            // liste = liste.filter((yapilacak)=>yapilacak!=a.closest("li"))
            //! ekrandan silme //!ekrandan silme, sadece ekrandan silersek sonrasında diziyi bastırmaya kalkarsak, eleman hala dizide bulunduğu için yanlış cevap alırız
            a.parentElement.remove()
            total = total-1
            toplam.textContent = total

            if (completed > 0 && a.parentElement.classList.contains("checked")) {
                completed = completed - 1  

            }
        }
    })


}


// const createCheckButon=()=>{}
const createCheckButon=()=>{

//! Target özelliği, her zaman olay dinleyicisinin olayı tetiklediği öğeye başvuran currentTarget özelliğinin aksine, olayın orjinal olarak gerçekleştiği öğeyi alır .

listeUl.onclick=(e)=>{
    // console.log(e.target.parentElement.className);
    // console.log(e.target.parentElement.classList);
    // e.target.parentElement.remove()
    if (e.target.parentElement.classList.contains("checked")) {
        e.target.parentElement.classList.remove("checked")
    }else{e.target.parentElement.classList.add("checked")}
    // if (e.target.parentElement.className=="checked") {
    //     e.target.parentElement.className = "unchecked"
    // }else{e.target.parentElement.className="checked"}

}
}
// !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz contains yerine includes kullanmalıyız, javascriptte includes tercih edilir.
