//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>ekranaBastir(veri))

const veriGetir = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("url de hata var");
        console.log("hata");
        //todo throw ile kendi hatamizi firlatirsak, hata oldugunda kod burada durur ve daha ileri gitmez. hatta o yüzden ifden sonra else yazmaya gerek bile yok.
      }
      return res.json();
    })
    .then((veri) => ekranaBastir(veri));
};

document.querySelector("button").onclick = () => veriGetir();



const ekranaBastir = (veri) => {
  veri.forEach((item) => {
    document.querySelector("section").innerHTML += `
    <h1 class="mt-4"> NAME : <span class="text-danger">${item.login}</span>  </h1>
    <img src=${item.avatar_url} width="50%" />
    <h3> NOD-ID: ${item.node_id}</h3>
    `;
  });
};



