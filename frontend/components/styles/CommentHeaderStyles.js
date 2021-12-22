import styled from "styled-components";

const CommentHeaderStyles = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  .image {
    border-radius: 50%;
  }

  .contact {
    margin-left: 1rem;
  }

  .contact p:first-child {
    margin-bottom: 0.25rem;
  }

  .username {
    color: var(--greyBlue);
    font-weight: 300;
  }

  button {
    color: var(--blue);
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;

    margin-left: auto;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default CommentHeaderStyles;
