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

  p {
    margin-left: 0.5rem;
  }
`;

export default function UpVoteBtn({ votes }) {
  return (
    <BtnStyles>
      <ArrowUp />
      <p>{votes}</p>
    </BtnStyles>
  );
}
