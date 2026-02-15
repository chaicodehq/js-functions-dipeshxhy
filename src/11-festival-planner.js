/**
 * 🎉 Festival Countdown Planner - Module Pattern
 *
 * Indian festivals ka planner bana! Module pattern use karna hai —
 * matlab ek function jo ek object return kare jisme public methods hain,
 * lekin andar ka data PRIVATE rahe (bahar se directly access na ho sake).
 *
 * Function: createFestivalManager()
 *
 * Returns an object with these PUBLIC methods:
 *
 *   - addFestival(name, date, type)
 *     date is "YYYY-MM-DD" string, type is "religious"/"national"/"cultural"
 *     Returns new total count of festivals
 *     Agar name empty or date not string or invalid type, return -1
 *     No duplicate names allowed (return -1 if exists)
 *
 *   - removeFestival(name)
 *     Returns true if removed, false if not found
 *
 *   - getAll()
 *     Returns COPY of all festivals array (not the actual private array!)
 *     Each festival: { name, date, type }
 *
 *   - getByType(type)
 *     Returns filtered array of festivals matching type
 *
 *   - getUpcoming(currentDate, n = 3)
 *     currentDate is "YYYY-MM-DD" string
 *     Returns next n festivals that have date >= currentDate
 *     Sorted by date ascending
 *
 *   - getCount()
 *     Returns total number of festivals
 *
 * PRIVATE STATE: festivals array should NOT be accessible from outside.
 *   manager.festivals should be undefined.
 *   getAll() must return a COPY so modifying it doesn't affect internal state.
 *   Two managers should be completely independent.
 *
 * Hint: This is the Module Pattern — a function that returns an object
 *   of methods, all closing over shared private variables.
 *
 * @example
 *   const mgr = createFestivalManager();
 *   mgr.addFestival("Diwali", "2025-10-20", "religious");   // => 1
 *   mgr.addFestival("Republic Day", "2025-01-26", "national"); // => 2
 *   mgr.getAll(); // => [{ name: "Diwali", ... }, { name: "Republic Day", ... }]
 *   mgr.getUpcoming("2025-01-01", 1); // => [{ name: "Republic Day", ... }]
 */
export function createFestivalManager() {
  // Your code here
  const festivals=[]
  return {
    addFestival(name, date, type){
      const types=["cultural", "religious","national"]
      if(!name || typeof date !=="string" || !types.includes(type) ) return -1
      
      if(festivals.findIndex(fest=>fest.name===name)!==-1){
      festivals.splice(festivals.findIndex(fest=>fest.name===name),1)
      return -1
      }
      return festivals.push({name, date, type})
      console.log(festivals)
     
    },
    removeFestival(name){
     const fest = festivals.findIndex(fes=>fes.name===name)
     if(fest> -1){
      festivals.splice(fest,1)
      return true
     }
     return false
    },
    getAll(){
      return festivals.slice()
    },
    getByType(type){
      return festivals.filter(fes=>fes.type===type)
    },
    getUpcoming(currentDate, n = 3){
      
      const results = festivals.filter(fes=>new Date(fes.date) >= new Date(currentDate))
      if(results.length >= n){
        console.log(results)
        console.log(results.slice(0,n))
        return results.sort((a,b)=>new Date(a.date)- new Date(b.date)).slice(0,n)
      }else{
        return results.sort((a,b)=>new Date(a.date)-new Date(b.date))
      }
      
    },
    getCount(){
      return festivals.length
    }

  }
}
const manager = createFestivalManager()

      manager.addFestival('Diwali', '2025-10-20', 'religious');
      manager.addFestival('Republic Day', '2025-01-26', 'national');
      manager.addFestival('Holi', '2025-03-14', 'cultural');
      manager.addFestival('Independence Day', '2025-08-15', 'national');

       manager.addFestival('Diwali', '2025-10-20', 'religious');

      // const upcoming = manager.getUpcoming('2025-02-01', 2);
      // console.log(upcoming)