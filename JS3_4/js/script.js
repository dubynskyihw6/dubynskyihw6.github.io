var body = createPage();
function createPage() {
    var element = document.createElement('div');
    element.classList.add('container');
    element.style.fontSize = '24px';
    element.style.width = '800px';
    element.style.margin = '0 auto';
    element.style.border = "1px solid black";
    element.style.backgroundColor = '#fff';
    var body = document.body;
    body.style.backgroundColor = '#c8c8c8';
    body.appendChild(element);
};
var heder = createHeder();
function createHeder() {
    var element = document.createElement('H1');
    element.classList.add('header');
    element.innerHTML = 'Тест по программированию';
    element.style.fontSize = '24px';
    // element.style.width = '800px';
    element.style.margin = '0 auto';
    element.style.textAlign = 'center';
    // element.style.border = "1px solid black";
    // element.style.backgroundColor = '#fff';
    var page = document.querySelector('.container');
    page.appendChild(element);
};


function createQuestion(textQuestion) {
    var question = document.createElement('h1');
    question.style.fontSize = '16px';
    question.innerHTML = textQuestion;
    question.style.color = 'red';
    getQuestion = document.querySelector('.container');
    getQuestion.appendChild(question);
};
createQuestion('1. Вопрос №1.');
function createForm() {
    createUl = document.createElement('ul');
    createUl.classList.add('answer');
    getQuestion.appendChild(createUl);
};
createForm();
function createFormAnswer() {
    for (var i = 1; i <= 3; i++) {
        var createUlAnswer = document.createElement('li');
        createUlAnswer.classList.add('.answer_list');
        createUlAnswer.innerHTML = 'Вариант ответа №' + i;
        createUlAnswer.style.listStyle = 'none';
        createUl.appendChild(createUlAnswer);
    }
};
createFormAnswer();


console.log(document);