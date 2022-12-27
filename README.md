# Obsidian Canvas Copy Selection

A plugin for copying the selection in canvas, which is based on your selection order.

# For Quickadd Users:

```javascript
// Save this code into a javascript file.
module.exports = async (params) => {
	const canvas = app.workspace.activeLeaf.view?.canvas;
	if(!canvas) return;

	const selection = canvas.selection;

	if(selection.size === 0) return;

	// Copy the selection to the clipboard
	// @ts-ignore
	const nodes = Array.from(selection.values()).filter((node)=> node.text != undefined);
	// @ts-ignore
	const text = nodes.map((node)=> node.text).join("\n\n");

	navigator.clipboard.writeText(text);
}
```
