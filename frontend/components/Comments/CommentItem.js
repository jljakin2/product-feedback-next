import styled from "styled-components";
import Image from "next/image";

const CommentItemStyles = styled.div`
  border-bottom: 1px solid var(--grey);

  width: 100%;
  padding: 1.5rem 0;
`;

export default function CommentItem({ comment }) {
  // TODO: change the Image component to be more dynamic by using cloudinary links when backend is set up
  return (
    <CommentItemStyles>
      <div className="header">
        <Image
          src={comment.user.image}
          alt={`${comment.user.name}'s profile pic`}
          width={40}
          height={40}
        />
        <div>
          <p className="body-3">{comment.user.name}</p>
          <p className="body-3">{`@${comment.user.username}`}</p>
        </div>
        <p className="body-2">Reply</p>
      </div>
      <p className="body-2">{comment.content}</p>
    </CommentItemStyles>
  );
}
