
let fs = require('fs');

// su dung tac vu bat dong bo bang promise 
let readFilePr = (path) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf-8', (err, data) =>{
			if(err) return reject(new Error(err));
			return resolve(data);
		});
	});
}

/*readFilePr('./text1.txt').then(value => {console.log(value); }, error => { console.log(error) });
readFilePr('./text2.txt').then(value => {console.log(value); }, error => { console.log(error) });
readFilePr('./text3.txt').then(value => {console.log(value); }, error => { console.log(error) });*/

/*		fs.readFile('./text1.txt', 'utf-8', (err, data) =>{
			if(err) console.log('loi : '+ err);
			return console.log(data);
		});*/

// Su dung promise.All de su ly nhieu tac vu

/*Promise.all([
	readFilePr('./text1.txt'),
	readFilePr('./text2.txt'),
	readFilePr('./text3.txt')
	]).then(value => { console.log(value)}, error => { console.log(error+'')});*/

//  Su dung ASYNC AWAIT
/*
async function run(){
	var name1 = await readFilePr('./text1.txt');
	var name2 = await readFilePr('./text2.txt');
	var name3 = await readFilePr('./text3.txt');

	return [name1, name2, name3];
}

run().then((value) => console.log(value), err => console.log(err));*/
