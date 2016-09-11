(function createBaseNames() {
    var baseOfNames = [];

    for (var i = 1; i <= 5; i++) {

        var anyName = prompt("введите любое имя");
        upperName = anyName.toUpperCase(anyName);

        baseOfNames.push(upperName);
    }

    // var inputLogin = find();

    function find() { 

        var originalName = prompt("Введите имя пользователя");
        var adminName = (originalName.toUpperCase());

        for (var i = 0; i < baseOfNames.length; i++) {

            if (adminName === baseOfNames[i]) {

                var presense = true;
                break;
            }
        }

        if (presense == true) {

            alert(originalName + ', вы успешно вошли.');

        } else {

            alert("Ошибка. Вы не авторизованы.");
        }
    }

    find();
})();

