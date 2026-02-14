/**
 * 🍛 Highway Dhaba Rating System - Higher-Order Functions
 *
 * Highway pe dhabas ki rating system bana raha hai. Higher-order functions
 * (HOF) use karne hain — aise functions jo doosre functions ko parameter
 * mein lete hain YA return karte hain.
 *
 * Functions:
 *
 *   1. createFilter(field, operator, value)
 *      - Returns a FUNCTION that filters objects
 *      - Operators: ">", "<", ">=", "<=", "==="
 *      - e.g., createFilter("rating", ">=", 4) returns a function that
 *        takes an object and returns true if object.rating >= 4
 *      - Unknown operator => return function that always returns false
 *
 *   2. createSorter(field, order = "asc")
 *      - Returns a COMPARATOR function for Array.sort()
 *      - order "asc" => ascending, "desc" => descending
 *      - Works with both numbers and strings
 *
 *   3. createMapper(fields)
 *      - fields: array of field names, e.g., ["name", "rating"]
 *      - Returns a function that takes an object and returns a new object
 *        with ONLY the specified fields
 *      - e.g., createMapper(["name"])({name: "Dhaba", rating: 4}) => {name: "Dhaba"}
 *
 *   4. applyOperations(data, ...operations)
 *      - data: array of objects
 *      - operations: any number of functions to apply SEQUENTIALLY
 *      - Each operation takes an array and returns an array
 *      - Apply first operation to data, then second to result, etc.
 *      - Return final result
 *      - Agar data not array, return []
 *
 * Hint: HOF = functions that take functions as arguments or return functions.
 *   createFilter returns a function. applyOperations takes functions as args.
 *
 * @example
 *   const highRated = createFilter("rating", ">=", 4);
 *   highRated({ name: "Punjab Dhaba", rating: 4.5 }) // => true
 *
 *   const byRating = createSorter("rating", "desc");
 *   [{ rating: 3 }, { rating: 5 }].sort(byRating)
 *   // => [{ rating: 5 }, { rating: 3 }]
 */
export function createFilter(field, operator, value) {
  // Your code here
  const operators = ['<','<=', '>','>=',"==="]

  return function(obj){
    if(field in obj){
      switch(operator){
    case '>':
      return obj[field] > value
    case '<':
      return obj[field] < value
    case '>=':
      return obj[field] >= value
    case '<=':
      return obj[field] <= value
    case '===':
      return obj[field] === value
    default:
      return false
  }
  
}
  }
}

export function createSorter(field, order = "asc") {
  // Your code here
  return function(a,b){
    if( typeof a[field]==='number' && typeof b[field] ==="number"){
      if(order==="asc") return a[field] - b[field]
      else return b[field] - a[field]
    }
    if( typeof a[field]==='string' && typeof b[field] ==="string"){
      if(order==="asc") return a[field].localeCompare(b[field])
      else return b[field].localeCompare(a[field])
    }
  }
}

export function createMapper(fields) {
  // Your code here
  return function(obj){
    const res={}
    
      for(let field of fields ){
      res[field]=obj[field]
    }
    return res
    
 
  }
}

export function applyOperations(data, ...operations) {
  // Your code here
let result;
if(!Array.isArray(data)) return []
if(operations.length ===0) return data
result = operations[0](data)
for(let i=1;i<operations.length;i++){
  result=  operations[i](result)
  }
  return result
  
}

const dhabas = [
    { name: 'Punjab Dhaba', rating: 4.5, price: 200, city: 'Delhi' },
    { name: 'Sharma Ji', rating: 3.8, price: 150, city: 'Jaipur' },
    { name: 'Highway King', rating: 4.0, price: 300, city: 'Delhi' },
    { name: 'Truck Stop', rating: 3.2, price: 100, city: 'Agra' },
  ];

  
      

