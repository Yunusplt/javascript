const getirülke = async (ülke) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${ülke}`);

    if (!res.ok) {
      throw new Error("url de hata var");
    }

    const data = await res.json();

    // console.log(data[0]);
    ekranaBastir(data[0]);
  } catch (err) {
    console.log(err);
  }
};

getirülke("Turkey");
getirülke("USA");
getirülke("canada");
getirülke("france");
getirülke("Faroe Islands");

const ekranaBastir = (ülke) => {
  console.log(ülke);
  console.log(Object.values(ülke.currencies));
  document.querySelector(".countries").innerHTML += `
     <div class="card text-start w-50 shadow-lg bg-light">
      <img src=${ülke.flags.svg} class="card-img-top" alt="..." />
      <div class="card-body">
         <h5 class="card-title">${ülke.name.common} </h5>
         <p class="card-text"></p>
      </div>
      
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${
           ülke.capital
         } </li>
          <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(
            ülke.languages
          )} </li>
          
          <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${
            Object.values(ülke.currencies)[0].name
          }  </li>

      </ul>
   </div>
    `;
};
