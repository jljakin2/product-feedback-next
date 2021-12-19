import styled from "styled-components";

import Check from "./Icons/Check";

const FilterMenuStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;
  color: var(--greyBlue);
  background: #ffffff;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  left: 5rem;

  z-index: 10000;

  .item {
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.75rem 1.5rem;
    min-width: 15rem;

    &:not(:last-child) {
      border-bottom: 1px solid var(--grey);
    }

    & p:hover {
      color: var(--purple);
    }
  }
`;

export default function FilterMenu() {
  return (
    <FilterMenuStyles>
      <div className="item">
        <p>Most Upvotes</p>
        <Check />
      </div>

      <div className="item">
        <p>Least Upvotes</p>
        <Check />
      </div>

      <div className="item">
        <p>Most Comments</p>
        <Check />
      </div>

      <div className="item">
        <p>Least Upvotes</p>
        <Check />
      </div>
    </FilterMenuStyles>
  );
}
