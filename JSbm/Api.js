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
        console.log(data);
        { //HomePageApi
        const My_logo_nav = data.logo[0]; //Logo blockman go บน nav
        let my_Logo = document.createElement("div");
        my_Logo.innerHTML = `<img src= ${My_logo_nav}  >`;
        document.getElementById("my_logo").appendChild(my_Logo);


        const My_bg = data.banner[0]; //background banner[0] 
        let mybg = document.createElement("div");
        mybg.innerHTML = `<img src= ${My_bg}  >`;
        document.querySelector(".Background").appendChild(mybg);


        const Frist_Avartar = data.characters[20]; //big avartar homepage 
        let cyberguy02 = document.createElement("div");
        cyberguy02.innerHTML = `<img src= ${Frist_Avartar}  >`;
        document.querySelector(".AvartarBox").appendChild(cyberguy02);

        }


        // {  //title content api
        {
        const Avartar03 = data.characters[11]; //ตัวอย่างใน tutorial page
        let Avar03 = document.createElement("div");
        Avar03.innerHTML = `<img src= ${Avartar03}  >`;
        document.querySelector(".Avartar03").appendChild(Avar03);

        const Avartar04 = data.characters[29]; //ตัวอย่างใน tutorial page
        let Avar04 = document.createElement("div");
        Avar04.innerHTML = `<img src= ${Avartar04}  >`;
        document.querySelector(".Avartar04").appendChild(Avar04);
        }


        { //ตรงที่กดแล้วตัวละครเคลื่อน movement
          const character_movement1 = data.characters[6]; //ตัวอย่างใน tutorial page
          let charac_move1 = document.createElement("div");
          charac_move1.innerHTML = `<img src= ${character_movement1}  >`;
          document.querySelector(".show_movement1").appendChild(charac_move1);

          const character_movement2 = data.characters[33]; //ตัวอย่างใน tutorial page
          let charac_move2 = document.createElement("div");
          charac_move2.innerHTML = `<img src= ${character_movement2}  >`;
          document.querySelector(".show_movement2").appendChild(charac_move2);

          const character_movement3 = data.characters[7]; //ตัวอย่างใน tutorial page
          let charac_move3 = document.createElement("div");
          charac_move3.innerHTML = `<img src= ${character_movement3}  >`;
          document.querySelector(".show_movement3").appendChild(charac_move3);
        }

        //giftbox
        {
          const summarize_Avartar = data.characters[20]; //avartar giftbox
          let summarize = document.createElement("div");
          summarize.innerHTML = `<img src= ${summarize_Avartar}  >`;
          document.querySelector(".summarize").appendChild(summarize);

          for(let i = 21; i <= 28; i++){
            const character_gift = data.characters[i]; // characters gift
            let charac_gift = document.createElement("div");
            charac_gift.innerHTML = `<img src= ${character_gift}  >`;
            document.querySelector(".character007").appendChild(charac_gift);
          }
        }

        //gravity fetch api
        {
          const gravity_character1 = data.characters[5];
          let gra_charac1 = document.createElement("div");
          gra_charac1.innerHTML = `<img src= ${gravity_character1}>`;
          document.querySelector(".main_movedown").appendChild(gra_charac1);

          const gravity_character2 = data.characters[24];
          let gra_charac2 = document.createElement("div");
          gra_charac2.innerHTML = `<img src= ${gravity_character2}>`;
          document.querySelector(".main_moveup").appendChild(gra_charac2);

          const gravity_character3 = data.characters[17];
          let gra_charac3 = document.createElement("div");
          gra_charac3.innerHTML = `<img src= ${gravity_character3}>`;
          document.querySelector(".main_moveupdown").appendChild(gra_charac3);  


          const thx_characters007 = data.characters[25];
          let thx_characters = document.createElement("div");
          thx_characters.innerHTML = `<img src= ${thx_characters007}>`;
          document.querySelector(".thx_characters").appendChild(thx_characters);
        }
        
        //quiz box section4
        {
          const mainquiz1 = data.characters[31];
          let mainquiz11 = document.createElement("div");
          mainquiz11.innerHTML = `<img src= ${mainquiz1}>`;
          document.querySelector("#mainquiz1").appendChild(mainquiz11);

          const mainquiz2 = data.characters[30];
          let mainquiz22 = document.createElement("div");
          mainquiz22.innerHTML = `<img src= ${mainquiz2}>`;
          document.querySelector("#mainquiz2").appendChild(mainquiz22);

          const mainquiz3 = data.characters[24];
          let mainquiz33 = document.createElement("div");
          mainquiz33.innerHTML = `<img src= ${mainquiz3}>`;
          document.querySelector("#mainquiz3").appendChild(mainquiz33);

          const mainquiz4 = data.characters[32];
          const mainquiz444 = data.characters[27];
          let mainquiz44 = document.createElement("div");
          mainquiz44.innerHTML = `<img src= ${mainquiz4}>`;
          document.querySelector("#mainquiz4").appendChild(mainquiz44);
          let mainquiz4444 = document.createElement("div");
          mainquiz4444.innerHTML = `<img src= ${mainquiz444}>`;
          document.querySelector("#mainquiz4").appendChild(mainquiz4444);

          for(let i = 15; i <= 33; i++){
            const mainquiz5 = data.characters[i]; // characters gift
            let mainquiz55 = document.createElement("div");
            mainquiz55.innerHTML = `<img src= ${mainquiz5}  >`;
            document.querySelector("#mainquiz5").appendChild(mainquiz55);
          }

        }
    }
 });
