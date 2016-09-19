
(function () {


    alert('Возведение числа x в степень n');
    var resultat = involution();
    alert(resultat());

    function involution() {

        var basis = prompt("Введите значение числа");
        var index = Math.round(prompt("Введите число степени", ""));

        do {
            if (index <= 0) {
                alert('Степень' + index + 'не поддерживается, введите целую степень, большую 0');
                index = Math.round(prompt("Введите число степени", ""));
            }
        }
        while
            (index <= 0);

        return function () {

            var result = basis;
            for (var i = 1; i < index; ++i) {
                result *= basis;
            }

            return result;
        };
    }
})();

