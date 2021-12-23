import { useState } from "react";
import styled from "styled-components";

import Check from "./Icons/Check";

import capitalize from "../lib/capitalize";

const DropdownMenuStyles = styled.div`
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

    &:not(:last-child) {
      border-bottom: 1px solid var(--grey);
    }
  }

  .check {
    display: none;
  }

  .check.active {
    display: block;
  }
`;

export default function DropdownMenu({ options, dataName }) {
  function toggleCheck(e) {
    // helper function to toggle check icon when user hovers over dropdown item
    e.target.lastElementChild.classList.toggle("active");
  }

  const renderedItems = options.map((option, index) => {
    return (
      <div
        key={index}
        className="item"
        data-name={dataName}
        data-value={option}
        onMouseEnter={toggleCheck}
        onMouseLeave={toggleCheck}>
        <p>{capitalize(option)}</p>
        <div className="check">
          <Check />
        </div>
      </div>
    );
  });

  return <DropdownMenuStyles>{renderedItems}</DropdownMenuStyles>;
}

DropdownMenu.defaultProps = {
  dataName: "",
};

// DropdownMenu.propType = {
//   options: PropType.array,
// };
