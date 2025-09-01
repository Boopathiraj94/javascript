

let submitBtn = document.querySelector("#submitBtn")

// [{},{},{}]
let alreadyCustomer = JSON.parse(localStorage.getItem("customers"))
console.log(alreadyCustomer)
let customers;
if (alreadyCustomer.length >= 1) {
    customers = alreadyCustomer
}else{
    customers = [];
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// register form submit
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // alert("hi")
    let uname = document.querySelector("#uname").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#cpass").value;

    let uerror = document.querySelector("#uerror");
    let eerror = document.querySelector("#eerror");
    let perror = document.querySelector("#perror");
    let cperror = document.querySelector("#cperror");

    // validation
    let isCheck = false;

    if (uname === "") {
        uerror.innerHTML = "User Name can't be Empty!..";
        isCheck = false
    } else {
        uerror.innerHTML = ""
        isCheck = true
    }


    if (email === "") {
        eerror.innerHTML = "Email can't be Empty"
        isCheck = false
    }
    else if (!emailRegex.test(email)) {
        eerror.innerHTML = "Email is invalid"
        isCheck = false
    }
    else {
        eerror.innerHTML = ""
        isCheck = true
    }

    if (pass === "") {
        perror.innerHTML = "Password can't be Empty"
        isCheck = false
    }
    else if (pass.length < 8) {
        perror.innerHTML = "Password must be 8 charactor"
        isCheck = false
    }
    else {
        perror.innerHTML = ""
        isCheck = true
    }


    if (cpass === "") {
        cperror.innerHTML = "Confirm Password can't be Empty"
        isCheck = false;
    } else if (cpass.length < 8) {
        cperror.innerHTML = "Confirm Password must be 8 charactor"
        isCheck = false
    }
    else {
        cperror.innerHTML = ""
        isCheck = true
    }

    if (isCheck) {

        // console.log(uname,email,pass,cpass)
        let custObj = {
            username: uname,
            email,
            password: pass,
            confirmPass: cpass
        }
        debugger;
        //  console.log("custObj=>",custObj)

        customers.push(custObj)
        //  console.log(customers)

        localStorage.setItem("customers", JSON.stringify(customers))
        alert("Register Successfully")

        let myform = document.querySelector("#myform")
        myform.reset()
    }




})

// login

