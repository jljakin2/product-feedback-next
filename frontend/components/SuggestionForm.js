// third-party
import { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

// components
import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";
import DeleteBtn from "./Buttons/DeleteBtn";
import DropdownMenu from "./DropdownMenu";
import InputError from "./InputError";
import ArrowDown from "./Icons/ArrowDown";
import ArrowUp from "./Icons/ArrowUp";
import FormStyles, { CustomDropdownStyles } from "./styles/FormStyles";
import EditFeedbackIcon from "./Icons/EditFeedbackIcon";
import FormPlus from "./Icons/FormPlus";

// helpers
import useForm from "../lib/useForm";
import useCreateSingleSuggestion from "../lib/hooks/mutations/useCreateSingleSuggestion";
import { categoryOptions, statusOptions } from "../lib/config"; // options for dropdown menus
import capitalize from "../lib/capitalize";
import useUpdateSuggestion from "../lib/hooks/mutations/useUpdateSuggestion";
import useDeleteSuggestion from "../lib/hooks/mutations/useDeleteSuggestion";
import { validateSuggestionForm } from "../lib/validateForms";
import { media } from "../lib/config";

export default function SuggestionForm({ edit, product }) {
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });

  const [categoryDropdown, setCategoryDropdown] = useState(false); // keeps track of what is shown for the custom category dropdown
  const [statusDropdown, setStatusDropdown] = useState(false); // keeps track of what is shown for the custom status dropdown
  const [errors, setErrors] = useState({}); // keeps track of any form errors

  const router = useRouter(); // create router variable to be used to push the user to different pages after they submit the form

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

  // TODO: properly handle loading and error
  // call to hook which calls api to create the suggestion
  const { createSuggestion, loading, error } = useCreateSingleSuggestion(
    inputs.title,
    inputs.category,
    inputs.details
  );

  // TODO: properly handle loading and error
  // call to hook which calls api to update the suggestion
  const { updateSuggestion, updateLoading, updateError } = useUpdateSuggestion(
    product.id,
    inputs.title,
    inputs.category,
    inputs.status,
    inputs.details
  );

  // TODO: properly handle loading and error
  // call to hook which calls api to delete the suggestion
  const { deleteSuggestion, deleteLoading, deleteError } = useDeleteSuggestion(
    product.id
  );

  // handle when user submits form
  async function handleFeedbackForm(e) {
    e.preventDefault();

    // check for errors and update the errors state if there are any
    const formErrors = validateSuggestionForm(inputs);
    setErrors(formErrors);

    // as long as there aren't any errors
    if (Object.keys(formErrors).length === 0) {
      if (edit) {
        const res = await updateSuggestion(); // if the form is being used for updating a suggestion
        resetForm();
        router.push("/"); // send the user to the main page to see their changes
      } else {
        const res = await createSuggestion(); // if the form is being used for creating a suggestion
        resetForm();
        router.push("/"); // send the user to the main page to see their addition
      }
    }
  }

  // TODO: handle error properly
  error && console.log(error.message);

  return (
    <FormStyles onSubmit={handleFeedbackForm}>
      {!isMobile && (!edit ? <FormPlus /> : <EditFeedbackIcon />)}
      <h2>{edit ? `Editing '${product?.title}'` : "Create New Feedback"}</h2>
      <fieldset disabled={loading || updateLoading}>
        <div className="form-control">
          <label htmlFor="title">Feedback Title</label>
          <small>Add a short, descriptive headline</small>
          <input
            type="text"
            id="title"
            name="title"
            className={errors.title ? "input body-2 error" : "input body-2"}
            value={inputs.title}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, title: "" })}
          />
          {errors.title && <InputError>{errors.title}</InputError>}
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
                  options={categoryOptions.filter(option => option !== "all")} // use all of the category options except the "all" category
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
            className={errors.details ? "input body-2 error" : "input body-2"}
            name="details"
            rows="6"
            cols="50"
            value={inputs.details}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, details: "" })}
          />
          {errors.details && <InputError>{errors.details}</InputError>}
        </div>
      </fieldset>
      <div className="button-container">
        <AddFeedbackBtn full={isMobile} submit />
        <CancelBtn full={isMobile} />
        {edit && (
          <div
            onClick={() => {
              deleteSuggestion();
              router.push("/");
            }}
            id="delete">
            <DeleteBtn />
          </div>
        )}
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
