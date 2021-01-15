// 'use strict';
// // エラー発見のため

// console.log('Hello World from main js!');

'use strict';

// const score=85;

// if(score>80){
//   console.log('合格です。');
// }
// else{console.log('不合格です。');}

// console.log('a')


// const signal='black';

// switch(signal){
//   case 'red':
//   console.log('Stop!');
//   break;

//   case 'blue':
//   case'green':
//   console.log('Go!');
//   break;
  
//   case 'yellow':
//   console.log('Caution!');
//   break;

//   default:
//   console.log('Wrong signal');
//   break;
// }

// for(let i=1 ;i<=10 ;i++){
//   console.log(`${i}`);
// }

// let hp =-50

// while(hp>0){
//   console.log(`残り${hp}HP`)
//   hp-=15;
//   if(hp<10){
//     console.log('残り0HP');
//   }
// }

//  do{ 
//   console.log(`残り${hp}HP`)
//   hp-=15;
// }while(hp>0);


// for(let i=1;i<=10;i++){
//   if(i%3===0){
//     break;
//   }
//   console.log(i);

// }

// function showAd(message){
//   console.log('------------');
//   console.log(`-----${message}----`);
//   console.log('------------');
// }

// showAd('Header Ad');
// console.log('aaaaaaaaa');
// console.log('aaaaaaaaa');
// showAd('Ad');
// console.log('aaaaaaaaa');
// console.log('aaaaaaaaa');
// showAd('Footer Ad');
// console.log('aaaaaaaaa');
// console.log('aaaaaaaaa');


// function sum(a,b,c){
//   //  console.log(a+b+c);
//   return a+b+c;
// }

// sum(1,2,3);
// sum(3,4,5);

// const total= 
// sum(1,2,3)+
// sum(3,4,5);

// console.log(total);
// const sum =(a,b,c) => a + b + c;

// const total=sum(1,2,3)+sum(3,4,5);

// console.log(total);

// const scores=[80,90,40,70];
// scores.splice(1,1,40,50);

// for (let i = 0; i<scores.length; i++){
//   console.log(`${i}:Score${scores[i]}`);
// }

// const otherscores=[10,20]
// const scores=[80,90,40,70,...otherscores];
// scores.splice(1,1,40,50);

// for (let i = 0; i<scores.length; i++){
//   console.log(`${i}:Score${scores[i]}`);
// }

// function sum(a,b){
//   console.log(a+b);
// }

// sum(...otherscores);

// const scores=[80,90,40,70]

// scores.forEach((score,index)=>{
// console.log(`Score ${index}:${score}`);
// });

const display = document.getElementById("display")
const button = document.getElementById("button")
let count = 0

button.onclick = function() {
  count += 1
  display.textContent = count
  console.dir(display)
}