import { useState } from "react";
import PropTypes from "prop-types";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

import useForm from "../lib/useForm";
import FormStyles, { CustomDropdownStyles } from "./styles/FormStyles";
import DropdownMenu from "./DropdownMenu";

import { categoryOptions, statusOptions } from "../lib/config"; // options for dropdown menus
import ArrowDown from "./Icons/ArrowDown";
import ArrowUp from "./Icons/ArrowUp";
import capitalize from "../lib/capitalize";

export default function SuggestionForm({ edit, product }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);

  function handleCategoryDropdown() {
    setCategoryDropdown(!categoryDropdown); // toggle whether or not category dropdown is open

    if (statusDropdown) {
      // if status dropdown is open, set it to false
      setStatusDropdown(false);
    }
  }

  function handleStatusDropdown() {
    setStatusDropdown(!statusDropdown); // toggle whether or not status dropdown is open

    if (categoryDropdown) {
      // if category dropdown is open, set it to false
      setCategoryDropdown(false);
    }
  }

  function closeDropdown() {
    // close both dropdown menus
    setCategoryDropdown(false);
    setStatusDropdown(false);
  }

  const { inputs, handleChange, handleDropdownChange, resetForm } = useForm({
    // if this is being used for the "Edit" page, check to see if there is existing data and set it to the initial state
    title: edit ? product?.title : "",
    category: edit ? product?.category : "Feature",
    status: edit ? product?.status : "",
    details: edit ? product?.description : "",
  });

  // when user submits the form
  function handleFeedbackForm(e) {
    e.preventDefault();
    resetForm();

    console.log("feedback form has been submitted");
  }

  // TODO: change disabled fieldset attribute to equal loading state
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
            className="input body-2"
            value={inputs.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label>Category</label>
          <small>Choose a category for your feedback</small>
          <CustomDropdownStyles>
            <div
              className="dropdown-btn input body-2"
              onClick={handleCategoryDropdown}>
              {capitalize(inputs.category)}
              {!categoryDropdown ? <ArrowDown /> : <ArrowUp />}
            </div>
            {categoryDropdown && (
              <div className="dropdown-content">
                <DropdownMenu
                  form
                  options={categoryOptions}
                  dataName="category"
                  handleDropdownChange={handleDropdownChange}
                  closeDropdown={closeDropdown}
                  currentVal={inputs.category}
                />
              </div>
            )}
          </CustomDropdownStyles>
        </div>

        {/* only for edit form */}
        {edit && (
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <small>Change feature state</small>
            <CustomDropdownStyles>
              <div
                className="dropdown-btn input body-2"
                onClick={handleStatusDropdown}>
                {capitalize(inputs.status)}
                {!statusDropdown ? <ArrowDown /> : <ArrowUp />}
              </div>
              {statusDropdown && (
                <div className="dropdown-content">
                  <DropdownMenu
                    form
                    options={statusOptions}
                    dataName="status"
                    handleDropdownChange={handleDropdownChange}
                    closeDropdown={closeDropdown}
                    currentVal={inputs.status}
                  />
                </div>
              )}
            </CustomDropdownStyles>
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
            className="input body-2"
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
  product: {},
};

SuggestionForm.propTypes = {
  edit: PropTypes.bool,
  product: PropTypes.obj,
};
