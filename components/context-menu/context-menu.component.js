/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input } from '@angular/core';
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-fg
 * context-menu-active-fg
 * context-menu-active-bg
 * */
var NbContextMenuComponent = /** @class */ (function () {
    function NbContextMenuComponent() {
        this.items = [];
    }
    NbContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-context-menu',
                    styles: [":host /deep/ nb-menu{display:inline;font-size:0.875rem;line-height:1.5rem}:host /deep/ nb-menu ul.menu-items{margin:0;padding:0.5rem 0}:host /deep/ nb-menu ul.menu-items .menu-item{border:none;white-space:nowrap}:host /deep/ nb-menu ul.menu-items .menu-item:first-child{border:none}:host /deep/ nb-menu ul.menu-items .menu-item a{cursor:pointer;border-radius:0;padding:0}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon{font-size:1.5rem;width:auto}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{padding:0.375rem 3rem}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-left:0}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-left:1rem} "],
                    template: '<nb-menu class="context-menu" [items]="items"></nb-menu>',
                },] },
    ];
    /** @nocollapse */
    NbContextMenuComponent.ctorParameters = function () { return []; };
    NbContextMenuComponent.propDecorators = {
        "items": [{ type: Input },],
    };
    return NbContextMenuComponent;
}());
export { NbContextMenuComponent };
//# sourceMappingURL=context-menu.component.js.map