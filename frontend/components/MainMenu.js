// third-party
import { useState } from "react";
import styled from "styled-components";

// components
import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import DropdownMenu from "./DropdownMenu";
import ArrowDown from "./Icons/ArrowDown";

// helpers
import { filterOptions } from "../lib/config";
import { useSortFilter } from "../lib/hooks/context/sortFilter";

// ===== STYLING =====
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

const BtnStyles = styled.button`
  background: transparent;
  color: var(--white);
  font-size: 1rem;

  display: flex;
  align-items: center;
`;
// ===== END OF STYLING =====

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false); // is the dropdown open or not
  const { selected } = useSortFilter(); // state context for which sort options is selected

  function closeDropdown() {
    // closes the dropdown menu when item is clicked
    setIsOpen(false);
  }

  return (
    <MainMenuStyles data-testid="menu">
      <div>
        <p>Sort by:</p>
        <div onClick={() => setIsOpen(!isOpen)}>
          <BtnStyles>
            <p className="body-1">{selected}</p>
            <ArrowDown color="#fff" />
          </BtnStyles>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown">
          <DropdownMenu
            options={filterOptions}
            closeDropdown={closeDropdown}
            currentVal={selected}
          />
        </div>
      )}

      <AddFeedbackBtn />
    </MainMenuStyles>
  );
}
