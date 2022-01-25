// third-party
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";

// components
import FormStyles from "../styles/FormStyles";
import InputError from "../InputError";

// helpers
import useForm from "../../lib/useForm";
import useCreateComment from "../../lib/hooks/mutations/useCreateComment";
import { validateCommentForm } from "../../lib/validateForms";

// ===== STYLING =====
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CharCountStyles = styled.p`
  color: ${({ isOverCharMax }) =>
    isOverCharMax ? "var(--delete)" : "var(--greyBlue)"};
`;

const ButtonStyles = styled.button`
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.5rem;
  }
`;
// ===== END OF STYLING =====

export default function AddCommentForm() {
  // use the helper function to keep track of all form related aspects
  const { inputs, handleChange, resetForm } = useForm({
    comment: "",
  });
  const [errors, setErrors] = useState({}); // will keep track of any errors we get from our validation helper

  // get the suggestion id by checking the current route
  const router = useRouter();
  const { id } = router.query;

  // handlers for checking character maximum limit for comment
  const maxChar = 250; // maximum allowed characters for a comment
  const charLeft = maxChar - inputs.comment.length; // calculate how many characters are left before reaching the max
  const isOverCharMax = charLeft < 0; // checks if charCount is over the max set and is used as style prop to notify user when they are over the max

  // TODO: properly handle loading and error
  const { createComment, loading, error } = useCreateComment(
    id,
    inputs.comment
  ); // needs suggestion id and content. user is defaulted since there isn't an account function

  async function handleCommentForm(e) {
    e.preventDefault();

    // use validation helper to check for errors and update errors state if there are any
    const formErrors = validateCommentForm(inputs);
    setErrors(formErrors);

    // as long as there aren't any errors
    if (Object.keys(formErrors).length === 0) {
      const res = await createComment(); // submit the comment to the backend
      resetForm(); // reset the form once everything is complete
    }
  }

  return (
    <FormStyles onSubmit={handleCommentForm}>
      <h2>Add Comment</h2>
      <fieldset disabled={loading}>
        <div className="form-control">
          <textarea
            className={errors.comment ? "input error" : "input"}
            rows="4"
            placeholder="Type your comment here"
            name="comment"
            value={inputs.comment}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, comment: "" })}></textarea>
          {errors.comment && <InputError>{errors.comment}</InputError>}
        </div>
      </fieldset>

      <Footer>
        <CharCountStyles
          className="body-1"
          isOverCharMax={isOverCharMax}>{`${charLeft} ${
          charLeft === 1 ? "Character" : "Characters"
        } left`}</CharCountStyles>
        <ButtonStyles className="btn purple">
          Add Comment{" "}
          {loading && <TailSpin color="#FFF" height={16} width={16} />}
        </ButtonStyles>
      </Footer>
    </FormStyles>
  );
}
