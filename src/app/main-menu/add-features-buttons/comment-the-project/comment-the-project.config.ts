export const Alerts = {
    ok: {
        type: 'ok',
        message: 'Коментарий успешно сохранен!\nСпасибо за вашу активность!',
        actions: [ 'ok' ],
        useAnswer: false
    },
    error: {
        type: 'error',
        message: 'Необходимо заполнить все поля!',
        actions: [ 'ok' ],
        useAnswer: false
    }
}