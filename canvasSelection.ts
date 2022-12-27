import { ItemView, Plugin } from 'obsidian';

export default class CopySelectionInCanvas extends Plugin {

	async onload() {
		this.addCommand({
		    id: 'copy-text-in-selection',
		    name: 'Copy Text In Selection',
		    checkCallback: (checking: boolean) => {
		        // Conditions to check
		        const canvasView = this.app.workspace.getActiveViewOfType(ItemView);

		        if (canvasView) {
		            // If checking is true, we're simply "checking" if the command can be run.
		            // If checking is false, then we want to actually perform the operation.
		            if (!checking) {
						// Get the selection
						// @ts-ignore
		                const selection = canvasView.canvas.selection;

						if(selection.size === 0) return;

		                // Copy the selection to the clipboard
						// @ts-ignore
						const nodes = Array.from(selection.values()).filter((node)=> node.text != undefined);
						// @ts-ignore
						const text = nodes.map((node)=> node.text).join("\n\n");

						navigator.clipboard.writeText(text);
					}

		            return true;
		        }
		    }
		});
	}

	onunload() {

	}

}
