
let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a != 'number' || typeof b != 'number'){
				return reject(new Error('Khong phai dang so trong phep cong'));
			}
			return resolve(a + b);
		}, 1000);
	})
}



let mult = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a != 'number' || typeof b != 'number'){
				return reject(new Error('Khong phai dang so trong phep nhan'));
			}
			return resolve(a * b);
		}, 2000);
	})
}
// khi xu ly loi phai mo ta loi rien cho tung promise
//  cac promise phai cho nhau su ly xong roi moi hien thi theo thu tu ban dau
/*Promise.all([
	add('',5), 
	mult(4, 5)
]).then(result => console.log(result))
.catch(err => console.log(err.toString()));*/

// Phuong thuc race

Promise.race([
	add(4 ,5), 
	mult(4, 5)
]).then(result => console.log(result))
.catch(err => console.log(err.toString()));

// promise nao den truoc thi duoc chon lam ket qua cho ca race

