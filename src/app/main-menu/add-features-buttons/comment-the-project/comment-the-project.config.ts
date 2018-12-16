export const Alerts = {
    ok: {
        type: 'ok',
        message: 'Коментарий успешно сохранен!\nСпасибо за вашу активность!',
        actions: [ 'ok' ],
        useAnswer: false
    },
    error: {
        type: 'error',
        message: 'Все поля должны быть заполнены и заполнены верно.',
        actions: [ 'ok' ],
        useAnswer: false
    }
}