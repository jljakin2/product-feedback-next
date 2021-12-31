// third-party
import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

// components
import AddFeedbackBtn from "./Buttons/AddFeedbackBtn";
import DropdownMenu from "./DropdownMenu";
import ArrowDown from "./Icons/ArrowDown";
import SuggestionsIcon from "./Icons/SuggestionsIcon";

// helpers
import { filterOptions } from "../lib/config";
import { useSortFilter } from "../lib/hooks/context/sortFilter";
import { media } from "../lib/config";

// ===== STYLING =====
const MainMenuStyles = styled.div`
  background: var(--darkBlue);
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 1rem 1.5rem;

  ${media.tablet} {
    border-radius: 0.625rem;

    justify-content: flex-start;

    & svg {
      margin-right: 1rem;
    }

    & h3 {
      margin-right: 2.25rem;
    }

    & button:not(:first-child) {
      margin-left: auto;
    }
  }

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

    ${media.tablet} {
      left: 15rem;
    }
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

export default function MainMenu({ numOfSuggestions }) {
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });

  const [isOpen, setIsOpen] = useState(false); // is the dropdown open or not
  const { selected } = useSortFilter(); // state context for which sort options is selected

  function closeDropdown() {
    // closes the dropdown menu when item is clicked
    setIsOpen(false);
  }

  return (
    <MainMenuStyles data-testid="menu">
      {!isMobile && <SuggestionsIcon />}
      {!isMobile && (
        <h3>{`${numOfSuggestions ? numOfSuggestions : 0} ${
          numOfSuggestions === 1 ? "Suggestion" : "Suggestions"
        }`}</h3>
      )}
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
