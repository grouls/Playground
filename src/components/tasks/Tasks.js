import React from "react";

const styles = {
  tasks: {
    "margin-left": "20px",
    "margin-right": "20px",
    "margin-top": "30px"
  },
  hint: {
    color: "goldenrod",
    display: "block",
    "margin-left": "40px",
    "margin-top": "15px",
    "font-size" : "13.5px",
    opacity : "0.8"
  },
  bullet: {
    "padding-right": "10px"
  }
};

const Tasks = () => (
  <div className="wrapper">
    <div className="contentBox contentBoxWide">
      <h2 className="header">Birb Tasks</h2>
      <div style={styles.tasks}>
        <p>
          <span style={styles.bullet} className="tooltip" role="img" aria-label="birb">
            🐦
          </span>
          Try create a header & footer component, then add it at the App.js level along with the routes so we can render the header and footer across all pages.
          <span style={styles.hint}>
            Hint: The header component contains a bunch of nav items... this could be cleaner too!
          </span>
        </p>
        <p>
          <span style={styles.bullet} role="img" aria-label="birb">
            🐦
          </span>
          Have a look at the Henlo component, break down JSX into reusable components.
          <span style={styles.hint}>
            Hint: Config objects can be handy for mapping over to return components.
          </span>
        </p>
        <p>
          <span style={styles.bullet} role="img" aria-label="birb">
            🐦
          </span>
          Try clean up the ternary control flow, if we are just asserting against true / false to render a component we don't necessarily need a ternary.
          <span style={styles.hint}>
            Hint: Since we are dealing with a boolean outcome, we can use && logical operator.{" "}
          </span>
        </p>
        <p>
          <span style={styles.bullet} role="img" aria-label="birb">
            🐦
          </span>
          Have a look at the 'displayHelper' function in the Henlo component.
          <span style={styles.hint}>
            Hint: Remove const assignment and curley braces / use destructuring for Henlo component props.
          </span>
        </p>
        <p>
          <span style={styles.bullet} role="img" aria-label="birb">
            🐦
          </span>
          Have a look at the About component, break down JSX into reusable components - In particular look at the map fn.
          <span style={styles.hint}>
            Hint: When using map, we should add a unique key to the component to help React render efficiently.
          </span>
        </p>
        <p>
          <span style={styles.bullet} role="img" aria-label="birb">
            🐦
          </span>
          Have a look at this component, break down JSX into reusable components.
          <span style={styles.hint}> Hint: This is perfect to try work with some redux - why not turn this into a checkable checklist?</span>
        </p>
      </div>
    </div>
  </div>
);

export default Tasks;
