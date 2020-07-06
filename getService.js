// API
const API = "https://api.exchangeratesapi.io/";

// Elements
const currenyOneC = document.getElementById("currency_one");
const currenyTwoC = document.getElementById("currency_two");
const amountSectionC = document.getElementById("amount")
const btnCalc = document.getElementById("btn_calculate");
const resultLabelC = document.getElementById("result")

// Load Symbol

fetch('./currencies.json').then(res => res.json()).then(data=>{
    const keys = Object.keys(data);
    const values = Object.values(data);
    console.log(keys)
    console.log(values)
    
    let datas;
    for(let i = 0; i<keys.length; i++)
    {
      datas += `<option value=${keys[i]}>${values[i].name_plural}</option>`
    }
 
    currenyOneC.innerHTML += datas;
    currenyTwoC.innerHTML += datas;
})

btnCalc.addEventListener('click',function(){
    const base_currency = currenyOneC.value;
    const to = currenyTwoC.value;
    const amount = amountSectionC.value;

    fetch(`${API}latest?base=${base_currency}`).then(res => res.json()).then(data =>{
        console.log(data)
        const rate = data.rates[to];
        resultLabelC.innerHTML = `${amount} ${base_currency} = ${amount*rate} ${to}`;
      
    });

    console.log(base_currency)
    console.log(to)
})

/* Apinin desteklemediği bazı sembol ve para birimleri olabilir. */

/* Ali Ergüç */