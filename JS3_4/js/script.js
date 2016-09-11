(function () {
    function createPage() {

        var page = document.createElement('div');
        page.classList.add('container');
        page.style.fontSize = '24px';
        page.style.width = '800px';
        page.style.margin = '0 auto';
        page.style.backgroundColor = '#fff';

        var body = document.body;
        body.style.backgroundColor = '#c8c8c8';
        body.appendChild(page);
    }

    function createHeder() {

        var element = document.createElement('H1');
        element.classList.add('header');
        element.innerHTML = 'Тест по программированию';
        element.style.fontSize = '24px';
        element.style.margin = '0 auto';
        element.style.textAlign = 'center';

        var header = document.querySelector('.container');
        header.appendChild(element);
    }

    function createQuestion(textQuestion) {

        for (var i = 1; i <= 3; i++) {

            var textQuestion = 'Вопрос №';

            var question = document.createElement('H1');
            question.style.fontSize = '16px';
            question.className = "question";
            question.innerHTML = textQuestion + i;

            var getQuestion = document.querySelector('.container');
            getQuestion.appendChild(question);

            var createUl = document.createElement('ul');
            createUl.classList.add('answer');
            getQuestion.appendChild(createUl);

            var formAnswer = createFormAnswer();

            function createFormAnswer() {
                for (var j = 1; j <= 3; j++) {

                    var labelCheck = document.createElement('label');
                    labelCheck.style.display = "block";
                    createUl.appendChild(labelCheck);

                    var inputCheck = document.createElement('input');
                    inputCheck.setAttribute('type', 'checkbox');
                    labelCheck.appendChild(inputCheck);

                    var textElemCheck = document.createTextNode('Вариант ответа №' + j);
                    textElemCheck.className = "answer";
                    labelCheck.appendChild(textElemCheck);
                }
            }
        }
    }

    function createButton() {

        var buttonResult = document.createElement('button');
        buttonResult.setAttribute('type', 'submit');
        buttonResult.className = "btn btn-info";
        buttonResult.style.margin = "20px 280px";
        buttonResult.style.textAlign = 'center';
        document.querySelector('.container').appendChild(buttonResult);

        var textElemBtn = document.createTextNode('Проверить мои результаты');
        buttonResult.appendChild(textElemBtn);
    }

    createPage();
    createHeder();
    createQuestion();
    createButton();
})();

console.log(document);