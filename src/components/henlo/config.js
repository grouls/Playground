import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import cssGrid from "../../assets/images/cssgrid.png";
import reactRouter from "../../assets/images/reactRouter.png";

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
    type: "cssGrid",
    text: "CSS Grid",
    img: cssGrid,
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
  }
];

export const code = {
  part_one: `
  const Henlo = ({ showTheBirbs, showHenloCode, displayBirbs, showCode }) => {
    const displayHelper   = () => displayBirbs(!showTheBirbs);
    `,
  part_two: `
  export const displayBirbs = value => ({
    type: actionTypes.SHOW_THE_BIRBS,
    value
  });
  `,
  part_three: `
  const actionHandlers = {
    [actionTypes.SHOW_THE_BIRBS]: (state, { value }) => ({ showBirb: value }),
    [actionTypes.SHOW_HENLO_CODE]: (state, { value }) => ({ showCode: value })
  };`
};
