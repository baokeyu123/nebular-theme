import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
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
export declare class NbUserComponent {
    private domSanitizer;
    static readonly SIZE_SMALL: string;
    static readonly SIZE_MEDIUM: string;
    static readonly SIZE_LARGE: string;
    static readonly SIZE_XLARGE: string;
    private sizeValue;
    inverseValue: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly xlarge: boolean;
    /**
     * Specifies a name to be shown on the right of a user picture
     * @type string
     */
    name: string;
    /**
     * Specifies a title (written in a smaller font) to be shown under the **name**
     * @type string
     */
    title: string;
    /**
     * Absolute path to a user picture. Or base64 image
     * User name initials (JD for John Doe) will be shown if no picture specified
     * @type string
     */
    picture: string;
    /**
     * Color of the area shown when no picture specified
     * @type string
     */
    color: string;
    /**
     * Size of the component, small|medium|large
     * @type string
     */
    size: string;
    /**
     * Whether to show a user name or not
     * @type boolean
     */
    showName: boolean;
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    showTitle: boolean;
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    showInitials: boolean;
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    onlyPicture: boolean;
    /**
     * Makes colors inverse based on current theme
     * @type boolean
     */
    inverse: boolean;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     */
    badgeStatus: string;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right'
     * @type string
     */
    badgePosition: string;
    imageBackgroundStyle: SafeStyle;
    showNameValue: boolean;
    showTitleValue: boolean;
    showInitialsValue: boolean;
    isMenuShown: boolean;
    constructor(domSanitizer: DomSanitizer);
    getInitials(): string;
}
