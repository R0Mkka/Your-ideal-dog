import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
    public buttons: string[];
    public addButtons: string[];

    constructor() {
        this.buttons = [
            'Подобрать идеальную собаку',
            'Список возможных пород',
            'Угадай породу!',
            'Таблица результатов'
        ];

        this.addButtons = [
            'Изменить дизайн',
            'Прокомментировать проект'
        ];
    }
}
