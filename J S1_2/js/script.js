alert('Возведение числа x в степень n');
var x = prompt("Введите значение числа");
do {
	 if (n <=0) {
	alert('Степень' +n+ 'не поддерживается, введите целую степень, большую 0');
}
	var n=prompt("Введите число степени", "");
	var powN = (Math.round(n));
}
 while 
 	(n<= 0); 
 	alert(pow(x, powN));
 	console.log(pow(x, powN));
 function pow(x, powN) {
	var result= x;
	for(var i = 1; i < powN; ++i ) {
	result *= x;
}
return result;
}
