import styled from "styled-components";
import Link from "next/link";

import CommentsIcon from "../Icons/CommentsIcon";

const BtnStyles = styled.button`
  background: transparent;

  display: flex;
  align-items: center;

  p {
    opacity: ${({ numOfComments }) => (numOfComments === 0 ? "0.5" : "1")};
    margin-left: 0.5rem;
  }
`;

export default function CommentsBtn({ numOfComments, id }) {
  return (
    <Link href={`/suggestion/${id}`} passHref>
      <BtnStyles numOfComments={numOfComments}>
        <CommentsIcon />
        <p>{numOfComments}</p>
      </BtnStyles>
    </Link>
  );
}
