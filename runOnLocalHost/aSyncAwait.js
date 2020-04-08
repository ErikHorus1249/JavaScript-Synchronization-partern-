

/*async function add1(){
	console.log('xin chao');
}
*/

//  arrow function 
//  await chi ton tai trong async function

/*let add = async () => {
	console.log('tam biet');
}

add();*/

let add = (a, b) => {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
		if( typeof a != 'number' || typeof b != 'number'){
			return reject(new  Error('Loi khong phai so')); 
		}
		return resolve(a + b);
	},1000);
	})
}


let dev = (a, b) => {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
		if( typeof a != 'number' || typeof b != 'number') 
			return reject(new  Error('Loi khong phai so')); 
		else if(b == 0) return reject(new Error('Khong chia duoc cho 0'));
		return resolve(a / b);
	},1000);
	})
}

let mul = (a, b) => {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
		if( typeof a != 'number' || typeof b != 'number'){
			return reject(new  Error('Loi khong phai so o phep nhan')); 
		}
		return resolve(a * b);
	},1000);
	});
}


/*// cach 1 dung then
let square = async (a, b, h) => {
	let ab = await add(a, b);
	let abh = await mul(ab, h);
	let square = await dev(abh, 2);
	console.log(square);
}

square(3, 2 ,3).then(res => console.log(res)).catch(err => console.log(err.toString()));*/
// cach 2 dung try catch
/*let square = async (a, b, h) => {
	try {
		let ab = await add(a, b);
		let abh = await mul(ab, h);
		let square = await dev(abh, 2);
		console.log(square);
	} catch(e) {
		console.log(e.toString());
	}
}

square(3, '', 2);*/

/*addPr().then(res => console.log(res)).catch(err => console.log(err.toString()));*/
// su dung callBack()
/*let square = async (a, b, h, callBack) => {
	try {
		let ab = await add(a, b);
		let abh = await mul(ab, h);
		let square = await dev(abh, 2);
		callBack(undefine, square);
	} catch(err) {
		callBack(err);
	}
}

square(3, 2, 2, (value, error) => {
	if(error) console.log(error + '');
	console.log(value);
});*/

// su dung promise de tao ket qua tra ve

let square = async (a, b, h) => {
	try {
		let ab = await add(a, b);
		let abh = await mul(ab, h);
		let square = await dev(abh, 2);
		return Promise.resolve(square);
	} catch(err) {
		return Promise.reject(err);
	}
}

square(3, 2, 2).then(res => console.log(res))
.catch(err => console.log(err.toString()));