import styled from "styled-components";
import Image from "next/image";

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
  }
`;

export default function CommentHeader({ comment }) {
  return (
    <CommentHeaderStyles>
      <Image
        className="image"
        src={comment.user.image}
        alt={`${comment.user.name}'s profile pic`}
        width={40}
        height={40}
      />
      <div className="contact">
        <p className="body-3">{comment.user.name}</p>
        <p className="body-3 username">{`@${comment.user.username}`}</p>
      </div>
      <button>Reply</button>
    </CommentHeaderStyles>
  );
}
