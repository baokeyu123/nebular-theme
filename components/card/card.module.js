/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCardComponent, NbCardBodyComponent, NbCardFooterComponent, NbCardHeaderComponent, } from './card.component';
import { NbRevealCardComponent } from './reveal-card/reveal-card.component';
import { NbFlipCardComponent } from './flip-card/flip-card.component';
import { NbCardFrontComponent, NbCardBackComponent } from './shared/shared.component';
var NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
    NbRevealCardComponent,
    NbFlipCardComponent,
    NbCardFrontComponent,
    NbCardBackComponent,
];
var NbCardModule = /** @class */ (function () {
    function NbCardModule() {
    }
    NbCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_CARD_COMPONENTS.slice(),
                    exports: NB_CARD_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbCardModule.ctorParameters = function () { return []; };
    return NbCardModule;
}());
export { NbCardModule };
//# sourceMappingURL=card.module.js.map