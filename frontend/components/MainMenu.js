import { useState } from "react";
import styled from "styled-components";

import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import DropdownMenu from "./DropdownMenu";

import { filterOptions } from "../lib/config";
import ArrowDown from "./Icons/ArrowDown";

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

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Most Upvotes");

  function closeDropdown() {
    // closes the dropdown menu when item is clicked
    setIsOpen(false);
  }
  // ! will probably have to remove this function and add it to "index" page then pass through to dropdown via this component
  function handleSelected(selection) {
    setSelected(selection);
  }

  // !TODO: update FilterMenu to reflect which state the data is in and filter the data appropriately
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
            handleSelected={handleSelected}
            currentVal={selected}
          />
        </div>
      )}

      <AddFeedbackBtn />
    </MainMenuStyles>
  );
}
