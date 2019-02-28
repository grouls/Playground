import react       from "../../assets/images/react.png";
import redux       from "../../assets/images/redux.png";
import cssGrid     from "../../assets/images/cssgrid.png";
import reactRouter from "../../assets/images/reactRouter.png";
import reduxForm   from "../../assets/images/reduxForm.png";
import prismJS     from "../../assets/images/prismjs.png";
import highlight   from "../../assets/images/reactHighlightWords.png";

export const techConfig = [
  {
    type: "react",
    text: "React",
    img: react,
    url: "https://reactjs.org/"
  },
  {
    type: "react_router",
    text: "React Router",
    img: reactRouter,
    url: "https://reacttraining.com/react-router/"
  },
  {
    type: "redux",
    text: "Redux",
    img: redux,
    url: "https://redux.js.org/"
  },
  {
    type: "redux-form",
    text: "Redux Form",
    img: reduxForm,
    url: "https://redux-form.com/8.1.0/"
  },
  {
    type: "cssGrid",
    text: "CSS Grid",
    img: cssGrid,
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
  },
  {
    type: "prismJS",
    text: "Prism JS",
    img: prismJS,
    url: "https://prismjs.com/"
  },
  {
    type: "reactHighlightWords",
    text: "React Highlight Words",
    img: highlight,
    url: "https://github.com/bvaughn/react-highlight-words"
  }
];

export const codeConfig = [
   {
    id: "code_part_one",
    text: "The displayHelper fn calls the destructured displayBirbs fn prop with an inverted boolean value using the showTheBirbs prop.",
    code: `
    const Henlo = ({ showTheBirbs, showHenloCode, displayBirbs, showCode }) => {
      const displayHelper = () => displayBirbs(!showTheBirbs);
    `,
    src : "/components/henlo/Henlo.js"
  },
  {
    id: "code_part_two",
    text: "The displayBirbs action is dispatched with the action type as SHOW_THE_BIRBS along with the inverted boolean value.",
    code: `
    export const displayBirbs = value => ({
      type: actionTypes.SHOW_THE_BIRBS,
      value
    });
    `,
    src : "/redux/actions/birbActions.js"
  },
  {
    id: "code_part_three",
    text: "Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.",
    code: `
    const actionHandlers = {
      [actionTypes.SHOW_THE_BIRBS]: (state, { value }) => ({ showBirb: value }),
      [actionTypes.SHOW_HENLO_CODE]: (state, { value }) => ({ showCode: value })
    };
    `,
    src : "/redux/reducers/henlo/birbHenloReducer.js"
  }
];


export const extensionsConfig = [
  {
    'name'       : 'Alignment',
    'id'         : 'annsk.alignment',
    'description': 'Align code like in Sublime Text 3 Alignment Package',
    'version'    : '0.3.0',
    'publisher'  : 'annsk',
    'link'       : 'https://marketplace.visualstudio.com/items?itemName=annsk.alignment',
  },
  {
    'name'       : 'Auto Import - ES6, TS, JSX, TSX',
    'id'         : 'nucllear.vscode-extension-auto-import',
    'description': 'Automatically finds, parses and provides code actions and code completion for all available imports. Works with JavaScript and TypeScript. [Forked]',
    'version'    : '1.4.3',
    'publisher'  : 'Sergey Korenuk',
    'link'       : 'https://marketplace.visualstudio.com/items?itemName=nucllear.vscode-extension-auto-import',
  },
  {
    'name'       : 'Auto Rename Tag',
    'id'         : 'formulahendry.auto-rename-tag',
    'description': 'Auto rename paired HTML/XML tag',
    'version'    : '0.0.15',
    'publisher'  : 'Jun Han',
    'link'       : 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
  },
  {
    'name'       : "Babel JavaScript",
    'id'         : "mgmcdermott.vscode-language-babel",
    'description': "VSCode syntax highlighting for today's JavaScript, ported from gandm's language-babel for Atom.",
    'version'    : "0.0.22",
    'publisher'  : "Michael McDermott",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel",
  },
  {
    'name'       : "Bracket Pair Colorizer",
    'id'         : "coenraads.bracket-pair-colorizer",
    'description': "A customizable extension for colorizing matching brackets",
    'version'    : "1.0.61",
    'publisher'  : "CoenraadS",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=coenraads.bracket-pair-colorizer",
  },
  {
    'name'       : "change-case",
    'id'         : "wmaurer.change-case",
    'description': "Quickly change the case (camelCase, CONSTANT_CASE, snake_case, etc) of the current selection or current word",
    'version'    : "1.0.0",
    'publisher'  : "wmaurer",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case",
  },
  {
    'name'       : "Code Spell Checker",
    'id'         : "streetsidesoftware.code-spell-checker",
    'description': "Spelling checker for source code",
    'version'    : "1.6.10",
    'publisher'  : "Street Side Software",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker",
  },
  {
    'name'       : "Debugger for Chrome",
    'id'         : "msjsdiag.debugger-for-chrome",
    'description': "Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.",
    'version'    : "4.11.2",
    'publisher'  : "Microsoft",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome",
  },
  {
    'name'       : "Dracula Official",
    'id'         : "dracula-theme.theme-dracula",
    'description': "Official Dracula Theme. A dark theme for many editors, shells, and more.",
    'version'    : "2.16.0",
    'publisher'  : "Dracula Theme",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula",
  },
  {
    'name'       : "ES7 React/Redux/GraphQL/React-Native snippets",
    'id'         : "dsznajder.es7-react-js-snippets",
    'description': "Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax",
    'version'    : "2.0.1",
    'publisher'  : "dsznajder",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
  },
  {
    'name'       : "ESLint",
    'id'         : "dbaeumer.vscode-eslint",
    'description': "Integrates ESLint JavaScript into VS Code.",
    'version'    : "1.8.0",
    'publisher'  : "Dirk Baeumer",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
  },
  {
    'name'       : "expand-region",
    'id'         : "letrieu.expand-region",
    'description': "expand selection , It works similar to ExpandRegion for Emacs and “Structural Selection” (Control-W) in the JetBrains IDE's (i.e. IntelliJ IDEA).",
    'version'    : "0.1.2",
    'publisher'  : "Le Trieu",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=letrieu.expand-region",
  },
  {
    'name'       : "file-icons",
    'id'         : "file-icons.file-icons",
    'description': "File-specific icons in VSCode for improved visual grepping.",
    'version'    : "1.0.16",
    'publisher'  : " file-icons",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons",
  },
  {
    'name'       : "Find Related Files",
    'id'         : "eamodio.find-related",
    'description': "Finds files related to the current file based on user-defined configuration rules",
    'version'    : "0.8.0",
    'publisher'  : "Eric Amodio",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=eamodio.find-related",
  },
  {
    'name'       : "GitLens — Git supercharged",
    'id'         : "eamodio.gitlens",
    'description': "Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more",
    'version'    : "9.5.1",
    'publisher'  : "Eric Amodio",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
  },
  {
    'name'       : "glean",
    'id'         : "wix.glean",
    'description': "The extension provides refactoring tools for your React codebase",
    'version'    : "4.6.0",
    'publisher'  : "Wix",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=wix.glean",
  },
  {
    'name'       : "HTML Format",
    'id'         : "mohd-akram.vscode-html-format",
    'description': "Format HTML documents.",
    'version'    : "0.0.3",
    'publisher'  : "Mohamed Akram",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=mohd-akram.vscode-html-format",
  },
  {
    'name'       : "htmltagwrap",
    'id'         : "bradgashler.htmltagwrap",
    'description': "Format HTML documents.",
    'version'    : " 0.0.7",
    'publisher'  : "Brad Gashler",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap",
  },
  {
    'name'       : "Import Cost",
    'id'         : "wix.vscode-import-cost",
    'description': "Display import/require package size in the editor",
    'version'    : "2.12.0",
    'publisher'  : "Wix",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost",
  },
  {
    'name'       : "JavaScript (ES6) code snippets",
    'id'         : "xabikos.javascriptsnippets",
    'description': "Code snippets for JavaScript in ES6 syntax",
    'version'    : "1.7.2",
    'publisher'  : "charalampos karypidis",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets",
  },
  {
    'name'       : "Jest",
    'id'         : "orta.vscode-jest",
    'description': "Use Facebook's Jest With Pleasure.",
    'version'    : "2.9.2",
    'publisher'  : "Orta",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=orta.vscode-jest",
  },
  {
    'name'       : "Jest Snippets",
    'id'         : "andys8.jest-snippets",
    'description': "Code snippets for testing framework Jest",
    'version'    : "1.7.0",
    'publisher'  : "andys8",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets",
  },
  {
    'name'       : "Markdown All in One",
    'id'         : "yzhang.markdown-all-in-one",
    'description': "All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)",
    'version'    : "2.1.0",
    'publisher'  : "Yu Zhang",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one",
  },
  {
    'name'       : "Nest Comments",
    'id'         : "philsinatra.nested-comments",
    'description': "This is a VSCode extension for toggling nested comments.",
    'version'    : "2.3.0",
    'publisher'  : "Phil Sinatra",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=philsinatra.nested-comments",
  },
  {
    'name'       : "npm",
    'id'         : "eg2.vscode-npm-script",
    'description': "npm support for VS Code",
    'version'    : "0.3.5",
    'publisher'  : "egamma",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script",
  },
  {
    'name'       : "npm Intellisense",
    'id'         : "christian-kohler.npm-intellisense",
    'description': "Visual Studio Code plugin that autocompletes npm modules in import statements",
    'version'    : "1.3.0",
    'publisher'  : "Christian Kohler",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense",
  },
  {
    'name'       : "Paste JSON as Code",
    'id'         : "quicktype.quicktype",
    'description': "Copy JSON, paste as Go, TypeScript, C#, C++ and more.",
    'version'    : "12.0.46",
    'publisher'  : "quicktype",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype",
  },
  {
    'name'       : "Prettier - Code formatter",
    'id'         : "esbenp.prettier-vscode",
    'description': "VS Code plugin for prettier/prettier",
    'version'    : "1.8.1",
    'publisher'  : "Esben Petersen",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
  },
  {
    'name'       : "Project Manager",
    'id'         : "alefragnani.project-manager",
    'description': "Easily switch between projects",
    'version'    : "10.3.2",
    'publisher'  : "Alessandro Fragnani",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager",
  },
  {
    'name'       : "Sass",
    'id'         : "robinbentley.sass-indented",
    'description': "Indented Sass syntax highlighting, autocomplete & snippets",
    'version'    : "1.5.1",
    'publisher'  : "Robin Bentley",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented",
  },
  {
    'name'       : "Sensitive Replace",
    'id'         : "vilicvane.sensitive-replace",
    'description': "Replace selections while preserving cases.",
    'version'    : "0.1.1",
    'publisher'  : " vilicvane",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=vilicvane.sensitive-replace",
  },
  {
    'name'       : "Sort lines",
    'id'         : "tyriar.sort-lines",
    'description': "Sorts lines of text",
    'version'    : "1.8.0",
    'publisher'  : "Daniel Imms",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=tyriar.sort-lines",
  },
  {
    'name'       : "SVG Viewer",
    'id'         : "cssho.vscode-svgviewer",
    'description': "SVG Viewer for Visual Studio Code.",
    'version'    : "1.4.7",
    'publisher'  : "cssho",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer",
  },
  {
    'name'       : "vscode-icons",
    'id'         : "robertohuertasm.vscode-icons",
    'description': "Icons for Visual Studio Code",
    'version'    : "8.2.0",
    'publisher'  : "Roberto Huertas",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons",
  },
  {
    'name'       : "yarn",
    'id'         : "gamunu.vscode-yarn",
    'description': "yarn commands for VSCode",
    'version'    : "1.6.0",
    'publisher'  : "Gamunu Balagalla",
    'link'       : "https://marketplace.visualstudio.com/items?itemName=gamunu.vscode-yarn",
  },
]

export const actionText = "A simple hide / show example to demonstrate dispatching an action."

export const devToolsText = "If you check your redux dev tools you will see the SHOW_THE_BIRBS action, along with the store changes caused by the henlo reducer.";

export const githubURL = "https://github.com/joefads/Playground";