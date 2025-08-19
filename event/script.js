 

     let val = document.getElementById("val");
 
    //  incerement
     let incBtn = document.querySelector("#clickbtn")

     incBtn.addEventListener("click",()=>{
        
         val.innerText = Number(val.innerText)+1;

     })


    //  decrement

    let decBtn = document.querySelector("#decBtn")

    decBtn.addEventListener("click",()=>{
        val.innerText = Number(val.innerText) -1
    })

    // reset button

    let resetBtn = document.querySelector("#resetBtn")

    resetBtn.addEventListener("mouseenter",()=>{
         val.innerText = 0
    })


    // preventDefault()


    let a =  document.querySelector("#redirect")

    a.addEventListener("click",(event)=>{
        
        event.preventDefault();
        console.log(event)

        //redirection
        window.location.href = "https://www.youtube.com/"
        // alert("hi")
    })

    // how to get Attribute
    a.addEventListener("mouseenter",()=>{
       let href =  a.getAttribute("href")
       console.log(href)
    })

   let img =  document.querySelector("img")

   img.addEventListener("mouseenter",()=>{
      img.setAttribute("src","https://media1.thrillophilia.com/filestore/n2ib9inwzcilxpg3aumbigvq4jus_IMG_World_Dubai_Fun_38a0986c1a.jpg?w=400&dpr=2")

    //   img.removeAttribute("width")

      console.log(img.hasAttribute("width"))
   })