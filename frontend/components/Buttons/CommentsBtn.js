// third-party
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

// components
import CommentsIcon from "../Icons/CommentsIcon";
import Comments from "../Icons/CommentsIcon";

// ===== STYLING =====
const BtnStyles = styled.button`
  background: transparent;

  display: flex;
  align-items: center;

  p {
    opacity: ${({ numOfComments }) => (numOfComments === 0 ? "0.5" : "1")};
    margin-left: 0.5rem;
  }
`;
// ===== END OF STYLING =====

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

Comments.propTypes = {
  numOfComments: PropTypes.number,
  id: PropTypes.string,
};
