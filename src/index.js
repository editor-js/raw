/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Raw Plugin for the CodeX Editor.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

class Raw {
    /**
     * Should this tool be displayed at the Editor's Toolbox
     * @returns {boolean}
     * @public
     */
    static get displayInToolbox() {
        return true;
    }

    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: RawData, config: object, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - CodeX Editor API
     */
    constructor({data, config, api}) {
        this.api = api;

        this.CSS = {
            block: this.api.styles.block,
            wrapper: 'ce-textearea'
        };

        this.data = data || {};
        this.element = this.drawView();
    }

    /**
     * Create Tool's view
     * @return {HTMLElement}
     * @private
     */
    drawView() {
        let textarea = document.createElement('textarea');

        textarea.classList.add(this.CSS.wrapper, this.CSS.block);

        textarea.placeholder = 'Enter raw HTML';

        return textarea;
    }

    /**
     * Return Tool's view
     * @returns {HTMLDivElement}
     * @public
     */
    render() {
        return this.element;
    }

    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} rawInput - Input with HTML RawData
     * @returns {RawData} - saved data
     * @public
     */
    save(rawInput) {
        return {
            rawHTML: rawInput.value
        };
    }

    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    static get toolboxIcon() {
        return `<svg class="raw-plugin-icon-svg" width="19" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M3.177.001c1.363 0 2.136.765 2.136 1.934 0 .905-.563 1.49-1.085 1.688L5.432 6H4.017L2.975 3.816h-.989V6H.734V.001h2.443zM1.987 2.85h.988c.624 0 1.028-.299 1.028-.896 0-.611-.417-.936-1.01-.936H1.986v1.832zM6.86 6H5.58L7.567.001H9.08L11.057 6H9.703l-.44-1.455H7.309L6.86 6zm1.459-4.772h-.057l-.704 2.346h1.46l-.7-2.346zM13.71 6h-1.174L10.964.001h1.367l.857 4.202h.061L14.282 0h1.072l1.037 4.202h.062L17.305 0h1.363L17.098 6h-1.172l-1.081-3.995h-.049L13.711 6z" fill-rule="evenodd"/></svg>`
    }
}

module.exports = Raw;
