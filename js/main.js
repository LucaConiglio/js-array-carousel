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

    const imgsRight = document.getElementById("griglia-destra");

    btnTop.addEventListener( "click", function (){
 
        imgIndex ++;

        if (imgIndex >= images.length){
            imgIndex = 0
        }
        slideImg.src = images[ imgIndex ];
       
        
    })

    btnBot.addEventListener( "click", function (){

        // 0
        imgIndex--;

        if (imgIndex < 0){
            imgIndex = images.length - 1;
        }        

        // 4
        slideImg.src = images[ imgIndex ];
        
    })


    