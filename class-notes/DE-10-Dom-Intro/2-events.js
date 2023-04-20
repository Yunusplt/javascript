//* ======================================================
//*                        EVENTS
//* ======================================================
//!#################################################################################
//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------

//todo alltaki satirlar HTML'de yazildi.

    // <h1 
    // onmouseover="style.color='blue'"
    // onmouseout="style.color='red'"
    // >JAVASCRIPT'TE DOM</h1>


//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//todo alltaki satirlar HTML'de yazildi. iki alt satirdakileri uygulamak icin 

    // <h1 class="H5" 
    // onmouseover = "yesil()"
    // onmouseout = "kirmizi()"
    // >DOM BASICS</h1>

// JAVASCRIPT
const baslik = document.querySelector(".H5")

const yesil =()=>baslik.style.color = "green"

// yesil()   //! yesil fonksiyonu cagirildigi zaman yesil yapar. 

const kirmizi = () => baslik.style.color = "red"

// kirmizi()

//!#################################################################################

//? METHOD-3 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//* Example_1 **********************************************************************

document.querySelector("#js").onmouseover=()=>{    // MERHABA

    document.querySelector("#badi").style.backgroundColor="pink"
    document.querySelector("#js").style.color="purple"
    
}

document.querySelector("#js").onmouseout=()=>{      // MERHABA

    document.querySelector("#badi").style.backgroundColor="red"
    document.querySelector("#js").style.color="yellow"
    
}

//todo hocanin kisaltma yapilmis cozümü asagidadir.

// const js = document.querySelector("#js");
// const badi = document.querySelector("#badi");
// js.onmouseover = () => {
//   badi.style.backgroundColor = "pink";
// };
// js.onmouseout = () => {
//   badi.style.backgroundColor = "red";
// };

//!##################################################################################

//* Example_2 (onclick-ondblclick)*************************************************
const birinci = document.querySelector(".bir")
const ikinci = document.querySelector(".iki")

// birinci.onclick=()=>{
//     birinci.src="./img/logo2.png"
//     ikinci.src="./img/js_logo.png"
// }

// ikinci.onclick=()=>{
//     birinci.src="./img/js_logo.png"
//     ikinci.src="./img/logo2.png"
// }
//! neden yukardakini kullanmadik. cünkü yukardakinde 1. olmadan 2. olmasi mantikli degil. bunu aktiflestirmek icin 1. olduktan sonra 2. olmali dedik ve bunu algoritmaya doktuk. 
//! 1.yol ########################
birinci.onclick=()=>{
    birinci.src="./img/logo2.png"
    ikinci.src="./img/js_logo.png"
    icerde()
}

const icerde = () => {
    ikinci.onclick=()=>{
        birinci.src="./img/js_logo.png"
        ikinci.src="./img/logo2.png"
    }
}
//! 2.yol #########################
// birinci.onclick=()=>{
//     birinci.src="./img/logo2.png"
//     ikinci.src="./img/js_logo.png"

//     ikinci.onclick=()=>{
//     birinci.src="./img/js_logo.png"
//     ikinci.src="./img/logo2.png"
// }
// }

//!##################################

ikinci.ondblclick=()=>{

    birinci.src = "./img/bir.png"
    ikinci.src = "./img/iki.png"


}


//! ###############################

//* example_3 *********************

const buton = document.querySelector("#btn")

buton.onclick=()=>{

    document.querySelector("#badi").style.backgroundImage="linear-gradient(to right, purple, gray"

    buton.textContent="SEARCH"
    buton.style.fontSize="40px"
    buton.style.color="red"


}


//!aynı element e (merhaba yazısına mouse ile gelince badi renk değiştirdin demiştik) hem onclick hem onmouseover atandığında, önce onmouseover  sonra onclick i çalıştırırsanız sorun olmaz, tersi durumda onclick baskın old için onmouseover çalışmaz


// ? METHOD-4 (sadece JAVASCRIPT te yazılır- addEventListener())  2.yol
// ? ---------------------------------------------------------------
buton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, purple, gray)";
  buton.textContent = "SEARCH";
  buton.style.fontSize = "30px";
  header.style.color = "red";
});
































































