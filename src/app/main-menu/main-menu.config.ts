export interface Button {
    name: string;
    route: string;
}

export const main_buttons: Button[] = [
    {
        name: 'Подобрать идеальную собаку',
        route: '/main-menu/pick-the-perfect-breed'
    },
    {
        name: 'Список возможных пород',
        route: '/main-menu/breeds-list'
    },
    {
        name: 'Избранное',
        route: '/main-menu/favorite-breeds'
    },
    {
        name: 'Таблица результатов',
        route: '/main-menu/results-table'
    }          
];

export const other_buttons: Button[] = [
    {
        name: 'Изменить дизайн',
        route: '/main-menu/change-design'
    },
    {
        name: 'Прокомментировать проект',
        route: '/main-menu/comment-the-project'
    }
];