listAll()
function listAll() {
    let name = document.getElementById("name");
    let img =  document.getElementById("img");

            name.innerText = ``;
     
            img.innerHTML=`<img src="" alt="">`

    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
        let tblCountries=document.getElementById("tbl");

        let tblBody=`<tr>
                        <th>Name</th>
                        <th>Flag</th>
                    </tr>`;
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        data.forEach(element => {
            let img =element.flags.png
            tblBody+=`<tr>
                        <td>${element.name.common}</td>
                        <td><img src="${img}" alt=""></td>
                    </tr>`
        });
      
        tblCountries.innerHTML=tblBody;
    })
 
}   
    

function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;
    let tblCountries=document.getElementById("tbl");
    tblCountries.innerHTML = ``;
    if(searchValue==""){
        listAll()
    }else{

   let name = document.getElementById("name")
   let img =  document.getElementById("img")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
          
            name.innerText = obj.name.common;
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
    })
}
}