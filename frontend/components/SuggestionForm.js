import PropTypes from "prop-types";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

import useForm from "../lib/useForm";
import FormStyles, { CustomDropdownStyles } from "./styles/FormStyles";
import DropdownMenu from "./DropdownMenu";

import { categoryOptions, statusOptions } from "../lib/config";

export default function SuggestionForm({ edit, product }) {
  // TODO: change disabled fieldset attribute to equal loading state

  const { inputs, handleChange, resetForm } = useForm({
    // if this is being used for the "Edit" page, check to see if there is existing data and set it to the initial state
    title: edit ? product?.title : "",
    category: edit ? product?.category : "",
    status: edit ? product?.status : "",
    details: edit ? product?.description : "",
  });

  function handleFeedbackForm(e) {
    e.preventDefault();
    resetForm();

    console.log("feedback form has been submitted");
  }

  return (
    <FormStyles onSubmit={handleFeedbackForm}>
      <h2>{edit ? `Editing '${product?.title}'` : "Create New Feedback"}</h2>
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
          <label>Category</label>
          <small>Choose a category for your feedback</small>
          <CustomDropdownStyles>
            <div className="dropdown-btn">
              <DropdownMenu options={categoryOptions} dataName="category" />
            </div>
          </CustomDropdownStyles>
        </div>

        {edit && (
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <small>Change feature state</small>
            <CustomDropdownStyles>
              <div className="dropdown-btn">
                <DropdownMenu options={statusOptions} dataName="status" />
              </div>
            </CustomDropdownStyles>
            {/* <div className="custom-select">
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
            </div> */}
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
