import React from "react";
import styled from "styled-components";

import FormStyles from "../styles/FormStyles";
import useForm from "../../lib/useForm";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CharCountStyles = styled.p`
  color: ${({ isOverCharMax }) =>
    isOverCharMax ? "var(--delete)" : "var(--text)"};
`;

export default function AddCommentForm() {
  const { inputs, handleChange, resetForm } = useForm({
    comment: "",
  });

  function handleCommentForm(e) {
    e.preventDefault();
    resetForm();

    console.log("add a comment successfully");
  }

  const maxChar = 250; // maximum allowed characters for a comment
  const charLeft = maxChar - inputs.comment.length; // calculate how many characters are left before reaching the max
  const isOverCharMax = charLeft < 0; // checks if charCount is over the max set and is used as style prop to notify user when they are over the max

  return (
    <FormStyles onSubmit={handleCommentForm}>
      <h2>Add Comment</h2>
      <fieldset>
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
