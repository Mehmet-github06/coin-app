export const renderCoins = (coin) => {
    const { price, name, iconUrl, change, symbol, rank } = coin
    const coinsUl = document.querySelector("main .coins")
  
    const newCoinLi = document.createElement("li")
    newCoinLi.className="coin"
    newCoinLi.innerHTML = `
      <div class="remove-icon">
          <i class="fas fa-window-close"></i>
      </div>
      <h2 class="coin-name">
          <span>${name}</span>
          <sup>${symbol}</sup>
      </h2>
      <div class="coin-temp">$${Number(price).toFixed(4)}</div>
      <figure>
          <img src="${iconUrl}" alt=""/>
          <figcaption style="color:${change < 0 ? "red" : "green"}">
              <i class="fa-solid fa-chart-line"></i>
              <span>${change || "0"}%</span>
          </figcaption>
  
    `
  
    coinsUl.append(newCoinLi)

   newCoinLi.querySelector(".remove-icon").addEventListener("click",()=>{
    newCoinLi.remove()
   })

 

  }
  