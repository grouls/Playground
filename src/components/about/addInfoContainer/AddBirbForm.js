import React                from "react";
import { Field, reduxForm } from "redux-form";
import { reduxFormUrl }     from "../config";

let AddBirbForm = props => {
  const { handleSubmit } = props;
  return (
    <div className="addInfoContainerGrid">
      <p>
        This is an example of
        <a className="fetchURL" href={reduxFormUrl} target="_blank" rel="noopener noreferrer">
          {" "}
          Redux Form{" "}
        </a>{" "}
        in its simplest design, the form has no validation and could be improved a lot. Visit the tasks & resources page to learn more about improving this redux form.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="addInfoGrid">
          <label htmlFor="username">User</label>
          <Field className="filterInput" name="username" component="input" type="text" />
        </div>
        <div className="addInfoGrid">
          <label htmlFor="name">Name</label>
          <Field className="filterInput" name="name" component="input" type="text" />
        </div>
        <div className="addInfoGrid">
          <label htmlFor="phone">phone</label>
          <Field className="filterInput" name="phone" component="input" type="text" />
        </div>
        <div className="addInfoGrid">
          <button className="addInfoBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

AddBirbForm = reduxForm({
  // a unique name for the form
  form: "addBirbForm"
})(AddBirbForm);

export default AddBirbForm;

//To make your form component communicate with the store, we need to wrap it with reduxForm().
//It will provide the props about the form state and function to handle the submit process.

/*NOTE: If the ()() syntax seems confusing, you can always break it down into two steps:
  // create new, "configured" function
  createReduxForm = reduxForm({ form: 'contact' })

  // evaluate it for ContactForm component
  ContactForm = createReduxForm( ContactForm )
*/
