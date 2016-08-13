// alert ('Создаем базу имен');
var arr = [];
n = prompt("введите любое имя");
for (var i = 1; i <= 5; i++) {
	var n = prompt("введите любое имя");
	arr.push(n.toUpperCase());
} 
alert(arr);
var oldName = prompt ("Введите имя пользователя");
var name = oldName.toUpperCase();
// alert(name); // output name user
var newName = find(arr, name);
function find(arr, name) {
  for (var i = 0; i < arr.length; i++) {
  if (name === arr[i]){
  	newName = name;
  	alert (oldName+ ', вы успешно вошли.');
  	return newName;
	} 
}
  if (newName != name){
 	alert('Ошибка. Вы не авторизованы.');
 }
}
  
  
// for (var i=0; i<arr.length; i++) {
// document.writeln(arr[i]+"<br>");
// }
// alert (arr);
 


// var index = 0;
// for (index = 0; index < arr.length; ++index) {
// 	var foundPos = arr.indexOf(name, index);
// 	alert (foundPos);
//      if (~arr.indexOf(name)) {// {
//      	alert ("Добро пожаловать, " +name+ ". Мы тебя ждали");
//      	break;
//   }  else { 
// alert ("Пшел вон");
// } 

 
 // }  


     	
 