import { useState } from "react";
import styled from "styled-components";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import FilterBtn from "./Buttons/FilterBtn";
import DropdownMenu from "./DropdownMenu";

import { filterOptions } from "../lib/config";

const MainMenuStyles = styled.div`
  background: var(--darkBlue);
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 0.5rem 1.5rem;

  div {
    display: flex;
    align-items: center;
  }

  p {
    margin-right: 0.5rem;
  }

  .dropdown {
    position: absolute;
    top: 4rem;
    left: 5rem;
  }
`;

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // !TODO: update FilterMenu to reflect which state the data is in and filter the data appropriately
  return (
    <MainMenuStyles data-testid="menu">
      <div>
        <p>Sort by:</p>
        <div onClick={() => setIsOpen(!isOpen)}>
          <FilterBtn />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown">
          <DropdownMenu options={filterOptions} />
        </div>
      )}

      <AddFeedbackBtn />
    </MainMenuStyles>
  );
}
