import PropTypes from "prop-types";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

import useForm from "../lib/useForm";
import FormStyles from "./styles/FormStyles";

export default function SuggestionForm({ edit }) {
  // TODO: change disabled fieldset attribute to equal loading state

  const { inputs, handleChange, resetForm } = useForm({
    title: "",
    category: "",
    status: "",
    details: "",
  });

  function handleFeedbackForm(e) {
    e.preventDefault();
    resetForm();

    console.log("feedback form has been submitted");
  }

  return (
    <FormStyles onSubmit={handleFeedbackForm}>
      <h2>Create New Feedback</h2>
      <fieldset disabled={false}>
        <div className="form-control">
          <label htmlFor="title">Feedback Title</label>
          <small>Add a short, descriptive headline</small>
          <input
            type="text"
            id="title"
            name="title"
            className="input"
            value={inputs.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <small>Choose a category for your feedback</small>
          <select
            className="input"
            id="category"
            name="category"
            value={inputs.category}
            onChange={handleChange}>
            <option value="feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
        </div>

        {edit && (
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <small>Change feature state</small>
            <select
              className="input"
              id="status"
              name="status"
              value={inputs.status}
              onChange={handleChange}>
              <option value="planned">Planned</option>
              <option value="in-progress">In-Progress</option>
              <option value="live">Live</option>
            </select>
          </div>
        )}

        <div className="form-control">
          <label htmlFor="details">Feedback Detail</label>
          <small>
            Include any specific comments on what should be improved, added,
            etc.
          </small>
          <textarea
            id="details"
            className="input"
            name="details"
            rows="6"
            cols="50"
            value={inputs.details}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <div className="button-container">
        <AddFeedbackBtn full submit />
        <CancelBtn />
        {edit && <DeleteBtn />}
      </div>
    </FormStyles>
  );
}

SuggestionForm.defaultProps = {
  edit: false,
};

SuggestionForm.propTypes = {
  edit: PropTypes.bool,
};
