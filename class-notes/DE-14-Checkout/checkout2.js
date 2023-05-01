//* ======================================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread==============================================
//!table da kullanılacak değişkenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

ekrabaBastir()

const yeniÜrün = {
  name : document.querySelector(".bir"),
  price : document.querySelector(".iki"),
  adet : 1,
  img : document.querySelector(".üc"),
}
console.log(yeniÜrün.name.value);

document.querySelector(".btnekle").onclick=()=>{

    if(!yeniÜrün.name.value){
        alert("Lütden bir task giriniz!")
    }else if (sepettekiler.includes(yeniÜrün.name.value)) {
      return
    }else{
      sepettekiler.unshift(yeniÜrün)
    document.querySelector("#urun-rowlari").innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
   <div class="row g-0">
    <div class="col-md-5">
      <img src=${yeniÜrün.img.value}  class=" w-100 rounded-start" alt="img here">
    </div>

    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">${yeniÜrün.name.value}</h5>
        <div class="ürün-price">
          <p class="text-warning h2">
            $<span class="indirim-price">${(yeniÜrün.price.value * 0.7).toFixed(2)}</span>
            <span class="h5 text-dark text-decoration-line-through">${yeniÜrün.price.value}</span>
          </p>
        </div>
        <div class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
          <div class="adet-controller">
            <button class="btn btn-secondary btn-sm minus">
              <i class="fas fa-minus"></i>
            </button>
            <p class="d-inline mx-4" id="ürün-adet">${yeniÜrün.adet}</p>
            <button class="btn btn-secondary btn-sm plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="ürün-removal mt-4">
          <button class="btn btn-danger btn-sm w-100 remove-ürün">
            <i class="fa-solid fa-trash-can me-2"></i>Remove
          </button>
        </div>

        <div class="mt-2">
          Ürün Toplam: $ <span class="ürün-toplam">${(yeniÜrün.price.value*0.7*yeniÜrün.adet).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
</div>` +document.querySelector("#urun-rowlari").innerHTML 
     document.querySelector(".bir").value = ""
     document.querySelector(".iki").value = ""
     document.querySelector(".üc").value = ""
    }


  // sepettekiler.push(yeniÜrün)
  // console.log(sepettekiler);
  // console.log("hello");
  // document.querySelector(".bir").value = ""
  // document.querySelector(".iki").value = ""
  // document.querySelector(".üc").value = ""
  // ekrabaBastir()
}


//  sepettekiler.forEach((ürün,i)=> {
//   console.log(ürün.name);
//   console.log(ürün.price);
      // if (ürün.name == "Antique Clock") {
      //   console.log("hello");
      // }else{
      //     sepettekiler.unshift(yeniÜrün)
      // }

//       if (ürün.name == yeniÜrün.name) {
//         return
//       }else sepettekiler.push(yeniÜrün);
// })

// sepettekiler.forEach((item)=>{
//   console.log(item.name);
// })



// const ürünEkle = document.querySelector(".btnekle")
// ürünEkle.onclick=()=>{
//   sepettekiler.unshift({
//     name : "yunus",
//     price : 100,
//     adet: 1,
//     img : "https://media.istockphoto.com/id/184402058/photo/green-wooden-toy-car.jpg?b=1&s=170667a&w=0&k=20&c=v3gIajCg0PucAsL18DLOPq9VVRxmWVM57-tqOsSy1ys="
//   })
//   console.log(sepettekiler);
// }

// document.querySelector("#urun-rowlari").innerHTML

//todo form dan gelen yeni ürünleri listeye ekleme 




// ürünEkle.onclick=()=>{
//     sepettekiler.push({
//     name: document.querySelector(".bir").value,
//     price: 100,
//     adet: 1,
//     img : "https://cdn.pixabay.com/photo/2014/09/02/12/06/messerschmitt-kr200-433577__340.jpg",
//   })
// console.log(sepettekiler);
// }


// sepettekiler.unshift({
  name : 

// })


function ekrabaBastir() {
   sepettekiler.forEach((ürün)=>{

//! DESTRUCTING
// const{name,price,adet,img}=ürün
//todo += yaptik alt alta bassin diye her ürünün cardini. yani önce basilanlar kalsin siradakini ekle. buradaki +- muhabbeti önemli..!!!..

document.querySelector("#urun-rowlari").innerHTML += `
  <div class="card mb-3" style="max-width: 540px;">
   <div class="row g-0">
    <div class="col-md-5">
      <img src=${ürün.img}  class=" w-100 rounded-start" alt="img here">
    </div>

    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">${ürün.name}</h5>
        <div class="ürün-price">
          <p class="text-warning h2">
            $<span class="indirim-price">${(ürün.price * 0.7).toFixed(2)}</span>
            <span class="h5 text-dark text-decoration-line-through">${ürün.price}</span>
          </p>
        </div>
        <div class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
          <div class="adet-controller">
            <button class="btn btn-secondary btn-sm minus">
              <i class="fas fa-minus"></i>
            </button>
            <p class="d-inline mx-4" id="ürün-adet">${ürün.adet}</p>
            <button class="btn btn-secondary btn-sm plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="ürün-removal mt-4">
          <button class="btn btn-danger btn-sm w-100 remove-ürün">
            <i class="fa-solid fa-trash-can me-2"></i>Remove
          </button>
        </div>

        <div class="mt-2">
          Ürün Toplam: $ <span class="ürün-toplam">${(ürün.price*0.7*ürün.adet).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
</div>`
})

}
 

//? browserda en alttaki total kisminin table'i.

document.querySelector("#odeme-table").innerHTML = `  
<table class="table">
            <tbody>
              <tr class="text-end">
                <th class="text-start">Aratoplam</th>
                <td>$<span class="aratoplam">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Vergi(18%)</th>
                <td>$<span class="vergi">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Kargo</th>
                <td>$<span class="kargo">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Toplam</th>
                <td>$<span class="toplam">0.00</span></td>
              </tr>
            </tbody>
          </table>`



//! SILME

document.querySelectorAll(".remove-ürün").forEach((btn)=>{

    btn.onclick=()=>{
        //! ekrandan silme
        btn.closest(".card").remove()

        //! diziden silme

        sepettekiler = sepettekiler.filter(
      (ürün) =>
        ürün.name != btn.closest(".card").querySelector("h5").textContent
    );

        //! ekrandan silinen elemanı tekrar güncel haliyle alt kisimdaki table a yansittik 
    hesaplaTotal()
    }
})

//! ADET DEGISTIRME

document.querySelectorAll(".adet-controller").forEach((kutu)=> {

  const minus = kutu.firstElementChild;
  const amount = kutu.children[1];
  //const amount = minus.nextElementSibling
  const plus = kutu.lastElementChild

  minus.onclick = () =>{
    //! ekranda adet azalttik

    
    if (amount.textContent == 0) {
      return
    }else amount.textContent -= 1;

    //! diziden adeti azaltalim 

    sepettekiler.map((ürün)=> {
      if (ürün.name == minus.closest(".card").querySelector("h5").textContent) {
        ürün.adet = +ürün.adet -1
      }
    })

    //! ürün-toplam kismini ekranda güncelleme

    minus.closest(".card").querySelector(".ürün-toplam").textContent=minus.closest(".card").querySelector(".indirim-price").textContent * amount.textContent

    hesaplaTotal()
  }

  plus.onclick=()=>{

    //! ekrandan adet arttir.
    amount.textContent = +amount.textContent + 1

    //! listede güncelleme. listedeki adeti arttirma.

    sepettekiler.map((ürün)=>{
      if (ürün.name == plus.closest(".card").querySelector("h5").textContent) {
        ürün.adet = +ürün.adet +1 
      }
    })

    //! ürün toplami degis.
    plus.closest(".card").querySelector(".ürün-toplam").textContent = (plus.closest(".card").querySelector(".indirim-price").textContent * amount.textContent).toFixed(2)
    hesaplaTotal()
  }
    // document.querySelector(".ürün-toplam").textContent = amount.textContent * document.querySelector(".indirim-price").textContent}
})





hesaplaTotal()
function hesaplaTotal(){
    //todo dizimsi ama dizi degil. o yuzden reduce kullanilmaz.
  const ürünToplam = document.querySelectorAll(".ürün-toplam");
  

  //? araToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
  //?Reduce tam olarak Array istiyor, nodelist yeterli değil
  const araToplam = Array.from(ürünToplam).reduce(
    (toplam, eleman) => toplam + Number(eleman.textContent),0
  );

  document.querySelector(".aratoplam").textContent = (araToplam).toFixed(2);
  document.querySelector(".vergi").textContent = (araToplam * 0.18).toFixed(2)
// document.querySelector(".kargo").textContent=araToplam > 0 ? kargo: 0
document.querySelector(".kargo").textContent= kargo
document.querySelector(".toplam").textContent =
  (araToplam + (araToplam * 0.18)+kargo).toFixed(2)

  if (araToplam==0) {
    document.querySelector(".kargo").textContent = (0).toFixed(2)
    document.querySelector(".vergi").textContent = (0).toFixed(2)
    document.querySelector(".toplam").textContent = (0).toFixed(2)
  }
}
 
