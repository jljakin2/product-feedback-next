export const validateSuggestionForm = values => {
  /**
   * We first set an empty errors object, then run through our conditional checks to make sure all fields are authorized.
   * If any conditional check is true, the object will be updated for that field value with the corresponding error message.
   * We will use this errors object to check for and show the errors on the form component.
   */

  let errors = {};

  // is the title missing?
  if (!values.title.trim()) {
    errors.title = "Can't be empty";
  }

  // are the details missing?
  if (!values.details.trim()) {
    errors.details = "Can't be empty";
  }

  return errors;
};

export const validateCommentForm = values => {
  let errors = {};

  // is the comment empty?
  if (!values.comment.trim()) {
    errors.comment = "Can't be empty";
    // is the comment over 250 characters?
  } else if (values.comment.length > 250) {
    errors.comment = "Can't be more than 250 characters";
  }

  return errors;
};

export const validateReplyForm = values => {
  let errors = {};

  // is the reply empty?
  if (!values.reply.trim()) {
    errors.reply = "Can't be empty";
    // is the reply over 250 characters?
  } else if (values.reply.length > 250) {
    errors.reply = "Can't be more than 250 characters";
  }

  return errors;
};
