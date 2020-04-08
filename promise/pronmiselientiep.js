

let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a != 'number' || typeof b != 'number'){
				return reject(new Error('Khong phai dang so'));
			}
			return resolve(a + b);
		}, 1000);
	})
}

// 4 + 5 + 8

/*add('', 5).then(value => add(value, 8)) // value nay se tra ve mot promise
.then(value => console.log(value))
.catch(err => console.log(err.toString()));// de handle pronmise nay thi tiep tuc dung lenh then*/

let mult = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a != 'number' || typeof b != 'number'){
				return reject(new Error('Khong phai dang so'));
			}
			return resolve(a * b);
		}, 1000);
	})
}

let dev = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a != 'number' || typeof b != 'number' || b == 0){
				return reject(new Error('Loi'));
			}
			return resolve(a / b);
		}, 1000);
	})
}

// let dienTichHinhThang = (a, b, h) =>{
// 	add(a, b)
// 	.then(res => mult(res, j=h))
// 	.then(res => dev(res, 2))
// 	.then(res => console.log('Dien tich hinh thang : '+res))
// 	.catch(error => console.log(error.toString()));
// }

// dienTichHinhThang(2, 3, 3);

let dienTichHinhThang = (a, b, h) =>{
	return add(a, b)// tra ve mot promis
	.then(res => mult(res, j=h))
	.then(res => dev(res, 2))
}

dienTichHinhThang(2, 3, '')
.then(value => console.log(value))
.catch(error => console.log(error.toString()));