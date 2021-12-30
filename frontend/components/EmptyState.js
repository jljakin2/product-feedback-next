// third-party
import styled from "styled-components";

// components
import EmptyStateIcon from "./Icons/EmptyStateIcon";
import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";

// ===== STYLING =====
const EmptyStateStyles = styled.div`
  background: var(--white);
  text-align: center;
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 75vh;
  padding: 0 1.5rem;
  margin: 1rem 0;

  h2 {
    margin: 2rem 0 1rem 0;
  }

  p {
    opacity: 0.75;
    margin-bottom: 2rem;
  }
`;
// ===== END OF STYLING =====

export default function EmptyState() {
  return (
    <EmptyStateStyles>
      <EmptyStateIcon />
      <h2>There is no feedback yet.</h2>
      <p className="body-2">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app
      </p>
      <AddFeedbackBtn />
    </EmptyStateStyles>
  );
}
