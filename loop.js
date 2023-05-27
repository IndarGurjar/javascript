/// for 

// for (let i = 0; i < 15; i++) {
//     // const element = array[i];
//     console.log(i);  
//     document.write(i);  
// }
// let i =0;

/// while 
// while (i<10) {
//     console.log(i);
//     document.write(i);
//     i++;
// }

// / do while loop 
// let i=0;
// do {
//     console.log(i);
//     document.write(i);
//     i++;
// } while (i <= 11);

/// first n natural number 

// let sum = 0;
// let n = 5
// for (let i = 1; i <= n; i++) {
// sum = (sum+i)
// }
// console.log(sum);
// document.write(sum);

/// for in loop 

//    let obj ={
//     indar:95,
//     anjlai:85,
//     patel:75,
//    }
//    for (let a in obj){
//     console.log(a);
//    }

/// for of loop 

//  for(let a of "indar")
//  console.log(a);


// let obj = { indar: 98, harry: 95, mm: 33}
// for (let i = 0; i<Object.keys(obj).length;i++){
//     console.log(obj);
// }

// let obj = {
//     indar: 95,
//     anjlai: 85,
//     patel: 75,
//     patelen: 55,
// }
// for (let key in obj) {
//     console.log(obj);
// }


 /// mean of five number 
 mean=(a,b,c,d,e)=> {
    let m = a+b+c+d+e;
    return m/5;
}
let x = mean(1,2,3,4,5);
console.log(x);