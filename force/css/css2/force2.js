window.onload = function(){
    const force2Btn1 = document.querySelector("#plus1")
    const force2Btn2 = document.querySelector("#plus2")
    const force2Btn3 = document.querySelector("#plus3")
    const force2Btn4 = document.querySelector("#plus4")
    const force2Btn5 = document.querySelector("#plus5")
    const force2move = document.querySelector(".sec2_human_img")

    force2Btn1.addEventListener("click" , ()  => {
        force2Btn1.classList.add("act");
        force2Btn2.classList.add("act");
        force2move.classList.add("level1")
    })

    force2Btn2.addEventListener("click" , ()  => {
        force2Btn2.classList.remove("act");
        force2Btn3.classList.add("act");
        force2move.classList.remove("level1")
        force2move.classList.add("level2")
    })

    force2Btn3.addEventListener("click" , ()  => {
        force2Btn3.classList.remove("act");
        force2Btn4.classList.add("act");
        force2move.classList.remove("level2")
        force2move.classList.add("level3")
    })

    force2Btn4.addEventListener("click" , ()  => {
        force2Btn4.classList.remove("act");
        force2Btn5.classList.add("act");
        force2move.classList.remove("level3")
        force2move.classList.add("level4")
    })

    force2Btn5.addEventListener("click" , ()  => {
        force2Btn5.classList.remove("act");
        force2Btn1.classList.remove("act");
        force2move.classList.remove("level4")
    })

    const force3Btn1 = document.querySelector("#splus1")
    const force3Btn2 = document.querySelector("#splus2")
    const force3Btn3 = document.querySelector("#splus3")
    const force3Btn4 = document.querySelector("#splus4")
    const force3Btn5 = document.querySelector("#splus5")
    const force3move = document.querySelector(".sec3_human_img")

    force3Btn1.addEventListener("click" , ()  => {
        force3Btn1.classList.add("act");
        force3Btn2.classList.add("act");
        force3move.classList.add("level1")
    })

    force3Btn2.addEventListener("click" , ()  => {
        force3Btn2.classList.remove("act");
        force3Btn3.classList.add("act");
        force3move.classList.remove("level1")
        force3move.classList.add("level2")
    })

    force3Btn3.addEventListener("click" , ()  => {
        force3Btn3.classList.remove("act");
        force3Btn4.classList.add("act");
        force3move.classList.remove("level2")
        force3move.classList.add("level3")
    })

    force3Btn4.addEventListener("click" , ()  => {
        force3Btn4.classList.remove("act");
        force3Btn5.classList.add("act");
        force3move.classList.remove("level3")
        force3move.classList.add("level4")
    })

    force3Btn5.addEventListener("click" , ()  => {
        force3Btn5.classList.remove("act");
        force3Btn1.classList.remove("act");
        force3move.classList.remove("level4")
    })
}