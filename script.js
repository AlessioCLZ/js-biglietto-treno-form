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

    const age = document.getElementById('age').value;
    
    let res;

    if(age<young)
        res= (basePrice * km) * youngDisc;
    else if (age> old)
        res= (basePrice * km) * oldDisc;
    else
        res= (basePrice * km);
    
    const price = document.getElementById(finalPrice);
    const ageOut = document.getElementById(ageOutput);
    const kmOut = document.getElementById(kmOutput);

    ageOut.innerHTML = age;
    kmOut.innerHTML = km;

    price.innerHTML = res;
}