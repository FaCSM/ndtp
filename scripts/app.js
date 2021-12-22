const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");
var ques_num = 0
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
class Quiz {
    constructor(type, questions, results) {
        this.type = type;
        this.questions = questions;
        this.results = results;
        this.score = 0;
        this.result = 0;
        this.current = 0;
    }

    Click(index) {
        let value = this.questions[this.current].Click(index);
        this.score += value;
        let correct = -1;
        if (value >= 1) {
            correct = index;
        } else {
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }
        this.Next();
        return correct;
    }

    Next() {
        this.current = getRandomInt(this.questions.length);
        ques_num++;
        if (ques_num >= 20) {
            this.End();
        }
    }


    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    Check(value) {
        return this.value <= value;
    }
}

const results =
    [
        new Result("Вам многому нужно научиться", 0),
        new Result("Вы уже неплохо разбираетесь", 5),
        new Result("Ваш уровень выше среднего", 10),
        new Result("Вам стоит немного доучить", 15),
        new Result("Вы в совершенстве знаете тему", 20)
    ];
const questions =
    [
        new Question("Кто сыграл детектива Рика Декарда в фильме “Бегущий по лезвию” (1982)?",
            [
                new Answer("Джордж Клуни", 0),
                new Answer("Ричард Гир", 0),
                new Answer("Харрисон Форд", 1),
                new Answer("Райан Гослинг", 0)
            ]),
        new Question("Какой фильм, написанный, снятый и спродюсированный Джеймсом Кэмероном, стал самым кассовым фильмом\n" +
            "                своего времени?",
            [
                new Answer("Аватар", 0),
                new Answer("Терминатор", 0),
                new Answer("Титаник", 1),
                new Answer("Правдивая ложь", 0)
            ]),
        new Question("Кто является первой цветной женщиной, получившей премию “Оскар” за лучшую женскую роль?",
            [
                new Answer("Виола Дэвис", 0),
                new Answer("Керри Вашингтон", 0),
                new Answer("Хэлли Берри", 1),
                new Answer("Реджина Кинг", 0)
            ]),
        new Question("Как доктор Айболит вылечил зайку?",
            [
                new Answer("Сделал укол", 0),
                new Answer("Пришил ножки", 1),
                new Answer("Дал морковку", 0)
            ]),
        new Question("Как зовут зайца в передаче \"Спокойной ночи, малыши\" ? <br> <img src='scripts/pic_quest/rabit.gif'>",
            [
                new Answer("Филя", 0),
                new Answer("Хрюша", 0),
                new Answer("Степашка", 1),
                new Answer("Кеша", 0)
                new Answer("Каркуша", 0)
            ]),
        new Question("Куда Братец Кролик умолял его не бросать?",
            [
                new Answer("В крапиву", 0),
                new Answer("В терновый куст", 1),
                new Answer("В болото", 0)
            ]),
        new Question(" Радость, Страх, Гнев, Брезгливость and Печаль управляют чьими эмоциями в фильме “Головоломка”?",
            [
                new Answer("Бонни", 0),
                new Answer("Бу", 0),
                new Answer("Энди", 0),
                new Answer("Райли", 1)
            ]),
        new Question("Какой национальный вид спорта Канады?",
            [
                new Answer("Боулинг", 0),
                new Answer("Баскетбол", 0),
                new Answer("Лакросс", 1),
                new Answer("Футбол", 0)
            ]),
        new Question("Какой боксер был известен как “The Greatest” и “The People’s Champion”?",
            [
                new Answer("Майк Тайсон", 0),
                new Answer("Мухаммед Али", 1),
                new Answer("Флойд Мейвезер", 0),
                new Answer("Оскар Дела Хойя", 0)
            ]),
        new Question("Сколько минут длится матч по регби?",
            [
                new Answer("Восемьдесят минут", 1),
                new Answer("Тридцать минут", 0),
                new Answer("Сто двадцать минут", 0),
                new Answer("Шестьдесят минут", 0)
            ]),
        new Question("В какой стране были проведены первые Олимпийские игры?",
            [
                new Answer("Италия", 0),
                new Answer("Япония", 0),
                new Answer("Греция", 1),
                new Answer("Франция", 0)
            ]),
        new Question("Какая единственная страна принимала участие во всех чемпионатах мира по футболу?",
            [
                new Answer("Бразилия", 1),
                new Answer("Англия", 0),
                new Answer("Испания", 0),
                new Answer("Аргентина", 0)
            ]),
        new Question("Олимпийские игры проводятся каждые сколько лет?",
            [
                new Answer("Шесть лет", 0),
                new Answer("Четыре года", 1),
                new Answer("Пять лет", 0),
                new Answer("Семь лет", 0)
            ]),
        new Question("Сколько колец на олимпийском флаге?",
            [
                new Answer("Семь", 0),
                new Answer("Шесть", 0),
                new Answer("Пять", 1),
                new Answer("Четыре", 0)
            ]),
        new Question("Олимпийские игры проводятся каждые сколько лет?",
            [
                new Answer("Шесть лет", 0),
                new Answer("Четыре года", 0),
                new Answer("Пять лет", 1),
                new Answer("Семь лет", 0)
            ]),
        new Question("Сколько колец на олимпийском флаге?",
            [
                new Answer("Семь", 0),
                new Answer("Шесть", 0),
                new Answer("Пять", 1),
                new Answer("Четыре", 0)
            ]),
        new Question("Сколько было пилотируемых высадок на Луну?",
            [
                new Answer("Восемь", 0),
                new Answer("Пять", 0),
                new Answer("Шесть", 1),
                new Answer("Семь", 0)
            ]),
        new Question("В каком году была подписана Декларация независимости США?",
            [
                new Answer("1676", 0),
                new Answer("1678", 0),
                new Answer("1775", 0),
                new Answer("1776", 1)
            ]),
        new Question("Когда пала Берлинская стена?",
            [
                new Answer("1988", 0),
                new Answer("1989", 1),
                new Answer("1990", 0),
                new Answer("1991", 0)
            ]),
        new Question("Каково было первоначальное название Нью-Йорка?",
            [
                new Answer("Новый Амстердам", 1),
                new Answer("Большое яблоко", 0),
                new Answer("Имперский штат", 0),
                new Answer("Готэм", 0)
            ]),
        new Question("Как долго длилась Столетняя война?",
            [
                new Answer("116 лет", 0),
                new Answer("100 лет", 1),
                new Answer("50 лет", 0),
                new Answer("101 год", 0)
            ]),
        new Question("2 - 2 = ",
            [
                new Answer("0", 1),
                new Answer("1", 0),
                new Answer("2", 0),
                new Answer("3", 0)
            ]),
        new Question("Какая страна является самой маленькой в мире?",
            [
                new Answer("Мальта", 0),
                new Answer("Мальдивы", 0),
                new Answer("Ватикан", 1),
                new Answer("Монако", 0)
            ]),
        new Question("Символом какого ресторана является клоун?",
            [
                new Answer("Макдональдс", 1),
                new Answer("Бургер Кинг", 0),
                new Answer("KFC", 0),
                new Answer("Маленькие Цезари", 0)
            ])
    ];
const quiz = new Quiz(localStorage.getItem("quiz_type"), questions, results);
Update();

function Update() {
    if (ques_num < 20) {
        headElem.innerHTML = quiz.questions[quiz.current].text;
        buttonsElem.innerHTML = "";
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";
            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
            btn.setAttribute("index", i);
            buttonsElem.appendChild(btn);
        }
        pagesElem.innerHTML = (ques_num + 1) + " / " + 20;
        Init();
    } else {
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
    }
}

function Init() {
    let btns = document.getElementsByClassName("button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function (e) {
            Click(e.target.getAttribute("index"));
        });
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);
    let btns = document.getElementsByClassName("button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }
    if (quiz.type === 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }
        if (index !== correct) {
            btns[index].className = "button button_wrong";
        }
    } else {
        btns[index].className = "button button_correct";
    }
    setTimeout(Update, 1000);
}

function eventList(e) {
    switch (e.code) {
        case 'KeyQ' :
            Click(0);
            break;
        case 'KeyA' :
            Click(1);
            break;
        case 'KeyW' :
            Click(2);
            break;
        case 'KeyS' :
            Click(3);
            break;
        case 'KeyE' :
            Click(4);
            break;
        case 'KeyD' :
            Click(5);
            break;
    }
}

document.addEventListener('keydown', eventList)