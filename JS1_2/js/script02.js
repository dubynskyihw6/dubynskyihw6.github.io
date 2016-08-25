
var arr = [];
dataBaseNames();
/*Creating database of names*/
var originalName = prompt("Введите имя пользователя");
var adminName = (originalName.toUpperCase());
find(arr, adminName);
function dataBaseNames() {
  for (var i = 1; i <= 5; i++) {
    var anyName = prompt("введите любое имя");
    upperName = anyName.toUpperCase(anyName);
    arr.push(upperName);    /*Приводим к верхнему регистру, для устрнанения несовпадения*/
  }
}
function find(arr, adminName) {    /* Поиск нужного имени из созданной базы имен и его сравнение*/
    for (var i = 0; i < arr.length; i++) {
        if (adminName === arr[i]) {
            alert(originalName + ', вы успешно вошли.');
            return adminName;
        }
    }
     alert('Ошибка. Вы не авторизованы.');
}