/*let aPromise = new Promise((resolve, reject) => {
	resolve('Thanh cong');
});

aPromise.then((msg) => {
	console.log('Da thanh cong: ', msg);
});
*/

let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a != 'number' || typeof b != 'number'){
				return reject(new Error('Khong phai dang so'));
			}
			return resolve(a + b);
		}, 2000);
	})
}

// add(4, '').then(res => console.log(res))
// .catch(err => console.log(err.toString()))

add(4, '').then(res => console.log(res), err => console.log(err + ''));
