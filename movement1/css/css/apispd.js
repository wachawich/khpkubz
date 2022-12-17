window.onload = function(){
    const runners = document.querySelector(".runway2_avartar");
    const runBtns = document.querySelector("#run");

    runBtns.addEventListener("click" , ()  => {
        runners.classList.add("runs");
        runners.classList.remove("run");
    })

    const runner = document.querySelector(".runway2_avartar");
    const runBtn = document.querySelector("#runs");

    runBtn.addEventListener("click" , ()  => {
        runner.classList.add("run");
        runner.classList.remove("runs");
    })

    const sec5spdbox1_running1 = document.querySelector(".sec5spdbox1_img");
    const running1Btn = document.querySelector("#running1");

    running1Btn.addEventListener("click" , ()  => {
        sec5spdbox1_running1.classList.toggle("running1");
    })

    const sec5spdbox1_running2 = document.querySelector(".sec5spdbox2_img");
    const running2Btn = document.querySelector("#running2");

    running2Btn.addEventListener("click" , ()  => {
        sec5spdbox1_running2.classList.toggle("running2");
    })

    const sec5spdbox1_running3 = document.querySelector(".sec5spdbox3_img");
    const running3Btn = document.querySelector("#running3");

    running3Btn.addEventListener("click" , ()  => {
        sec5spdbox1_running3.classList.toggle("running3");
    })
}















































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
//       const sec5spdbox1 = data.characters[6]; //big avartar homepage 
//       let sec5spdbox1_img = document.createElement("div");
//       sec5spdbox1_img.innerHTML = `<img src= ${sec5spdbox1}  >`;
//       document.querySelector(".sec5spdbox1_img").appendChild(sec5spdbox1_img);

//       const sec5spdbox2 = data.characters[27]; //big avartar homepage 
//       let sec5spdbox2_img = document.createElement("div");
//       sec5spdbox2_img.innerHTML = `<img src= ${sec5spdbox2}  >`;
//       document.querySelector(".sec5spdbox2_img").appendChild(sec5spdbox2_img);

//       const sec5spdbox3 = data.characters[30]; //big avartar homepage 
//       let sec5spdbox3_img = document.createElement("div");
//       sec5spdbox3_img.innerHTML = `<img src= ${sec5spdbox3}  >`;
//       document.querySelector(".sec5spdbox3_img").appendChild(sec5spdbox3_img);

//       const runway2_avartar = data.characters[7]; //big avartar homepage 
//       let runway2_avartars = document.createElement("div");
//       runway2_avartars.innerHTML = `<img src= ${runway2_avartar}  >`;
//       document.querySelector(".runway2_avartar").appendChild(runway2_avartars);
//     }
//  });
