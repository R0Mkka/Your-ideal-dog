import { NgModule } from '@angular/core';

import { CardHoverDirective } from './directives/card-hover.directive';
import { ImageLoadedDirective } from './directives/image-loaded.directive';

@NgModule({
    imports: [],
    declarations: [
        CardHoverDirective,
        ImageLoadedDirective
    ],
    exports: [
        CardHoverDirective,
        ImageLoadedDirective
    ]
})
export class CardDirectivesModule { }