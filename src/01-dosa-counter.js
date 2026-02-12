/**
 * 🍳 Dosa Counter - Order Calculator
 *
 * Raju ka South Indian dosa counter hai Bangalore mein. Customer aata hai,
 * dosa ka type bolta hai, kitne chahiye bolta hai, aur spicy chahiye ya nahi.
 * Tujhe order calculate karke bill banana hai.
 *
 * Rules:
 *   - Dosa prices: plain=40, masala=60, onion=50, butter=70, paper=90, cheese=80
 *   - quantity ka default value 1 hai (agar nahi diya toh 1 maano)
 *   - isSpicy ka default value false hai
 *   - Agar isSpicy true hai, toh har dosa pe Rs 10 extra lagao
 *   - pricePerDosa = base price + (10 if spicy)
 *   - total = pricePerDosa * quantity
 *   - Return: { type, quantity, pricePerDosa, total }
 *   - Hint: Use default parameters, object return
 *
 * Validation:
 *   - Agar type string nahi hai ya unknown type hai, return null
 *   - Agar quantity positive number nahi hai (<=0 ya NaN), return null
 *
 * @param {string} type - Dosa type
 * @param {number} [quantity=1] - Number of dosas
 * @param {boolean} [isSpicy=false] - Add spicy for Rs 10 extra
 * @returns {{ type: string, quantity: number, pricePerDosa: number, total: number } | null}
 *
 * @example
 *   calculateDosaOrder("masala", 2, true)
 *   // => { type: "masala", quantity: 2, pricePerDosa: 70, total: 140 }
 *
 *   calculateDosaOrder("plain")
 *   // => { type: "plain", quantity: 1, pricePerDosa: 40, total: 40 }
 */
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  // Your code here
  if(!type || typeof type !=="string") return null
  if(quantity <=0 || Number(quantity) ===NaN) return null
  const dosaType={
    plain:{
      type:'plain',
      price:40
    },
    masala:{
       type:'masala',
      price:60
    },
    onion:{
       type:'onion',
      price:50
    },
    butter:{
       type:'butter',
      price:70
    },
    paper:{
       type:'paper',
      price:90
    },
    cheese:{
       type:'cheese',
      price:80
    }
  }
  let pricePerDosa=0;
  let total=0;
  switch (type.toLowerCase()) {
    case dosaType.plain.type:
      pricePerDosa = isSpicy?dosaType.plain.price+10: dosaType.plain.price
      
      break;
    case dosaType.masala.type:
      pricePerDosa = isSpicy?dosaType.masala.price+10: dosaType.masala.price
      
      break;
    case dosaType.onion.type:
      pricePerDosa = isSpicy?dosaType.onion.price+10: dosaType.onion.price
      
      break;
    case dosaType.butter.type:
      pricePerDosa = isSpicy?dosaType.butter.price+10: dosaType.butter.price
      
      break;
    case dosaType.paper.type:
      pricePerDosa = isSpicy?dosaType.paper.price+10: dosaType.paper.price
      
      break;
    case dosaType.cheese.type:
      pricePerDosa = isSpicy?dosaType.cheese.price+10: dosaType.cheese.price
      
      break;
  
    default:
      return null
  }
  return {
    type,
    quantity,
    pricePerDosa,
    total:pricePerDosa*quantity
  }
}

