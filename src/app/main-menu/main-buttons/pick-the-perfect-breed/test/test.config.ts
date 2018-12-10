import { IQuestion } from 'src/app/dataTypes/question';

export const questionList: IQuestion[] = [
    {
        id: 1,
        text: 'С какой целью вы хотите завести собаку?',
        answers: [
            'Собака будет другом семьи',
            'Хочу вместе с ней заниматься спортом',
            'Мне нужен хороший защитник',
            'Нужна сторожевая собака',
            'Хотелось бы охотничью собаку'
        ],
        chosenAnswer: [],
        comment: '*можно выбрать до трех вариантов'
    },
    {
        id: 2,
        text: 'Сколько времени вы готовы тратить на собаку в день?',
        answers: [
            'Максимум час',
            'От часу до трех',
            'Более трех часов'
        ],
        chosenAnswer: -1
    },
    {
        id: 3,
        text: 'Как много денег вы готовы отдать за собаку?',
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
        text: 'Готовы ли вы к большим денежным затратам на содержание собаки?',
        answers: [
            'Нет, совсем не готов(-а)',
            'В целом да, но не на постоянной основе',
            'Да, готов(-а)'
        ],
        chosenAnswer: -1
    },
    {
        id: 5,
        text: 'Какой образ жизни вы ведете?',
        answers: [
            'Очень активный, постоянно занимаюсь спортом',
            'Активный, люблю погулять',
            'Не очень активный, гуляю редко',
            'Постоянно сижу дома. Выхожу на улицу лишь по острой необходимости'
        ],
        chosenAnswer: -1
    },
    {
        id: 6,
        text: 'Важен ли для вас уровень интеллекта собаки?',
        answers: [
            'Да, важен',
            'Не важен'
        ],
        chosenAnswer: -1
    },
    {
        id: 7,
        text: 'Насколько интенсивно вы планируете дрессировать собаку?',
        answers: [
            'Очень интенсивно',
            'Собираюсь научить ее распозновать несколько моих команд',
            'Мне хватит, если она будет давать мне лапу',
            'Не планирую дрессировать'
        ],
        chosenAnswer: -1
    },
    {
        id: 8,
        text: 'Есть ли в семье маленькие дети?',
        answers: [
            'Да, есть',
            'Нет'
        ],
        chosenAnswer: -1
    },
    {
        id: 9,
        text: 'Где вы живете?',
        answers: [
            'Домик в лесу',
            'Загородный дом',
            'Просторная городская квартира',
            'Небольшая квартирка'
        ],
        chosenAnswer: -1
    },
    {
        id: 10,
        text: 'Каким транспортом владеете?',
        answers: [
            'Большая машина',
            'Машина средних размеров',
            'Маленькая легковушка',
            'Пользуюсь общественным транспортом'
        ],
        chosenAnswer: -1
    },
    {
        id: 11,
        text: 'Собаку с какой шерстью вы бы предпочли?',
        answers: [
            'Короткошерстную',
            'Среднешерстную',
            'Длинношерстную'
        ],
        chosenAnswer: -1
    },
    {
        id: 12,
        text: 'Готовы ли вы к тщательному уходу за собакой?',
        answers: [
            'Да, готов(-а) делать все, что потребуется',
            'Готов(-а) прибираться за ней и водить к парикмахеру',
            'Готов(-а) иногда водить к парикмахеру',
            'Уход за собакой хотелось бы свести к минимуму'
        ],
        chosenAnswer: -1
    },
    {
        id: 13,
        text: 'Насколько опытным собаководом вы себя считаете?',
        answers: [
            'Опытным(-ой)',
            'Средним(-ей)',
            'Была собачка, вот хочу еще одну',
            'Новичок'
        ],
        chosenAnswer: -1
    },
    {
        id: 14,
        text: 'Насколько шумной должна быть ваша собака?',
        answers: [
            'Ниндзя (совсем бесшумной)',
            'Не очень шумной',
            'Не имеет значения'
        ],
        chosenAnswer: -1
    },
    {
        id: 15,
        text: 'Каких размеров собаку вы бы предпочли?',
        answers: [
            'Маленькая',
            'Средняя',
            'Большая'
        ],
        chosenAnswer: -1
    },
    {
        id: 16,
        text: 'Есть ли у вас в семье люди сколнные к аллергическим реакциям?',
        answers: [
            'Да, есть',
            'Нет'
        ],
        chosenAnswer: -1
    }
];