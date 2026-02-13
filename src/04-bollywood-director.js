/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)5jk75e32 
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */
export function createDialogueWriter(genre) {
  // Your code here
  const genresWithDialogues ={
    action:'Tujhe toh main dekh lunga',
    romance:'tum mere liye sab kuch ho',
    comedy:'bhai, kya kar rahe ho yaar!',
    drama:"tune mera sab kuch cheen liya!"
  }
  if(!genre) return null
  const genres = Object.keys(genresWithDialogues)
  if(!genres.includes(genre)) return null
  return function(hero,villain){
    if(!hero ||!villain) return "..."
    let dialogue;
    switch(genre){
      case genres[0]:
        dialogue=`${hero} says: '${genresWithDialogues.action}, ${villain}!'`
        break;
      case genres[1]:
        dialogue=`${hero} whispers: '${villain}, ${genresWithDialogues.romance}'`
        break;
      case genres[2]:
        dialogue=`${hero} laughs: '${villain} ${genresWithDialogues.comedy}'`
        break;
      case genres[3]:
        dialogue=`${hero} cries: '${villain}, ${genresWithDialogues.drama}'`
        break;
      default:
        return null
    }
    return dialogue;
  }

}

export function createTicketPricer(basePrice) {
  // Your code here
  if(!basePrice || basePrice <=0) return null
  const multipliers ={
    silver:1,
    gold:1.5,
    platinum:2
  }
  return function(seatType,isWeekend=false){
    const seats = Object.keys(multipliers)
    if(!seats.includes(seatType)) return null
    let price = multipliers[seatType] * basePrice
    if(isWeekend) price *=1.3
    return Math.ceil(price)
  }
}

export function createRatingCalculator(weights) {
  // Your code here
  if(!weights || typeof weights !=="object") return null
  return function(scores){
    if(!scores || typeof scores !=="object") return null
    const weightValues = Object.values(weights)
    const scoreValues = Object.values(scores)
    let sum=0
    for(let i =0;i<weightValues.length;i++){
      
sum+=weightValues[i] * scoreValues[i]
    }
    return parseFloat((sum).toFixed(1))
  }
}
