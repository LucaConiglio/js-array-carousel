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

     const imgsRight = document.querySelector(".griglia-destra");

    //  for (let i = 0; i < images.length; i++ ) {
    //      let active = ""
    //      if (i === 0) {
    //          active = "active";
    //      }
    //      imgsRight.innerHTML += `<img class="crystal ${active}" src="img/0${i+1}.webp">`;
    //  }

    let imgId = document.querySelector(".crystal");


    btnTop.addEventListener( "click", function (){
        
    //    const opacity = document.querySelector( `.griglia-destra :nth-child(${ imgIndex + 1 })` );
    //    opacity.classList.remove("active");
        imgId.classList.add("active")
        imgIndex ++;
       
        

       

        if (imgIndex >= images.length){
            imgIndex = 0
        }
        slideImg.src = images[ imgIndex ];
       
    //    const imgsRight = document.querySelector( `.griglia-destra :nth-child(${ imgIndex + 1 })` );
    //    imgsRight.classList.add(active)
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


    