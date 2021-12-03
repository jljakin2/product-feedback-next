import styled from "styled-components";

import Plus from "./Icons/Plus";

const MainMenuStyles = styled.div`
  background: var(--darkBlue);
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;

  div {
    display: flex;
  }

  p {
    margin-right: 0.5rem;
  }
`;

export default function MainMenu() {
  return (
    <MainMenuStyles>
      <div>
        <p>Sort by:</p>
        <strong>Most Upvotes</strong>
      </div>
      <button className="purple">
        <Plus />
        Add Feedback
      </button>
    </MainMenuStyles>
  );
}
