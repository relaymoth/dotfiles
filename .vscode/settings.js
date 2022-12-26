{
  //****************************************************************************
  //
  // Themes
  //
  //****************************************************************************
  //----------------------------------------------------------------
  // Color Themes
  //----------------------------------------------------------------
  "workbench.colorTheme": "Night Owl",
  //----------------------------------------------------------------
  // Color Customizations
  //----------------------------------------------------------------
  //Separate the Editor from the Sidebar
  "workbench.colorCustomizations": {
    "[Night Owl]": {
      "activityBar.background": "#000C1D",
      "activityBar.border": "#102a44",
      "sideBar.background": "#001122",
      "sideBar.border": "#102a44",
      "sideBar.foreground": "#8BADC1"
    },
    "[Night Owl (No Italics)]": {
      "activityBar.background": "#000C1D",
      "activityBar.border": "#102a44",
      "sideBar.background": "#001122",
      "sideBar.border": "#102a44",
      "sideBar.foreground": "#8BADC1"
    }
  },
  //****************************************************************************
  //
  // Text
  //
  //****************************************************************************
  "editor.fontFamily": "Victor Mono, Fira Code, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 18,
  "editor.lineHeight": 25,
  "editor.letterSpacing": 0.5,
  "editor.fontWeight": "400",
  "editor.fontLigatures": true,
  "editor.hover.enabled": true,
  "terminal.integrated.fontWeight": "normal",
  "terminal.integrated.fontFamily": "MesloLGS NF",
  //****************************************************************************
  //
  // Auto-save Configs
  //
  //****************************************************************************
  // DEPRECATED: "prettier.eslintIntegration": true,
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "eslint.alwaysShowStatus": true,
  // tell the ESLint plugin to run on save
  // DEPRECATED: "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
    //"source.fixAll.eslint": true
  },
  // Optional BUT IMPORTANT: If you have the prettier extension enabled for
  // other languages like CSS and HTML, turn it off for JS since we are doing
  // it through Eslint already
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  //****************************************************************************
  //
  // General settings
  //
  //****************************************************************************
  "cSpell.userWords": [
    "backend",
    "camo",
    "destructure",
    "gmail",
    "injectable",
    "lightgrey",
    "minmax",
    "prefetch",
    "promisify",
    "refetch",
    "Signin",
    "Signout",
    "SIGNUP",
    "Templating",
    "TLDR"
  ],
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.autoIndent": "full",
  "editor.colorDecorators": true,
  "editor.cursorBlinking": "solid",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.detectIndentation": false,
  "editor.find.seedSearchStringFromSelection": true,
  "editor.formatOnPaste": true,
  "editor.matchBrackets": "always",
  "editor.minimap.enabled": true,
  "editor.minimap.showSlider": "always",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.parameterHints.enabled": false,
  "editor.quickSuggestionsDelay": 30,
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [80, 100],
  "editor.scrollBeyondLastLine": true,
  "editor.showFoldingControls": "always",
  "editor.snippetSuggestions": "top", // show snippets before any other auto completion
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.useTabStops": true,
  "editor.wordWrap": "on",
  "editor.inlineSuggest.enabled": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "markdown": "html"
  },
  "emmet.triggerExpansionOnTab": true,
  "extensions.ignoreRecommendations": false,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "markdown.preview.fontSize": 16,
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "window.closeWhenEmpty": true,
  "window.openFilesInNewWindow": "off",
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
  "window.zoomLevel": 0,
  //"workbench.activityBar.visible": false,
  "workbench.editor.enablePreview": true,
  "workbench.editor.enablePreviewFromQuickOpen": false,
  //"workbench.editor.tabCloseButton": "off",
  "workbench.editor.tabSizing": "shrink",
  "workbench.iconTheme": "vscode-icons",
  "workbench.sideBar.location": "left",
  "workbench.startupEditor": "newUntitledFile",
  //**************************************************************************
  //
  // Extension Settings
  //
  //**************************************************************************
  //----------------------------------------------------------------
  // Bracket Pair Colorizer 2 (coenraads.bracket-pair-colorizer-2)
  // https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
  //----------------------------------------------------------------
  "bracket-pair-colorizer-2.forceIterationColorCycle": true,
  //----------------------------------------------------------------
  // Colorize (kamikillerto.vscode-colorize)
  // https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize
  //----------------------------------------------------------------
  // "colorize.colorized_colors": ["HEXA", "ARGB", "RGB", "HSL", "BROWSERS_COLORS"]
  "colorize.languages": [
    "javascript",
    "css",
    "html",
    "ts"
  ],
  //----------------------------------------------------------------
  // Todo Tree (gruntfuggly.todo-tree)
  // https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree
  //----------------------------------------------------------------
  "todo-tree.tree.showScanModeButton": false, 
}
