window.onload = function() {
    //click and active for movement 1
    {// ปุ่มกดเริ่ม movement
    const btnShow_movement1 = document.getElementById("btnShow_movement1");
    const btnShow_movement2 = document.querySelector("#btnShow_movement2");
    const btnShow_movement3 = document.querySelector("#btnShow_movement3");

    const show_movement1 = document.querySelector(".show_movement1");
    const show_movement2 = document.querySelector(".show_movement2");
    const show_movement3 = document.querySelector(".show_movement3");

    btnShow_movement1.addEventListener('click',() => show_movement1.classList.toggle("move"));
    btnShow_movement2.addEventListener('click',() => show_movement2.classList.toggle("move"));
    btnShow_movement3.addEventListener('click',() => show_movement3.classList.toggle("move"));
    // ปุ่มกดเริ่ม movement
    }


    {// ปุ่มรับของรางวัล
    const giftBtn = document.getElementById("gift");
    const comfirmBtn = document.getElementById("comfirm");
    const yourgift = document.querySelector(".yourgift");

    giftBtn.addEventListener('click',() => yourgift.classList.add("toggle"));
    comfirmBtn.addEventListener('click',() => yourgift.classList.remove("toggle"));
    // ปุ่มรับของรางวัล
    }

    {// ปุ่มกดเริ่ม gravity
    const gravityBtn1 = document.getElementById("move_content_down");
    const gravityBtn2 = document.getElementById("move_content_up");
    const gravityBtn3 = document.getElementById("move_content_updown");

    const main_movedown = document.querySelector(".main_movedown");
    const main_moveup = document.querySelector(".main_moveup");
    const main_moveupdown = document.querySelector(".main_moveupdown");

    gravityBtn1.addEventListener('click',() => main_movedown.classList.toggle("gravity_move"));
    gravityBtn2.addEventListener('click',() => main_moveup.classList.toggle("gravity_move"));
    gravityBtn3.addEventListener('click',() => main_moveupdown.classList.toggle("gravity_move"));
    // ปุ่มกดเริ่ม gravity
    }

    //quiz box function
    {
        { //quiz 1
            const answer1_main1 = document.getElementById("answer1_main1");
            const mainquiz1 = document.getElementById("mainquiz1");
            const answer2_main1 = document.getElementById("answer2_main1");
            const answer3_main1 = document.getElementById("answer3_main1");
            const answer4_main1 = document.getElementById("answer4_main1");
            const quizactive1 = document.getElementById("quizactive1");

            answer1_main1.onclick = function(){
                document.getElementById('answer1_main1').style.backgroundColor='#22ff00';
                
            }
            answer2_main1.onclick = function(){
                document.getElementById('answer2_main1').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }
            answer3_main1.onclick = function(){
            document.getElementById('answer3_main1').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }

            answer1_main1.addEventListener("click", () => {
                mainquiz1.classList.toggle("run");
                answer4_main1.classList.add("act");
            });
            answer4_main1.addEventListener("click",() => {
                quizactive1.classList.add("act");
                quizactive2.classList.add("act");
            });
        }

        { //quiz 2
            const answer1_main2 = document.getElementById("answer1_main2");
            const answer2_main2 = document.getElementById("answer2_main2");
            const answer3_main2 = document.getElementById("answer3_main2");
            const answer4_main2 = document.getElementById("answer4_main2");
            const mainquiz2 = document.getElementById("mainquiz2");
            const quizactive2 = document.getElementById("quizactive2");

            answer1_main2.onclick = function(){
                document.getElementById('answer1_main2').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }
            answer2_main2.onclick = function(){
                document.getElementById('answer2_main2').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }
            answer3_main2.onclick = function(){
                document.getElementById('answer3_main2').style.backgroundColor='#22ff00';  
                 
            }

            answer3_main2.addEventListener("click", () => {
                mainquiz2.classList.toggle("run");
                answer4_main2.classList.add("act");
            });
            answer4_main2.addEventListener("click",() => {
                quizactive2.classList.remove("act");
                quizactive3.classList.add("act");
            });


        }

        { //quiz3
            const answer1_main3 = document.getElementById("answer1_main3");
            const answer2_main3 = document.getElementById("answer2_main3");
            const answer3_main3 = document.getElementById("answer3_main3");
            const answer4_main3 = document.getElementById("answer4_main3");
            const mainquiz3 = document.getElementById("mainquiz3");
            const quizactive3 = document.getElementById("quizactive3");

            answer1_main3.onclick = function(){
                document.getElementById('answer1_main3').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }
            answer2_main3.onclick = function(){
                document.getElementById('answer2_main3').style.backgroundColor='#22ff00';
                
            }
            answer3_main3.onclick = function(){
                document.getElementById('answer3_main3').style.backgroundColor='#ec0000'; 
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");  
            }
            answer2_main3.addEventListener("click", () => {
                mainquiz3.classList.toggle("run");
                answer4_main3.classList.add("act")
            });
            answer4_main3.addEventListener("click",() => {
                quizactive3.classList.remove("act");
                quizactive4.classList.add("act");
            });
        }

        { //quiz 4
            const answer1_main4 = document.getElementById("answer1_main4");
            const answer2_main4 = document.getElementById("answer2_main4");
            const answer3_main4 = document.getElementById("answer3_main4");
            const answer4_main4 = document.getElementById("answer4_main4");
            const mainquiz4 = document.getElementById("mainquiz4");
            const quizactive4 = document.getElementById("quizactive4");
            const quizactive5 = document.getElementById("quizactive5");

            answer1_main4.onclick = function(){
                document.getElementById('answer1_main4').style.backgroundColor='#22ff00';
                
            }
            answer2_main4.onclick = function(){
                document.getElementById('answer2_main4').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }
            answer3_main4.onclick = function(){
            document.getElementById('answer3_main4').style.backgroundColor='#ec0000';
                alert("ผิดนะค้าบลองตอบอื่นดูนะ");
            }
            answer1_main4.addEventListener("click", () => {
                mainquiz4.classList.toggle("run");
                answer4_main4.classList.add("act");
            });
            answer4_main4.addEventListener("click",() => {
                quizactive4.classList.remove("act");
                quizactive5.classList.add("act");
            });
        }
    }



    
    {  //scroll function
    
        const navbar = document.getElementById("navbar");   //nav function
    
        const text_movement = document.getElementById("text_movement");   

        const titlePage =document.getElementById("titlePage");

        const knowledge1 = document.getElementById("knowledge1");  
        const knowledge2 = document.getElementById("knowledge2");
        const knowledge3 = document.getElementById("knowledge3");
        const movement_1 = document.getElementById("movement_1");
        const movement_2 = document.getElementById("movement_2");
        const movement_3 = document.getElementById("movement_3");

        const summarize = document.getElementById("summarize");
        const sumarize_content = document.getElementById("sumarize_content");

        const gravity_title = document.getElementById("gravity_title");

        const movedown = document.getElementById("movedown");
        const moveup = document.getElementById("moveup");
        const moveupdown = document.getElementById("moveupdown");

            window.addEventListener('scroll',() => {
                const scrolled = window.scrollY;
    
                if(scrolled >= 100){
                    navbar.classList.add("fiexd");        //navbar function scroll
                }else {
                    navbar.classList.remove("fiexd");
                }
                if(scrolled >= 400){
                    titlePage.classList.add("fade");              //title page
                }else {
                    titlePage.classList.remove("fade");
                }


                if(scrolled >= 850){                                       //850
                    text_movement.classList.add("movementfade");         //text movement function scroll
                    navbar.classList.remove("fiexd");
                    titlePage.classList.remove("fade");
                }else {
                    text_movement.classList.remove("movementfade");
                }
                
                if(scrolled >= 1150){                                          //1150
                    text_movement.classList.remove("movementfade");
                }if(scrolled >= 1150){
                    knowledge1.classList.add("fade");
                    movement_1.classList.add("fade");
                }else{
                    knowledge1.classList.remove("fade");
                    movement_1.classList.remove("fade");
                }

                if(scrolled >= 1380){                                            //1380
                    knowledge1.classList.remove("fade");
                }

                if(scrolled >= 1530){                                    //1530
                    movement_1.classList.remove("fade");
                    knowledge2.classList.add("fade");
                    movement_2.classList.add("fade");
                }else{
                    knowledge2.classList.remove("fade");
                    movement_2.classList.remove("fade");
                }
                

                if(scrolled >= 1800){                                  //1700
                    knowledge3.classList.add("fade");
                    knowledge2.classList.remove("fade");
                    movement_2.classList.remove("fade");
                    movement_3.classList.add("fade");    
                }else{
                    knowledge3.classList.remove("fade");
                    movement_3.classList.remove("fade");
                }


                if(scrolled >= 2200){
                    movement_3.classList.remove("fade");
                    knowledge3.classList.remove("fade");
                    summarize.classList.add("fade");
                    sumarize_content.classList.add("fade");
                }else{
                    summarize.classList.remove("fade");
                    sumarize_content.classList.remove("fade");
                    yourgift.classList.remove("toggle");
                }


                if(scrolled >= 2800){
                    sumarize_content.classList.remove("fade");
                    summarize.classList.remove("fade");
                    gravity_title.classList.add("fade");
                }else{
                    gravity_title.classList.remove("fade");
                }

                if(scrolled >= 3200){
                    movedown.classList.add("fade");
                    gravity_title.classList.remove("fade");
                }else{
                    movedown.classList.remove("fade");
                }

                if(scrolled >= 4050){
                    moveup.classList.add("fade");
                    movedown.classList.remove("fade");
                }else{
                    moveup.classList.remove("fade");
                }
                if(scrolled >= 4700){
                    moveupdown.classList.add("fade");
                    moveup.classList.remove("fade");
                }else{
                    moveupdown.classList.remove("fade");
                }

                if(scrolled >= 5400){
                    moveupdown.classList.remove("fade");
                }






                
            

            // console.log(scrolled);
            
            });
    }

}