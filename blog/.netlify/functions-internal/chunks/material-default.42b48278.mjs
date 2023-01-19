const name = "material-default";
const semanticHighlighting = true;
const tokenColors = [
	{
		name: "Global settings",
		settings: {
			background: "#263238",
			foreground: "#EEFFFF"
		}
	},
	{
		name: "String",
		scope: "string",
		settings: {
			foreground: "#C3E88D"
		}
	},
	{
		name: "Punctuation",
		scope: "punctuation, constant.other.symbol",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "String Escape",
		scope: "constant.character.escape, text.html constant.character.entity.named",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "Boolean",
		scope: "constant.language.boolean",
		settings: {
			foreground: "#ff9cac"
		}
	},
	{
		name: "Number",
		scope: "constant.numeric",
		settings: {
			foreground: "#F78C6C"
		}
	},
	{
		name: "Variable",
		scope: "variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "Other Keyword",
		scope: "keyword.other",
		settings: {
			foreground: "#F78C6C"
		}
	},
	{
		name: "Keyword",
		scope: "keyword, modifier, variable.language.this, support.type.object, constant.language",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "Function call",
		scope: "entity.name.function, support.function",
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "Storage",
		scope: "storage.type, storage.modifier, storage.control",
		settings: {
			foreground: "#C792EA"
		}
	},
	{
		name: "Modules",
		scope: "support.module, support.node",
		settings: {
			foreground: "#f07178",
			fontStyle: "italic"
		}
	},
	{
		name: "Type",
		scope: "support.type, constant.other.key",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "Type",
		scope: "entity.name.type, entity.other.inherited-class, entity.other",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "Comment",
		scope: "comment",
		settings: {
			foreground: "#546E7A",
			fontStyle: "italic"
		}
	},
	{
		name: "Comment",
		scope: "comment punctuation.definition.comment, string.quoted.docstring",
		settings: {
			foreground: "#546E7A",
			fontStyle: "italic"
		}
	},
	{
		name: "Punctuation",
		scope: "punctuation",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "Class",
		scope: "entity.name, entity.name.type.class, support.type, support.class, meta.use",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "Class variable",
		scope: "variable.object.property, meta.field.declaration entity.name.function",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "Class method",
		scope: "meta.definition.method entity.name.function",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "Function definition",
		scope: "meta.function entity.name.function",
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "Template expression",
		scope: "template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "Reset embedded/template expression colors",
		scope: "meta.embedded, source.groovy.embedded, meta.template.expression",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "YAML key",
		scope: "entity.name.tag.yaml",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "JSON key",
		scope: "meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "JSON constant",
		scope: "constant.language.json",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "CSS class",
		scope: "entity.other.attribute-name.class",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "CSS ID",
		scope: "entity.other.attribute-name.id",
		settings: {
			foreground: "#F78C6C"
		}
	},
	{
		name: "CSS tag",
		scope: "source.css entity.name.tag",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "CSS properties",
		scope: "support.type.property-name.css",
		settings: {
			foreground: "#B2CCD6"
		}
	},
	{
		name: "HTML tag outer",
		scope: "meta.tag, punctuation.definition.tag",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "HTML tag inner",
		scope: "entity.name.tag",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "HTML tag attribute",
		scope: "entity.other.attribute-name",
		settings: {
			foreground: "#C792EA"
		}
	},
	{
		name: "HTML entities",
		scope: "punctuation.definition.entity.html",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "Markdown heading",
		scope: "markup.heading",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "Markdown link text",
		scope: "text.html.markdown meta.link.inline, meta.link.reference",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "Markdown list item",
		scope: "text.html.markdown beginning.punctuation.definition.list",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "Markdown italic",
		scope: "markup.italic",
		settings: {
			foreground: "#f07178",
			fontStyle: "italic"
		}
	},
	{
		name: "Markdown bold",
		scope: "markup.bold",
		settings: {
			foreground: "#f07178",
			fontStyle: "bold"
		}
	},
	{
		name: "Markdown bold italic",
		scope: "markup.bold markup.italic, markup.italic markup.bold",
		settings: {
			foreground: "#f07178",
			fontStyle: "italic bold"
		}
	},
	{
		name: "Markdown code block",
		scope: "markup.fenced_code.block.markdown punctuation.definition.markdown",
		settings: {
			foreground: "#C3E88D"
		}
	},
	{
		name: "Markdown inline code",
		scope: "markup.inline.raw.string.markdown",
		settings: {
			foreground: "#C3E88D"
		}
	},
	{
		name: "INI property name",
		scope: "keyword.other.definition.ini",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "INI section title",
		scope: "entity.name.section.group-title.ini",
		settings: {
			foreground: "#89DDFF"
		}
	},
	{
		name: "C# class",
		scope: "source.cs meta.class.identifier storage.type",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "C# class method",
		scope: "source.cs meta.method.identifier entity.name.function",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "C# function call",
		scope: "source.cs meta.method-call meta.method, source.cs entity.name.function",
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "C# type",
		scope: "source.cs storage.type",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "C# return type",
		scope: "source.cs meta.method.return-type",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "C# preprocessor",
		scope: "source.cs meta.preprocessor",
		settings: {
			foreground: "#546E7A"
		}
	},
	{
		name: "C# namespace",
		scope: "source.cs entity.name.type.namespace",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "JSX Text",
		scope: "meta.jsx.children, SXNested",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "JSX Components name",
		scope: "support.class.component",
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "C-related Block Level Variables",
		scope: "source.cpp meta.block variable.other",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "Member Access Meta",
		scope: "source.python meta.member.access.python",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "Function Call",
		scope: "source.python meta.function-call.python, meta.function-call.arguments",
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "Blocks",
		scope: "meta.block",
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "Function Call",
		scope: "entity.name.function.call",
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "Namespaces",
		scope: "source.php support.other.namespace, source.php meta.use support.class",
		settings: {
			foreground: "#EEFFFF"
		}
	},
	{
		name: "Constant keywords",
		scope: "constant.keyword",
		settings: {
			foreground: "#89DDFF",
			fontStyle: "italic"
		}
	},
	{
		name: "Entity name",
		scope: "entity.name.function",
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "Global settings",
		settings: {
			background: "#263238",
			foreground: "#EEFFFF"
		}
	},
	{
		name: "Markup Deleted",
		scope: [
			"markup.deleted"
		],
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "Markup Inserted",
		scope: [
			"markup.inserted"
		],
		settings: {
			foreground: "#C3E88D"
		}
	},
	{
		name: "Markup Underline",
		scope: [
			"markup.underline"
		],
		settings: {
			fontStyle: "underline"
		}
	},
	{
		name: "Keyword Control",
		scope: [
			"keyword.control"
		],
		settings: {
			foreground: "#89DDFF",
			fontStyle: "italic"
		}
	},
	{
		name: "Parameter",
		scope: [
			"variable.parameter"
		],
		settings: {
			fontStyle: "italic"
		}
	},
	{
		name: "Python - Self Parameter",
		scope: [
			"variable.parameter.function.language.special.self.python"
		],
		settings: {
			foreground: "#f07178",
			fontStyle: "italic"
		}
	},
	{
		name: "Python - Format Placeholder",
		scope: [
			"constant.character.format.placeholder.other.python"
		],
		settings: {
			foreground: "#F78C6C"
		}
	},
	{
		name: "Markdown - Blockquote",
		scope: [
			"markup.quote"
		],
		settings: {
			fontStyle: "italic",
			foreground: "#89DDFF"
		}
	},
	{
		name: "Markdown - Fenced Language",
		scope: [
			"markup.fenced_code.block"
		],
		settings: {
			foreground: "#EEFFFF90"
		}
	},
	{
		name: "Markdown - Blockquote Punctuation",
		scope: [
			"punctuation.definition.quote"
		],
		settings: {
			foreground: "#ff9cac"
		}
	},
	{
		name: "JSON Key - Level 0",
		scope: [
			"meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#C792EA"
		}
	},
	{
		name: "JSON Key - Level 1",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#FFCB6B"
		}
	},
	{
		name: "JSON Key - Level 2",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#F78C6C"
		}
	},
	{
		name: "JSON Key - Level 3",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#f07178"
		}
	},
	{
		name: "JSON Key - Level 4",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#916b53"
		}
	},
	{
		name: "JSON Key - Level 5",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#82AAFF"
		}
	},
	{
		name: "JSON Key - Level 6",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#ff9cac"
		}
	},
	{
		name: "JSON Key - Level 7",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#C792EA"
		}
	},
	{
		name: "JSON Key - Level 8",
		scope: [
			"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
		],
		settings: {
			foreground: "#C3E88D"
		}
	}
];
const colors = {
	focusBorder: "#FFFFFF00",
	foreground: "#EEFFFF",
	"button.background": "#80CBC420",
	"button.foreground": "#ffffff",
	"dropdown.background": "#263238",
	"input.background": "#303C41",
	"inputOption.activeBorder": "#EEFFFF30",
	"list.activeSelectionBackground": "#263238",
	"list.activeSelectionForeground": "#80CBC4",
	"list.dropBackground": "#f0717880",
	"list.focusBackground": "#EEFFFF20",
	"list.focusForeground": "#EEFFFF",
	"list.highlightForeground": "#80CBC4",
	"list.hoverBackground": "#263238",
	"list.inactiveSelectionBackground": "#00000030",
	"activityBar.background": "#263238",
	"activityBar.dropBackground": "#f0717880",
	"activityBarBadge.background": "#80CBC4",
	"activityBarBadge.foreground": "#000000",
	"badge.background": "#00000030",
	"badge.foreground": "#546E7A",
	"sideBar.background": "#263238",
	"sideBarSectionHeader.background": "#263238",
	"editorGroup.dropBackground": "#f0717880",
	"editorGroup.focusedEmptyBorder": "#f07178",
	"editorGroupHeader.tabsBackground": "#263238",
	"tab.border": "#263238",
	"tab.activeBorder": "#80CBC4",
	"tab.inactiveBackground": "#263238",
	"tab.activeModifiedBorder": "#607a86",
	"tab.inactiveModifiedBorder": "#904348",
	"tab.unfocusedActiveModifiedBorder": "#c05a60",
	"tab.unfocusedInactiveModifiedBorder": "#904348",
	"editor.background": "#263238",
	"editor.foreground": "#EEFFFF",
	"editorLineNumber.foreground": "#37474F",
	"editorLineNumber.activeForeground": "#607a86",
	"editorCursor.foreground": "#FFCC00",
	"editor.selectionBackground": "#80CBC420",
	"editor.selectionHighlightBackground": "#FFCC0020",
	"editor.wordHighlightBackground": "#ff9cac30",
	"editor.wordHighlightStrongBackground": "#C3E88D30",
	"editor.findMatchHighlight": "#EEFFFF",
	"editor.findRangeHighlightBackground": "#FFCB6B30",
	"editor.lineHighlightBorder": "#00000000",
	"editor.rangeHighlightBackground": "#FFFFFF0d",
	"editorWhitespace.foreground": "#EEFFFF40",
	"editorWidget.background": "#263238",
	"editorHoverWidget.background": "#263238",
	"editorMarkerNavigation.background": "#EEFFFF05",
	"peekView.border": "#00000030",
	"peekViewEditor.background": "#EEFFFF05",
	"peekViewResult.background": "#EEFFFF05",
	"peekViewTitle.background": "#EEFFFF05",
	"panel.background": "#263238",
	"panel.border": "#26323860",
	"panelTitle.activeBorder": "#80CBC4",
	"panelTitle.inactiveForeground": "#EEFFFF",
	"statusBar.background": "#263238",
	"statusBar.debuggingBackground": "#C792EA",
	"statusBar.debuggingForeground": "#ffffff",
	"statusBar.noFolderBackground": "#263238",
	"statusBarItem.activeBackground": "#f0717880",
	"statusBarItem.hoverBackground": "#546E7A20",
	"statusBarItem.remoteBackground": "#80CBC4",
	"statusBarItem.remoteForeground": "#000000",
	"titleBar.activeBackground": "#263238",
	"pickerGroup.border": "#FFFFFF1a",
	"terminal.ansiBlack": "#000000",
	"terminal.ansiBlue": "#82AAFF",
	"terminal.ansiBrightBlack": "#546E7A",
	"terminal.ansiBrightBlue": "#82AAFF",
	"terminal.ansiBrightCyan": "#89DDFF",
	"terminal.ansiBrightGreen": "#C3E88D",
	"terminal.ansiBrightMagenta": "#C792EA",
	"terminal.ansiBrightRed": "#f07178",
	"terminal.ansiBrightWhite": "#ffffff",
	"terminal.ansiBrightYellow": "#FFCB6B",
	"terminal.ansiCyan": "#89DDFF",
	"terminal.ansiGreen": "#C3E88D",
	"terminal.ansiMagenta": "#C792EA",
	"terminal.ansiRed": "#f07178",
	"terminal.ansiWhite": "#ffffff",
	"terminal.ansiYellow": "#FFCB6B",
	"debugToolBar.background": "#263238",
	"debugConsole.errorForeground": "#f07178",
	"debugConsole.infoForeground": "#89DDFF",
	"debugConsole.warningForeground": "#FFCB6B",
	"selection.background": "#00000080",
	"editorRuler.foreground": "#37474F",
	"widget.shadow": "#00000030",
	"scrollbar.shadow": "#00000030",
	"editorLink.activeForeground": "#EEFFFF",
	"progressBar.background": "#80CBC4",
	"pickerGroup.foreground": "#80CBC4",
	"tree.indentGuidesStroke": "#37474F",
	"terminalCursor.foreground": "#FFCB6B",
	"terminalCursor.background": "#000000",
	"inputOption.activeBackground": "#EEFFFF30",
	"textLink.foreground": "#80CBC4",
	"textLink.activeForeground": "#EEFFFF",
	"sideBar.foreground": "#607a86",
	"sideBar.border": "#26323860",
	"sideBarTitle.foreground": "#EEFFFF",
	"sideBarSectionHeader.border": "#26323860",
	"panel.dropBackground": "#EEFFFF",
	"panelTitle.activeForeground": "#FFFFFF",
	"editor.lineHighlightBackground": "#00000050",
	"editor.findMatchBackground": "#000000",
	"editor.findMatchHighlightBackground": "#00000050",
	"editor.findMatchBorder": "#80CBC4",
	"editor.findMatchHighlightBorder": "#ffffff30",
	"editorIndentGuide.background": "#37474F70",
	"editorIndentGuide.activeBackground": "#37474F",
	"editorGroup.border": "#00000030",
	"editorGutter.modifiedBackground": "#82AAFF60",
	"editorGutter.addedBackground": "#C3E88D60",
	"editorGutter.deletedBackground": "#f0717860",
	"activityBar.border": "#26323860",
	"activityBar.foreground": "#EEFFFF",
	"activityBar.activeBorder": "#80CBC4",
	"extensionBadge.remoteForeground": "#EEFFFF",
	"scrollbarSlider.background": "#EEFFFF20",
	"scrollbarSlider.hoverBackground": "#EEFFFF10",
	"scrollbarSlider.activeBackground": "#80CBC4",
	"tab.unfocusedActiveBorder": "#546E7A",
	"tab.activeForeground": "#FFFFFF",
	"tab.inactiveForeground": "#607a86",
	"tab.activeBackground": "#263238",
	"tab.unfocusedActiveForeground": "#EEFFFF",
	"editorWidget.resizeBorder": "#80CBC4",
	"editorWidget.border": "#80CBC4",
	"notebook.focusedCellBorder": "#80CBC4",
	"notebook.inactiveFocusedCellBorder": "#80CBC450",
	"statusBar.border": "#26323860",
	"statusBar.foreground": "#546E7A",
	"editorBracketMatch.border": "#FFCC0050",
	"editorBracketMatch.background": "#263238",
	"editorOverviewRuler.findMatchForeground": "#80CBC4",
	"editorOverviewRuler.border": "#263238",
	"editorOverviewRuler.errorForeground": "#f0717840",
	"editorOverviewRuler.infoForeground": "#82AAFF40",
	"editorOverviewRuler.warningForeground": "#FFCB6B40",
	"editorInfo.foreground": "#82AAFF70",
	"editorWarning.foreground": "#FFCB6B70",
	"editorError.foreground": "#f0717870",
	"editorHoverWidget.border": "#FFFFFF10",
	"titleBar.activeForeground": "#EEFFFF",
	"titleBar.inactiveBackground": "#263238",
	"titleBar.inactiveForeground": "#607a86",
	"titleBar.border": "#26323860",
	"input.foreground": "#EEFFFF",
	"input.placeholderForeground": "#EEFFFF60",
	"input.border": "#FFFFFF10",
	"inputValidation.errorBorder": "#f07178",
	"inputValidation.infoBorder": "#82AAFF",
	"inputValidation.warningBorder": "#FFCB6B",
	"dropdown.border": "#FFFFFF10",
	"quickInput.background": "#263238",
	"quickInput.foreground": "#607a86",
	"list.hoverForeground": "#FFFFFF",
	"list.inactiveSelectionForeground": "#80CBC4",
	"quickInput.list.focusBackground": "#EEFFFF20",
	"editorSuggestWidget.background": "#263238",
	"editorSuggestWidget.foreground": "#EEFFFF",
	"editorSuggestWidget.highlightForeground": "#80CBC4",
	"editorSuggestWidget.selectedBackground": "#00000050",
	"editorSuggestWidget.border": "#FFFFFF10",
	"diffEditor.insertedTextBackground": "#89DDFF20",
	"diffEditor.removedTextBackground": "#ff9cac20",
	"notifications.background": "#263238",
	"notifications.foreground": "#EEFFFF",
	"notificationLink.foreground": "#80CBC4",
	"extensionButton.prominentBackground": "#C3E88D90",
	"extensionButton.prominentHoverBackground": "#C3E88D",
	"extensionButton.prominentForeground": "#000000",
	"peekViewEditorGutter.background": "#EEFFFF05",
	"peekViewTitleDescription.foreground": "#EEFFFF60",
	"peekViewResult.matchHighlightBackground": "#80CBC420",
	"peekViewEditor.matchHighlightBackground": "#80CBC420",
	"peekViewResult.selectionBackground": "#607a8670",
	"gitDecoration.deletedResourceForeground": "#f0717890",
	"gitDecoration.conflictingResourceForeground": "#FFCB6B90",
	"gitDecoration.modifiedResourceForeground": "#82AAFF90",
	"gitDecoration.untrackedResourceForeground": "#C3E88D90",
	"gitDecoration.ignoredResourceForeground": "#607a8690",
	"breadcrumb.background": "#263238",
	"breadcrumb.foreground": "#607a86",
	"breadcrumb.focusForeground": "#EEFFFF",
	"breadcrumb.activeSelectionForeground": "#80CBC4",
	"breadcrumbPicker.background": "#263238",
	"menu.background": "#263238",
	"menu.foreground": "#EEFFFF",
	"menu.selectionBackground": "#00000050",
	"menu.selectionForeground": "#80CBC4",
	"menu.selectionBorder": "#00000030",
	"menu.separatorBackground": "#EEFFFF",
	"menubar.selectionBackground": "#00000030",
	"menubar.selectionForeground": "#80CBC4",
	"menubar.selectionBorder": "#00000030",
	"settings.dropdownForeground": "#EEFFFF",
	"settings.dropdownBackground": "#263238",
	"settings.numberInputForeground": "#EEFFFF",
	"settings.numberInputBackground": "#263238",
	"settings.textInputForeground": "#EEFFFF",
	"settings.textInputBackground": "#263238",
	"settings.headerForeground": "#80CBC4",
	"settings.modifiedItemIndicator": "#80CBC4",
	"settings.checkboxBackground": "#263238",
	"settings.checkboxForeground": "#EEFFFF",
	"listFilterWidget.background": "#00000030",
	"listFilterWidget.outline": "#00000030",
	"listFilterWidget.noMatchesOutline": "#00000030"
};
const materialDefault = {
	name: name,
	semanticHighlighting: semanticHighlighting,
	tokenColors: tokenColors,
	colors: colors
};

export { colors, materialDefault as default, name, semanticHighlighting, tokenColors };
