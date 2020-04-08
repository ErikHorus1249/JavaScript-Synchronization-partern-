// tinh dien tich hinh thang

// let square = (a, b, h) => (a + b) * h/2;

// console.log('Dien tich  : ' + square(2, 3, 2));

// let add = (a, b, CallBack) =>{
// 	setTimeout(() => {
// 		let err, result;
// 		if(typeof a != 'number' || typeof b != 'number'){
// 			err = 'Tham so truyen vao khong phai so';
// 			return CallBack(err, result);
// 		}
// 		result = a + b;
// 		CallBack(err, result);
// 	}, 1000);
// }

// add(4, 5, (error, value) =>{
// 	if(error) return console.log(error);
// 	console.log(value);
// });
// aco the loai bo cac gia tri tra ve 
let add = (a, b, CallBack) => {
	setTimeout(() => {
		if(typeof a != 'number' || typeof b != 'number'){
			return CallBack(new Error('du lieu dau vao khong phai kieu so'));
		}
		CallBack(a + b);
	}, 1000);
}

let multiply = (a, b, CallBack) => {
	setTimeout(() => {
		if(typeof a != 'number' || typeof b != 'number'){
			return CallBack(new Error('du lieu dau vao khong phai kieu so'));
		}
		CallBack(a * b);
	}, 1000);
}

let divide = (a, b, CallBack) => {
	setTimeout(() => {
		if(typeof a != 'number' || typeof b != 'number'){
			return CallBack(new Error('du lieu dau vao khong phai kieu so'));
		}
		if(b == 0){
			return CallBack(new Error('Khong the chia cho 0 .'))
		}
		CallBack(a / b);
	}, 1000);
};

// add(4, 5, (error, value) =>{
// 	if(error) return console.log(error);
// 	console.log(value);
// });

/*let letCaculateSquare = (a, b, h, callBack) => {
	add(a, b, (err, result) => {
		if(err) return callBack(err);
		multiply(result , h, (err, result) => {
			if(err) return callBack(err);
			devide(result, 2, (err, result) => {
				if(err) return callBack(err);
				return callBack(undefine, result);
			});
		});
	});
}*/

/* letCaculateSquare(4, 5, 3, (err, value) =>{
 	if(err) console.log((err));
 	console.log(value);
 })*/
let calculateSquare = (a, b, h, callBack) =>{
	add(a, b, (err, value) =>{
		if(err) return callBack(err);
		else multiply(value, h, (err, value) => {
			if(err) return callBack(err);
			else devide(value, 2, (err, value) => {
				if(err) return callBack(err);
				else return callBack(undefined, value);
			});
		});
	});
}

 calculateSquare(1, 4, 2, (err, value) =>{
 	if(err) return console.log((err.toString()));
 	console.log(value);
 })
