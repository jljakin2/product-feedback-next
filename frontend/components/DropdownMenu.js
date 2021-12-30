// third-party
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import Check from "./Icons/Check";

// helpers
import capitalize from "../lib/capitalize";
import { useSortFilter } from "../lib/hooks/context/sortFilter";

// ===== STYLING =====
const DropdownMenuStyles = styled.ul`
  background: var(--white);
  border-radius: 0.625rem;
  color: var(--greyBlue);
  background: #ffffff;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);

  display: flex;
  flex-direction: column;

  z-index: 10000;

  .item {
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.75rem 1.5rem;
    min-width: 15rem;

    &:hover p {
      color: var(--purple);
    }

    & .check {
      display: none;
    }

    &:hover .check {
      display: block;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--grey);
    }
  }

  .check.active {
    display: block;
  }

  .item.active {
    color: var(--purple);
  }
`;
// ===== END OF STYLING =====

export default function DropdownMenu({
  form,
  options,
  dataName,
  dropdownSelection,
  closeDropdown,
  currentVal,
}) {
  const { selected, setSelected } = useSortFilter(); // context state for dropdown selection and setting that selection

  function handleSelection(e) {
    if (form) {
      dropdownSelection(e); // reference to helper function from useForm that takes in the event and grabs the name and value from the [data-] attributes
    } else {
      setSelected(e.target.getAttribute("data-name")); // uses the context api to set the selected to the [data-name] attribute. this is used only for non-form dropdowns
    }

    closeDropdown();
  }

  // MAP DROPDOWN ITEMS FOR FORMS
  const renderedFormItems = options.map((option, index) => {
    return (
      <li
        key={index}
        className={option === (currentVal || selected) ? "item active" : "item"}
        data-name={dataName}
        data-value={option}
        onClick={handleSelection}>
        <p>{capitalize(option)}</p>
        <div
          className={
            option === (currentVal || selected) ? "check active" : "check"
          }>
          <Check />
        </div>
      </li>
    );
  });

  // MAP DROPDOWN ITEMS FOR NON-FORMS
  const renderedMenuItems = options.map((option, index) => {
    return (
      <li
        key={index}
        className={option === (currentVal || selected) ? "item active" : "item"}
        data-name={option}
        onClick={handleSelection}>
        <p data-name={option}>{option}</p>
        <div
          className={
            option === (currentVal || selected) ? "check active" : "check"
          }>
          <Check />
        </div>
      </li>
    );
  });

  return (
    <DropdownMenuStyles>
      {form ? renderedFormItems : renderedMenuItems}
    </DropdownMenuStyles>
  );
}

DropdownMenu.defaultProps = {
  form: false,
  dataName: "",
  currentVal: "",
  options: [],
};

DropdownMenu.propTypes = {
  form: PropTypes.bool, // is the dropdown being used for a form? if it is, we will call the handleDropdownChange from the useForm hook
  dataName: PropTypes.string, // name being used for data attribute so we can grab item based on e.target.getAttribute("data-name"). e.g. "category", "status", etc.
  options: PropTypes.array, // list of options for the dropdown component. comes from the config file
  handleDropdownChange: PropTypes.func, // function from useForm hook that updates the inputs state based on the dropdown selection
  closeDropdown: PropTypes.func, // updates local state for dropdown so when item is selected, the dropdown is closed
  currentVal: PropTypes.string, // state for what is currently selected
};
