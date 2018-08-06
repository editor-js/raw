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
     * @param {{data: RawData, config: object, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - CodeX Editor API
     */
    constructor({data, config, api}) {
        this.api = api;

        this.rawToolPlaceholder = config.rawToolPlaceholder || RawTool.DEFAULT_RAWTOOL_PLACEHOLDER;

        this.CSS = {
            block: this.api.styles.block,
            input: this.api.styles.input,
            wrapper: 'ce-textearea'
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
        let div = document.createElement('div'),
            textarea = document.createElement('textarea');

        div.classList.add(this.CSS.block);
        textarea.classList.add(this.CSS.wrapper, this.CSS.input);
        textarea.textContent = this.data.html;

        textarea.placeholder = this.rawToolPlaceholder;

        div.appendChild(textarea);

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
     * @param {HTMLDivElement} rawTextarea - Textarea with HTML RawData
     * @returns {RawData} - raw HTML code
     * @public
     */
    save(rawTextarea) {
        return {
            rawHTML: rawTextarea.value
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
     * Default placeholder for RawTool textarea
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_RAWTOOL_PLACEHOLDER() {
        return 'Enter raw HTML';
    }

}

module.exports = RawTool;
