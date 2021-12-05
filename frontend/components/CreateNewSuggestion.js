import styled from "styled-components";
import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";

const FormStyles = styled.form`
  background: var(--white);
  border-radius: 0.625rem;

  margin-top: 3.5rem;
  padding: 2.75rem 1.5rem 1.5rem 1.5rem;
`;

export default function CreateNewSuggestion() {
  // TODO: change disabled fieldset attribute to equal loading state
  return (
    <FormStyles>
      <h2>Create New Feedback</h2>
      <fieldset disabled={false}>
        <div className="form-control">
          <label htmlFor="title">Feedback Title</label>
          <small>Add a short, descriptive headline</small>
          <input type="text" />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <small>Choose a category for your feedback</small>
          <select>
            <option value="feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="details">Feedback Detail</label>
          <small>
            Include any specific comments on what should be improved, added,
            etc.
          </small>
          <textarea id="details" />
        </div>
      </fieldset>
      <div>
        <AddFeedbackBtn full />
        <CancelBtn />
      </div>
    </FormStyles>
  );
}
