const currencyFirstEl=document.getElementById('currency-first');
const worthFirstEl=document.getElementById('worth-first');
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl=document.getElementById('exchange-rate');


currencyFirstEl.addEventListener('change',updateRate)
currencySecondEl.addEventListener('change',updateRate)
worthFirstEl.addEventListener('input',updateRate)

updateRate();

function updateRate(){
 fetch(
   `https://v6.exchangerate-api.com/v6/8d03c323f7e2a2cb9a5883aa/latest/${currencyFirstEl.value}`
 )
 .then((res)=>res.json())
 .then((data)=>{
  const rate=data.conversion_rates[currencySecondEl.value];
  console.log(rate);
  exchangeRateEl.innerText= `1 ${currencyFirstEl.value} = ${rate + ' ' + currencySecondEl.value}`;
  worthSecondEl.value=(rate*worthFirstEl.value).toFixed(2)
 });
  
}