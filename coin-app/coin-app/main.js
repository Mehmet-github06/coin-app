import "./scss/style.scss"

/// https://coinsapp.netlify.app/

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  getCoinData();
  e.target.reset();

})





const getCoinData= async ()=>{
  const input = document.querySelector("header form input")
  const API_KEY = "coinranking734f14b6d044ed7b30d43d513756abfe54db3b39dc88ddc2"
  const options ={
    headers: {'x-access-token': API_KEY}
  }
  const url = `https://api.coinranking.com/v2/coins?search=${input.value}`
 
  try {
    const res = await fetch(url,options)
    const json = await res.json();
    console.log(json.data.coins);
  } catch (error) {
    console.log(error);
  }

 
  

}