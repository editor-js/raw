/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Raw HTML Tool for CodeX Editor
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

class RawTool {
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
     * @typedef {HTMLElement} RawData
     * @param {RawData} data — previously saved HTML data
     * @param {Object} config - user config for Tool
     * @param {Object} api - CodeX Editor API
     */
    constructor({data, config, api}) {
        this.api = api;

        this.placeholder = config.placeholder || RawTool.DEFAULT_PLACEHOLDER;

        this.CSS = {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            wrapper: 'ce-rawtool',
            textarea: 'ce-rawtool__textarea'
        };

        this.data = {
            html: data.html || ''
        };

        this.element = this.drawView();
    }

    /**
     * Create Tool's view
     * @return {HTMLElement}
     * @private
     */
    drawView() {
        let wrapper = document.createElement('div'),
            textarea = document.createElement('textarea');

        wrapper.classList.add(this.CSS.baseClass, this.CSS.wrapper);
        textarea.classList.add(this.CSS.textarea, this.CSS.input);
        textarea.textContent = this.data.html;

        textarea.placeholder = this.placeholder;

        wrapper.appendChild(textarea);

        return wrapper;
    }

    /**
     * Return Tool's view
     * @returns {HTMLDivElement} this.element - RawTool's wrapper
     * @public
     */
    render() {
        return this.element;
    }

    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} rawToolsWrapper - RawTool's wrapper, containing textarea with raw HTML code
     * @returns {RawData} - raw HTML code
     * @public
     */
    save(rawToolsWrapper) {
        return {
            html: rawToolsWrapper.querySelector('textarea').value
        };
    }

    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    static get toolboxIcon() {
        return `<svg width="19" height="13"><path d="M18.004 5.794c.24.422.18.968-.18 1.328l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.162-4.162-4.103-4.103A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.104.104.184.223.239.35zm-15.142.547l4.162 4.162a1.105 1.105 0 1 1-1.562 1.562L.519 7.122c-.36-.36-.42-.906-.18-1.328a1.13 1.13 0 0 1 .239-.35L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.862 6.341z"/></svg>`
    }

    /**
     * Default placeholder for RawTool's textarea
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_PLACEHOLDER() {
        return 'Enter HTML code';
    }

}

module.exports = RawTool;
