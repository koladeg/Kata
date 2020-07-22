function solve(s){
    //..
    let big='ABCDEFGHIJKLMONPQRSTUVWXYZ'
    let small = big.toLowerCase()
    let all = []
    let uplts = 0
    let lwlts = 0
    let nums = 0
    let spec = 0
    arr = s.split('')
    for (i of arr){
       if( Number(i) >= 0 ){
         nums += 1
       }else if( big.includes(i)){
         uplts += 1
       }else if( small.includes(i)){
         lwlts += 1
       }else{
         spec += 1
       }
    }
    all = [uplts, lwlts, nums, spec]
     
     return all
   }

   const solve = (str) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
  );
   