import styled from "styled-components";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import FilterBtn from "./Buttons/FilterBtn";

const MainMenuStyles = styled.div`
  background: var(--darkBlue);
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1.5rem;

  div {
    display: flex;
    align-items: center;
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
        <FilterBtn />
      </div>
      <AddFeedbackBtn />
    </MainMenuStyles>
  );
}
