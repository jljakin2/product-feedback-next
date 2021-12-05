import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import CancelBtn from "./Buttons/CancelBtn";
import FormStyles from "./styles/FormStyles";

export default function CreateNewSuggestion() {
  // TODO: change disabled fieldset attribute to equal loading state
  return (
    <FormStyles>
      <h2>Create New Feedback</h2>
      <fieldset disabled={false}>
        <div className="form-control">
          <label htmlFor="title">Feedback Title</label>
          <small>Add a short, descriptive headline</small>
          <input type="text" className="input" />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <small>Choose a category for your feedback</small>
          <select className="input">
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
          <textarea
            id="details"
            className="input"
            name="details"
            rows="4"
            cols="50"
          />
        </div>
      </fieldset>
      <div>
        <AddFeedbackBtn full />
        <CancelBtn />
      </div>
    </FormStyles>
  );
}
