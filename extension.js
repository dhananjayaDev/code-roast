const vscode = require('vscode');

function activate(context) {
    // Roast messages with emojis
    const roasts = [
        "💻🔥 Saving won't fix that spaghetti code. Have you considered a career in abstract art?",
        "🤖 *beep boop* Translation: 'This code hurts my circuits.'",
        "👀👨‍💻 Your code called. It wants a divorce. Reason: 'Irreconcilable bugs.'",
        "🎢 That's one way to abuse the save button... How's the adrenaline rush?",
        "🧟 Future you is going to dig this up and scream 'WHO WROTE THIS?!' ...Oh wait.",
        "🦹 Bold of you to save without testing. Living on the edge, I see.",
        "🕵️‍♂️ Did you write this on purpose or was your cat walking on the keyboard?",
        "🎨 Errors are just happy little accidents... said no senior dev ever.",
        "🙈 Comment your code? Nah, let's make it a mystery novel for the next dev.",
        "⌛ If only saving improved logic. Wait... it doesn’t? *surprised Pikachu*",
        "🤡 Pro tip: Ctrl+Z is not a version control system.",
        "🍝 This code is so tangled, even GitHub Copilot got lost.",
        "🧨 One more save and this might actually achieve sentience... or explode.",
        "📉 Your code quality graph looks like my last crypto investment.",
        "💔 My IDE just requested therapy after opening this file.",
        "🏗️ Stack Overflow called—they want their copy-paste back.",
        "🧪 Science fact: This code violates the laws of thermodynamics.",
        "🦠 Warning: This file may contain traces of bad practices.",
        "🚧 Under construction? More like under *destruction*.",
        "🎮 Congrats! You unlocked the 'How Did This Ever Work?' achievement.",
        "📛 Your code just failed the Turing Test... for competence.",
        "💣 Saving this is like defusing a bomb with a fork.",
        "👾 Alien technology detected: No known language has syntax this wild.",
        "🤯 My syntax highlighter just gave up and turned everything red.",
        "🕳️ This code has more holes than Swiss cheese... and smells similar.",
        "🚑 Quick! Someone call the Code Medic! (Or just rewrite it.)",
        "🧊 The only thing frozen here is my hope for a clean merge.",
        "🎪 Welcome to the circus! You're the star clown 🤡.",
        "⚰️ RIP Maintainability (2023-2023). Cause of death: This commit.",
        "🧭 If code quality was a location, you'd be 'Lost At Sea.'",
        "💸 Tech debt collectors are knocking. Hide your PRs.",
        "🌪️ This file is a disaster zone. FEMA has been notified.",
        "🔮 I predict future you will spend 3am debugging this.",
        "🏴‍☠️ Yarrr! Here be dragons... and your uncommented code.",
        "🚀 This belongs in a museum... the 'How Not To Code' exhibit."
    ];

    // Load settings
    const config = vscode.workspace.getConfiguration('codeRoast');
    const enabled = config.get('enableRoast', true);

    if (!enabled) return;

    vscode.workspace.onDidSaveTextDocument(() => {
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        vscode.window.showWarningMessage(roast); // Using warning style for extra sass
    });
}

function deactivate() {}

module.exports = { activate, deactivate };