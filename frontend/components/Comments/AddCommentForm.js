import styled from "styled-components";

import FormStyles from "../styles/FormStyles";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function AddCommentForm() {
  return (
    <FormStyles>
      <h2>Add Comment</h2>
      <fieldset>
        <div className="form-control">
          <textarea
            className="input"
            rows="4"
            placeholder="Type your comment here"></textarea>
        </div>
      </fieldset>

      <Footer>
        {/* TODO: create function that calculates how many characters have been typed into textarea */}
        <p className="body-1">Characters left</p>
        <button className="btn purple">Add Comment</button>
      </Footer>
    </FormStyles>
  );
}
