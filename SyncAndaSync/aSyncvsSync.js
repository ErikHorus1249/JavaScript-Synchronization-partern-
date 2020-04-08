
// setTimeout(() => {
// 	console.log('da het mot giay');
// }, 1000);
// console.log('Ket thuc');
//  let a = 5;
//  a++;
//  console.log(a);
// tac vu bat dong bo setTimeOut cho cac tac vu dong bo thuc hien xong roi no moi thuc hien
// setTimeout(() => {
// 	console.log('da het mot giay');
// }, 0);
// console.log('Ket thuc');
//  let a = 5;
//  a++;
//  console.log(a);


var fs= require('fs');

// fs.readFile('./index.txt', 'utf-8', (err, data) =>{
// 	if(err) return console.log('Loi : ', err);
// 	return console.log(data);
// });
/*Mot so dau hieu ve bat dong bo la khi su ly ve mang hoac database*/
let data = fs.readFileSync('./index.txt', 'utf-8');
console.log(data);
console.log('Ket thuc');