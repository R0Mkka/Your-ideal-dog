export interface Button {
    name: string;
    route: string;
}

export const mainButtons: Button[] = [
    {
        name: 'Подобрать идеальную собаку',
        route: 'pick-the-perfect-breed'
    },
    {
        name: 'Список возможных пород',
        route: 'breeds-list'
    },
    {
        name: 'Избранное',
        route: 'favorite-breeds'
    },
    {
        name: 'Таблица результатов',
        route: 'results-table'
    }          
];

export const otherButtons: Button[] = [
    {
        name: 'Изменить цвет дизайна',
        route: 'change-design'
    },
    {
        name: 'Прокомментировать проект',
        route: 'comment-the-project'
    }
];