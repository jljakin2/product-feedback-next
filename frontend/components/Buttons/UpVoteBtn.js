import styled from "styled-components";

import ArrowUp from "../Icons/ArrowUp";

const BtnStyles = styled.button`
  background: var(--grey);
  border-radius: 0.625rem;
  border: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.8125rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  padding: 0.5rem 1rem;

  &:hover {
    background: var(--greyBlueLight2);
  }

  &.active {
    background: var(--purple);
    color: var(--white);
  }

  p {
    margin-left: 0.5rem;
  }
`;

export default function UpVoteBtn({ votes }) {
  /**
   * !TODO: add logic to add "active" class to button when the user has already clicked on the upvote button.
   * ! will probably just need to keep track of the upvotes in the user config file as an array or something like that
   */
  function handleUpvote(e) {
    e.stopPropagation(); // since button sits inside linked div, we have to make sure when the user clicks this button they don't get taken to the link first
    // TODO: write logic for handling when user clicks to up vote something
    console.log("we in this");
  }

  return (
    <BtnStyles onClick={handleUpvote}>
      <ArrowUp />
      <p>{votes}</p>
    </BtnStyles>
  );
}
