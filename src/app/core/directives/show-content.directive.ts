import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[showContent]'
})
export class ShowContentDirective {
    @Input('showContent') isContentLoaded: boolean;

    private display = 'none';

    @HostBinding('style.display') get getDisplay() {
        this.display = (this.isContentLoaded) ? 'flex' : 'none';

        return this.display;
    }
}