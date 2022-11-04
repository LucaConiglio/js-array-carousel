const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"];
    let imgIndex = 0;
    const slideImg = document.querySelector(".slide-img");
    const btnTop = document.getElementById("button-top");
    const btnBot = document.getElementById("button-bot");
    slideImg.src = images[ imgIndex ];

    btnTop.addEventListener( "click", function (){
        imgIndex ++;
        slideImg.src = images[ imgIndex ];
        
        if (imgIndex > 4){
            imgIndex = 0
        }
    })

    btnBot.addEventListener( "click", function (){
        imgIndex --;
        slideImg.src = images[ imgIndex ];

        if (imgIndex < 0){
            imgIndex = 4;
        }
    })


    