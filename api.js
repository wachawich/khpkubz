fetch("https://gamertocoder.garena.co.th/api/assets")
  .then((response) => {
    if (response.status !== 200){
      return response.status;
    }
  return response.json();
  })

  .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
      const Frist_Avartar = data.characters[25]; //big avartar homepage 
      let cyberguy02 = document.createElement("div");
      cyberguy02.innerHTML = `<img src= ${Frist_Avartar}  >`;
      document.querySelector(".sec5spdbox1_img").appendChild(cyberguy02);
      
      // const avartar_gravity_sec2 = data.characters[25]; //big avartar homepage 
      // let avartar_gravity = document.createElement("div");
      // avartar_gravity.innerHTML = `<img src= ${avartar_gravity_sec2}  >`;
      // document.querySelector(".avartar_gravity_sec2").appendChild(avartar_gravity);
    }
 });