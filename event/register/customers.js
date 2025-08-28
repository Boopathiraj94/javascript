
//table list
 let tbody =  document.querySelector(".customer-table tbody")

  let customers =  JSON.parse(localStorage.getItem("customers"));

  console.log("customers: ",customers)
 let trow ='';
  customers.forEach((ele,index)=>{
    
           trow +=`<tr>
                        <td>${index+1}</td>
                        <td>${ele.username}</td>
                        <td>${ele.email}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>`;
       
      
  })

  tbody.innerHTML = trow