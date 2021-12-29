const validateForm = values => {
  /**
   * We first set an empty errors object, then run through our conditional checks to make sure all fields are authorized.
   * If any conditional check is true, the object will be updated for that field value with the corresponding error message.
   * We will use this errors object to check for and show the errors on the form component.
   */

  let errors = {};

  // ===== missing inputs =====
  // is the title missing?
  if (!values.title.trim()) {
    errors.title = "Can't be empty";
  }

  // are the details missing?
  if (!values.details.trim()) {
    errors.details = "Can't be empty";
  }
  // ==========

  return errors;
};

export default validateForm;
