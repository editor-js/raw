![](https://badgen.net/badge/CodeX%20Editor/v2.0/blue)

# Raw Tool for CodeX Editor

Raw Tool for the [CodeX Editor](https://ifmo.su/editor).

![](https://capella.pics/425b1484-38dd-4b4e-acb0-bbfbcf0d0a93.jpg)

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev codex.editor.raw
```

Include module at your application

```javascript
const RawTool = require('codex.editor.raw');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/codex.editor.raw).

`https://cdn.jsdelivr.net/npm/codex.editor.raw@2.0.1`

Require this script on a page with CodeX Editor.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the CodeX Editor initial config.

```javascript
var editor = CodexEditor({
  ...
  
  tools: {
    ...
    raw: RawTool,
  }
  
  ...
});
```

## Config Params

| Field       | Type     | Description                   |
| ----------- | -------- | ------------------------------|
| placeholder | `string` | Raw Tool's placeholder string |

## Output data

This Tool returns raw HTML code.

```json
{
    "type" : "raw",
    "data" : {
        "html": "<div style=\"background: #000; color: #fff; font-size: 30px; padding: 50px;\">Any HTML code</div>",
    }
}
```

