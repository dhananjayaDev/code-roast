const vscode = require('vscode');

function activate(context) {
    // Roast messages
    const roasts = [
        "Saving won't fix that spaghetti.",
        "Wow, another save? Hoping it'll compile this time?",
        "Your code called. It’s crying.",
        "That's one way to abuse the save button.",
        "Future you is going to hate this.",
        "Bold of you to save without testing.",
        "Did you write this on purpose or just winging it?",
        "Errors are just happy little accidents, right?",
        "Comment your code? Nah, let's play hide and seek.",
        "If only saving improved logic."
    ];

    // Load settings from config
    const config = vscode.workspace.getConfiguration('codeRoast');
    const enabled = config.get('enableRoast', true);

    if (!enabled) return;

    vscode.workspace.onDidSaveTextDocument(() => {
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        vscode.window.showInformationMessage(roast);
    });
}

function deactivate() {}

module.exports = { activate, deactivate };
