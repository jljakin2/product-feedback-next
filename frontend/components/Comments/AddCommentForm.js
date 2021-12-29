import React from "react";
import styled from "styled-components";

import FormStyles from "../styles/FormStyles";
import useForm from "../../lib/useForm";
import useCreateComment from "../../lib/hooks/mutations/useCreateComment";
import { useRouter } from "next/router";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CharCountStyles = styled.p`
  color: ${({ isOverCharMax }) =>
    isOverCharMax ? "var(--delete)" : "var(--greyBlue)"};
`;

export default function AddCommentForm() {
  const { inputs, handleChange, resetForm } = useForm({
    comment: "",
  });

  // get the suggestion id by checking the current route
  const router = useRouter();
  const { id } = router.query;

  // handlers for checking character maximum limit for comment
  const maxChar = 250; // maximum allowed characters for a comment
  const charLeft = maxChar - inputs.comment.length; // calculate how many characters are left before reaching the max
  const isOverCharMax = charLeft < 0; // checks if charCount is over the max set and is used as style prop to notify user when they are over the max

  const { createComment, loading, error } = useCreateComment(
    id,
    inputs.comment
  ); // needs suggestion id and content. user is defaulted since there isn't an account function

  async function handleCommentForm(e) {
    e.preventDefault();

    // handle the error when the user tries to submit a comment that is over the max character limit
    if (isOverCharMax) {
      throw new Error("you are over the character limit");
    }

    // submit the comment to the backend
    const res = await createComment().catch(console.log(error));
    console.log("added a comment successfully");

    // reset the form once everything is complete
    resetForm();
  }

  return (
    <FormStyles onSubmit={handleCommentForm}>
      <h2>Add Comment</h2>
      <fieldset disabled={loading}>
        <div className="form-control">
          <textarea
            className="input"
            rows="4"
            placeholder="Type your comment here"
            name="comment"
            value={inputs.comment}
            onChange={handleChange}></textarea>
        </div>
      </fieldset>

      <Footer>
        <CharCountStyles
          className="body-1"
          isOverCharMax={isOverCharMax}>{`${charLeft} ${
          charLeft === 1 ? "Character" : "Characters"
        } left`}</CharCountStyles>
        <button className="btn purple">Add Comment</button>
      </Footer>
    </FormStyles>
  );
}
