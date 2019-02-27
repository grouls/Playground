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
