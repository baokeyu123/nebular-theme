/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { convertToBoolProperty } from '../helpers';
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 *
 * Can be used as a user profile link.
 *
 * @styles
 *
 * user-font-size:
 * user-line-height:
 * user-bg:
 * user-fg:
 * user-fg-highlight:
 * user-font-family-secondary:
 * user-size-small:
 * user-size-medium:
 * user-size-large:
 * user-size-xlarge:
 */
var NbUserComponent = /** @class */ (function () {
    function NbUserComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
           * Specifies a name to be shown on the right of a user picture
           * @type string
           */
        this.name = 'Anonymous';
        this.showNameValue = true;
        this.showTitleValue = true;
        this.showInitialsValue = true;
        this.isMenuShown = false;
    }
    Object.defineProperty(NbUserComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "xlarge", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "picture", {
        set: /**
           * Absolute path to a user picture. Or base64 image
           * User name initials (JD for John Doe) will be shown if no picture specified
           * @type string
           */
        function (value) {
            this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle("url(" + value + ")") : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "size", {
        set: /**
           * Size of the component, small|medium|large
           * @type string
           */
        function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showName", {
        set: /**
           * Whether to show a user name or not
           * @type boolean
           */
        function (val) {
            this.showNameValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showTitle", {
        set: /**
           * Whether to show a user title or not
           * @type boolean
           */
        function (val) {
            this.showTitleValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showInitials", {
        set: /**
           * Whether to show a user initials (if no picture specified) or not
           * @type boolean
           */
        function (val) {
            this.showInitialsValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "onlyPicture", {
        set: /**
           * Whether to show only a picture or also show the name and title
           * @type boolean
           */
        function (val) {
            this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbUserComponent.prototype.getInitials = function () {
        if (this.name) {
            var names = this.name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    // TODO: it makes sense use object instead of list of variables (or even enum)
    /*
        static readonly SIZE = {
         SMALL: 'small',
         MEDIUM: 'medium',
         LARGE: 'large',
        };
       */
    NbUserComponent.SIZE_SMALL = 'small';
    NbUserComponent.SIZE_MEDIUM = 'medium';
    NbUserComponent.SIZE_LARGE = 'large';
    NbUserComponent.SIZE_XLARGE = 'xlarge';
    NbUserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-user',
                    styles: [":host{display:flex}.user-container{position:relative;display:flex;align-items:center}.user-picture{position:relative;border-radius:50%;flex-shrink:0}.user-picture.image{background-size:cover;background-repeat:no-repeat}.user-picture.background{display:flex;align-items:center;justify-content:center}.user-title{font-size:0.75rem}.info-container{margin-left:0.5rem} "],
                    template: "<div class=\"user-container\"> <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\"> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    NbUserComponent.ctorParameters = function () { return [
        { type: DomSanitizer, },
    ]; };
    NbUserComponent.propDecorators = {
        "inverseValue": [{ type: HostBinding, args: ['class.inverse',] },],
        "small": [{ type: HostBinding, args: ['class.small',] },],
        "medium": [{ type: HostBinding, args: ['class.medium',] },],
        "large": [{ type: HostBinding, args: ['class.large',] },],
        "xlarge": [{ type: HostBinding, args: ['class.xlarge',] },],
        "name": [{ type: Input },],
        "title": [{ type: Input },],
        "picture": [{ type: Input },],
        "color": [{ type: Input },],
        "size": [{ type: Input },],
        "showName": [{ type: Input },],
        "showTitle": [{ type: Input },],
        "showInitials": [{ type: Input },],
        "onlyPicture": [{ type: Input },],
        "inverse": [{ type: Input },],
        "badgeText": [{ type: Input },],
        "badgeStatus": [{ type: Input },],
        "badgePosition": [{ type: Input },],
    };
    return NbUserComponent;
}());
export { NbUserComponent };
//# sourceMappingURL=user.component.js.map