import { IQuestion } from 'src/app/dataTypes/question';

export const questionList: IQuestion[] = [
    {
        id: 1,
        text: 'Кем в первую очередь для Вас будет собака?',
        answers: [
            'Другом семьи',
            'Партнером по занятию спортом',
            'Моим защитником'
        ],
        chosenAnswer: -1
    },
    {
        id: 2,
        text: 'Сколько времени в день Вы сможете уделять собаке?',
        answers: [
            'Не более часа',
            'От часа до трех',
            'Более трех часов'
        ],
        chosenAnswer: -1
    },
    {
        id: 3,
        text: 'Сколько денег Вы сможете отдать на покупку собаки?',
        answers: [
            'до 450$',
            'до 1000$',
            'до 2500$',
            'более 2500$'
        ],
        chosenAnswer: -1
    },
    {
        id: 4,
        text: 'Какую собаку Вы бы предпочли?',
        answers: [
            'Безшерстную',
            'Короткошерстную',
            'Среднешерстную',
            'Собаку со складчатой кожей',
            'Длинношерстную'
        ],
        chosenAnswer: [],
        comment: '*можно выбрать два варианта'
    },
    {
        id: 5,
        text: 'Насколько интенсивно Вы планируете дрессировать собаку?',
        answers: [
            'Очень интенсивно',
            'Мне хватит, если она будет давать мне лапу',
            'Не планирую дрессировать'
        ],
        chosenAnswer: -1
    },
    {
        id: 6,
        text: 'Собаку какого типа Вы бы предпочли?',
        answers: [
            'Сторожевая',
            'Бойцовская',
            'Охотничая',
            'Декоративная',
            'Ездовая'
        ],
        chosenAnswer: [],
        comment: '*можно выбрать два варианта'
    },
    {
        id: 7,
        text: 'Есть ли в семье маленькие дети?',
        answers: [
            'Да',
            'Нет'
        ],
        chosenAnswer: -1
    },
    {
        id: 8,
        text: 'Где Вы проживаете?',
        answers: [
            'Дача',
            'Загородный дом',
            'Квартира'
        ],
        chosenAnswer: -1
    },
    {
        id: 9,
        text: 'Каким транспортом пользуетесь?',
        answers: [
            'Своя машина',
            'Такси',
            'Общественный транспорт'
        ],
        chosenAnswer: -1
    },
    {
        id: 10,
        text: 'Неприхотливость в уходе является для Вас',
        answers: [
            'Ключевым фактором',
            'Желательным фактором',
            'Незначительным фактором'
        ],
        chosenAnswer: -1
    },
    {
        id: 11,
        text: 'Насколько опытным собаководом Вы себя считаете?',
        answers: [
            'Опытным(-ой)',
            'Средним(-ей)',
            'Новичок'
        ],
        chosenAnswer: -1
    },
    {
        id: 12,
        text: 'Насколько активной должна быть Ваша собака?',
        answers: [
            'Очень активная',
            'Средняя',
            'Лежебока'
        ],
        chosenAnswer: -1
    },
    {
        id: 13,
        text: 'Каких размеров собаку Вы бы предпочли?',
        answers: [
            'Маленькая',
            'Средняя',
            'Большая'
        ],
        chosenAnswer: -1
    },
    {
        id: 14,
        text: 'Есть ли у Вас в семье люди сколнные к аллергическим реакциям?',
        answers: [
            'Да',
            'Нет'
        ],
        chosenAnswer: -1
    }
];

export const Alerts = {
    goAway: {
        type: 'warning',
        message: 'Вы уверены, что хотите уйти? \nВыбранные вами ответы не будут сохранены.',
        actions: [ 'yes', 'cancel' ],
        useAnswer: true
    },
    fewAnswers: {
        type: 'error',
        message: 'Вы должны ответить хотя бы на 5 вопросов!',
        actions: [ 'ok' ],
        useAnswer: false
    },
    notAllAnswers: {
        type: 'warning',
        message: '',
        actions: [ 'yes', 'cancel' ],
        useAnswer: true
    }
}