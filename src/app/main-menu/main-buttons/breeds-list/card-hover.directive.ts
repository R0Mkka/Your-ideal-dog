import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[cardHover]'
})
export class CardHoverDirective {
    @HostBinding('class.hovered') isHovered = false;

    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.isHovered = false;
    }
}