{
  //****************************************************************************
  //
  // Themes
  //
  //****************************************************************************
  //----------------------------------------------------------------
  // Color Themes
  //----------------------------------------------------------------
  // 1984 - Fancy (juanmnl.vscode-theme-1984)
  //"workbench.colorTheme": "1984 - Fancy",
  // Cobalt2 Theme Official (wesbos.theme-cobalt2)
  // "workbench.colorTheme": "Cobalt2",
  // Night Owl (sdras.night-owl)
  //"workbench.colorTheme": "Night Owl",
  // Retreon Color Theme (kgscott.retreon)
  "workbench.colorTheme": "Retreon",
  // Shades opf Purple (ahmadawais.shades-of-purple)
  //"workbench.colorTheme": "Shades of Purple",
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
  "editor.tokenColorCustomizations": {
    "[1984 - Fancy]": {
      "textMateRules": [
        {
          "name": "Language variable",
          "scope": ["variable.language", "variable.other.object.js"],
          "settings": {
            "foreground": "#00c9c5"
          }
        },
        {
          "name": "Entity",
          "scope": "entity.name",
          "settings": {
            "foreground": "#00c9c5"
          }
        },
        {
          "name": "HTML or XML tag",
          "scope": "entity.name.tag",
          "settings": {
            "foreground": "#00c9c5"
          }
        },
        {
          "name": "Class",
          "scope": "entity.name.type",
          "settings": {
            "foreground": "#00c9c5"
          }
        },
        {
          "name": "Support",
          "scope": "support",
          "settings": {
            "foreground": "#00c9c5"
          }
        },
        {
          "name": "Object literal key / property",
          "scope": ["meta.object-literal.key", "support.type.property-name"],
          "settings": {
            "foreground": "#00c9c5"
          }
        }
      ]
    },
    "[Retreon]": {
      "textMateRules": [
        {
          "scope": "emphasis",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "strong",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "entity.other.attribute-name",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "markup.underline",
          "settings": {
            "fontStyle": "underline"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.heading",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "storage.type",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "storage.modifier",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "String interpolation",
          "scope": [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
            "punctuation.section.embedded"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "keyword.control",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": [
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
            "keyword.operator.logical.python"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "this.self",
          "scope": "variable.language",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#ff5874"
          }
        },
        {
          "name": "@Decorator",
          "scope": ["meta.decorator punctuation.decorator"],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": ["punctuation.definition.comment", "comment"],
          "settings": {
            // "foreground": "#ff5874",
            "fontStyle": "italic"
          }
        }
      ]
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
  "terminal.integrated.fontFamily": "Hack Nerd Font Mono",
  "editor.hover.enabled": true,
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
  // Custom CSS and JS Loader (be5invis.vscode-custom-css)
  // https: //marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css
  //----------------------------------------------------------------
  // Very important: Install this plugin: https://github.com/be5invis/vscode-custom-css
  // you'll need to change this to an absolute path on your computer
  "vscode_custom_css.imports": [
    "/Volumes/Macintosh HD/Users/jt/.vscodestyles.css"
  ],
  "vscode_custom_css.policy": true,
  //----------------------------------------------------------------
  // Live Server (ritwickdey.liveserver)
  // https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
  //----------------------------------------------------------------
  "liveServer.settings.donotShowInfoMsg": true,
  //----------------------------------------------------------------
  // Relative Path (jakob101.relativepath)
  // https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath
  //----------------------------------------------------------------
  // An array of extensions to exclude from the relative path url (Useful for
  // used with Webpack or when importing files of mixed types)
  "relativePath.excludedExtensions": [
    ".js"
  ],
  // An array of glob keys to ignore when searching.
  "relativePath.ignore": [
    "**/node_modules/**",
    "**/*.dll",
    "**/obj/**",
    "**/objd/**"
  ],
  // Excludes the extension from the relative path url (Useful for systemjs
  // imports).
  "relativePath.removeExtension": false,
  //----------------------------------------------------------------
  // Tabnine Autocomplete AI (tabnine.tabnine-vscode)
  // https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode
  //----------------------------------------------------------------
  "tabnine.experimentalAutoImports": true,
  //----------------------------------------------------------------
  // Todo Tree (gruntfuggly.todo-tree)
  // https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree
  //----------------------------------------------------------------
  "todo-tree.tree.showScanModeButton": false,
  //----------------------------------------------------------------
  // XML Tools (dotjoshjohnson.xml)
  // https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml
  //----------------------------------------------------------------
  "xmlTools.enableXmlTreeView": true,
  // END
}
