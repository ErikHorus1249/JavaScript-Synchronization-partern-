
let getFunction = (num) =>{
	if(num >= 0){
		return () => {
			if(num % 2 == 0) console.log('So khong am va chia het cho 2');
			else {
				console.log('so khong am va ko chia het cho 2')
			}
		};
	}
	else {
		return () => console.log('So am');
	}
};

getFunction(4)();