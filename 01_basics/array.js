 const arr=[2,3,4,5,3,8]
//console.log(arr);
const a1=arr.slice(1,4)
//console.log(a1)
const a2=arr.splice(0,3)
//console.log(a2)
// console.log(arr);
 // use of spread
 const a3=[...a1,...a2]
 console.log(a3);
 
 const a4=Array.from("Akash")
 console.log(a4);
 const a5=Array.of(1,4,6)
 
 console.log(a5);
 