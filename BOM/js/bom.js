
// window.alert()
// console.log(window)
let newWindow;
// open window
let openWin = document.querySelector("#openWin")


openWin.addEventListener("click", () => {
    newWindow = window.open("", "myWindow", "width=300,height=400")
    newWindow.document.writeln(`
        <button onclick="print()">Print</button>
        `)
})

// resize window

let resizeWin = document.querySelector("#resizeWin")

resizeWin.addEventListener("click", () => {
    if (newWindow) {
        newWindow.resizeTo(600, 400)
    } else {
        alert("Please open the window")
    }
})

// Move Window

let moveWin = document.querySelector("#moveWin")

moveWin.addEventListener("click", () => {
    if (newWindow) {
        newWindow.moveTo(50,70)
     } else {
        alert("Please open the window")
    }
})

// close window

let closeWin = document.querySelector("#closeWin")

closeWin.addEventListener("click",()=>{
     if(newWindow){
        newWindow.close()
     }else{
        alert("Please open the window first")
     }
})