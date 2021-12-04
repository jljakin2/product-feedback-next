import styled from "styled-components";
import CommentsIcon from "../Icons/CommentsIcon";

const BtnStyles = styled.button`
  background: transparent;

  display: flex;
  align-items: center;

  p {
    margin-left: 0.5rem;
  }
`;

export default function CommentsBtn({ numOfComments }) {
  return (
    <BtnStyles>
      <CommentsIcon />
      <p>{numOfComments}</p>
    </BtnStyles>
  );
}
