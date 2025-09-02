
let products;
// already exist products
let alreadyExist = JSON.parse(localStorage.getItem("products"))

if (alreadyExist.length >= 1) {
    products = alreadyExist
}else{
    products = []
}


let product_form = document.querySelector("#product-form")
// product form submit
product_form.addEventListener("submit", (e) => {
    e.preventDefault()
    let pname = document.querySelector("#productname").value
    let pimage = document.querySelector("#productimage").value
    let pstock = document.querySelector("#productstock").value
    let pprice = document.querySelector("#productprice").value
    let pdesc = document.querySelector("#productdesc").value

    console.log(pname, pimage, pstock, pprice, pdesc)
    if (pname && pimage && pstock && pprice && pdesc) {

        let productObj = {
            productName: pname,
            productImage: pimage,
            productStock: pstock,
            productPrice: pprice,
            productDesc: pdesc,
        }

        console.log("ProductObj=>", productObj)

        products.push(productObj)

        localStorage.setItem("products", JSON.stringify(products))

        alert("product saved Successfully")

        product_form.reset()

    } else {
        alert("please fill all fields")
    }
})