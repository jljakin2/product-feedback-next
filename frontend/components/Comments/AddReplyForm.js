import styled from "styled-components";

import FormStyles from "../styles/FormStyles";

const AddReplyFormStyles = styled.div`
  form {
    margin-top: 1rem;
    padding: 0;
  }
`;

export default function AddReplyForm() {
  return (
    <AddReplyFormStyles>
      <FormStyles>
        <div className="form-control">
          <textarea className="input"></textarea>
        </div>
        <button className="btn purple">Post Reply</button>
      </FormStyles>
    </AddReplyFormStyles>
  );
}
