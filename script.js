//prendo dal documento la form
const form = document.getElementById('data-insert');

//costanti di classe
const youngDisc = 0.2;
const oldDisc = 0.4;
const young = 18;
const old = 65;
const basePrice = 0.21;

//faccio agire il form nel momento del submit
form.addEventListener('submit', calculatePrice);


function calculatePrice(event)
{
    event.preventDefault();
    
    //prendo dal form i valori e li inserisco dentro due variabili
    const km =document.getElementById('km').value;
    console.log(km);

    const age = document.getElementById('age').value;
    console.log(age);

    let res;

    if(age<young){
        res= (basePrice * km) * youngDisc;
    }
    else if (age> old){
        res= (basePrice * km) * oldDisc;
    }
    else{
        res= (basePrice * km);
    }
    
    
    console.log(res);
    let formattedRes = res.toFixed(2);
    console.log(formattedRes);

    let price = document.getElementById("finalPrice");
    console.log(price);

    let ageOut = document.getElementById("ageOutput");
    console.log(ageOut);
    let kmOut = document.getElementById("kmOutput");
    console.log(kmOut);

    ageOut.innerHTML = age.toString();
    kmOut.innerHTML = km.toString();

    price.innerHTML = formattedRes.toString();
}