import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[imageLoaded]'
})
export class ImageLoadedDirective {
    @HostBinding('style.display') private display = 'none';

    @HostListener('load') onLoad() {
        this.display = 'block';
    }
}