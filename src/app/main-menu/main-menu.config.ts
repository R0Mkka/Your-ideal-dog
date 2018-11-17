export interface Button {
    name: string;
    route: string;
}

export const main_buttons: Button[] = [
    {
        name: 'Подобрать идеальную собаку',
        route: '/pick-the-perfect-breed'
    },
    {
        name: 'Список возможных пород',
        route: '/breeds-list'
    },
    {
        name: 'Угадай породу!',
        route: '/guess-the-breed'
    },
    {
        name: 'Таблица результатов',
        route: '/results-table'
    }          
];

export const other_buttons: Button[] = [
    {
        name: 'Изменить дизайн',
        route: '/change-design'
    },
    {
        name: 'Прокомментировать проект',
        route: '/comment-the-project'
    }
];