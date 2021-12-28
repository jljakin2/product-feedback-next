import { useState } from "react";
import PropTypes from "prop-types";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

import useForm from "../lib/useForm";
import useCreateSingleSuggestion from "../lib/hooks/useCreateSingleSuggestion";
import FormStyles, { CustomDropdownStyles } from "./styles/FormStyles";
import DropdownMenu from "./DropdownMenu";

import { categoryOptions, statusOptions } from "../lib/config"; // options for dropdown menus
import ArrowDown from "./Icons/ArrowDown";
import ArrowUp from "./Icons/ArrowUp";
import capitalize from "../lib/capitalize";
import useUpdateSuggestion from "../lib/hooks/useUpdateSuggestion";
import { useRouter } from "next/router";

export default function SuggestionForm({ edit, product }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);

  const router = useRouter();

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
    category: edit ? product?.category : "feature",
    status: edit ? product?.status : "",
    details: edit ? product?.description : "",
  });

  const { createSuggestion, loading, error } = useCreateSingleSuggestion(
    inputs.title,
    inputs.category,
    inputs.details
  );

  const { updateSuggestion, updateLoading, updateError } = useUpdateSuggestion(
    product.id,
    inputs.title,
    inputs.category,
    inputs.status,
    inputs.details
  );

  // handle when user submits form
  async function handleFeedbackForm(e) {
    e.preventDefault();

    if (edit) {
      const res = await updateSuggestion(); // if the form is being used for updating a suggestion
    } else {
      const res = await createSuggestion(); // if the form is being used for creating a suggestion
    }
    resetForm();

    router.push("/"); // send the user to the main page to see their changes
  }

  // TODO: handle error properly
  error && console.log(error.message);

  return (
    <FormStyles onSubmit={handleFeedbackForm}>
      <h2>{edit ? `Editing '${product?.title}'` : "Create New Feedback"}</h2>
      <fieldset disabled={loading || updateLoading}>
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
                  dropdownSelection={handleDropdownChange}
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
                    dropdownSelection={handleDropdownChange}
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
