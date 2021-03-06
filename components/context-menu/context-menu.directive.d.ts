/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NbPopoverDirective } from '../popover/popover.directive';
import { NbMenuItem } from '../menu/menu.service';
import { NbThemeService } from '../../services/theme.service';
import { NbPopoverAdjustment, NbPopoverPlacement } from '../popover/helpers/model';
/**
 * Full featured context menu directive.
 *
 * ![image](assets/images/components/context-menu.gif)
 *
 * @example Juts pass basic menu items:
 *
 * ```
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * @example Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * @example By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change placement of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * */
export declare class NbContextMenuDirective implements OnInit, OnDestroy {
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    items: NbMenuItem[];
    /**
     * Position will be calculated relatively host element based on the placement.
     * Can be top, right, bottom and left.
     * */
    placement: NbPopoverPlacement;
    /**
     * Container placement will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to any falsy value if you want to disable automatically adjustment.
     * Available values: clockwise, counterclockwise.
     * */
    adjustment: NbPopoverAdjustment;
    protected popover: NbPopoverDirective;
    constructor(hostRef: ElementRef, themeService: NbThemeService, componentFactoryResolver: ComponentFactoryResolver, platformId: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Show context menu.
     * */
    show(): void;
    /**
     * Hide context menu.
     * */
    hide(): void;
    /**
     * Toggle context menu state.
     * */
    toggle(): void;
    onResize(): void;
    private validateItems(items);
}
