// fetch("https://gamertocoder.garena.co.th/api/assets")
//   .then((response) => {
//     if (response.status !== 200){
//       return response.status;
//     }
//   return response.json();
//   })

//   .then((data) => {
//     if (typeof data == "number") {
//       alert(data);
//     } else {
      
//       const avartar_gravity_sec2 = data.characters[25]; //big avartar homepage 
//       let avartar_gravity2 = document.createElement("div");
//       avartar_gravity2.innerHTML = `<img src= ${avartar_gravity_sec2}  >`;
//       document.querySelector(".avartar_gravity_sec2").appendChild(avartar_gravity2);

//       const avartar_gravity_sec3 = data.characters[25]; //big avartar homepage 
//       let avartar_gravity3 = document.createElement("div");
//       avartar_gravity3.innerHTML = `<img src= ${avartar_gravity_sec3}  >`;
//       document.querySelector(".avartar_gravity_sec3").appendChild(avartar_gravity3);

//       const avartar_gravity_sec4 = data.characters[25]; //big avartar homepage 
//       let avartar_gravity4 = document.createElement("div");
//       avartar_gravity4.innerHTML = `<img src= ${avartar_gravity_sec4}  >`;
//       document.querySelector(".avartar_gravity_sec4").appendChild(avartar_gravity4);
//     }
//  });