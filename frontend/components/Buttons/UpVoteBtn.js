import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ArrowUp from "../Icons/ArrowUp";
import useUpdateUpvote from "../../lib/hooks/mutations/useUpdateUpvote";

import useCurrentUser from "../../lib/hooks/queries/useCurrentUser";

// import { useUser } from "../../lib/hooks/context/currentUser";

const BtnStyles = styled.button`
  background: ${({ isVoted }) => (isVoted ? "var(--blue)" : "var(--grey)")};
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
    background: ${({ isVoted }) =>
      isVoted ? "var(--blue)" : "var(--greyBlueLight2)"};
  }

  p {
    color: ${({ isVoted }) => (isVoted ? "var(--white)" : "var(--text)")};

    margin-left: 0.5rem;
  }
`;

export default function UpVoteBtn({ numOfVotes, id }) {
  // const { user, addUpvote, checkIfVoted } = useUser();
  // const userUpvotes = JSON.parse(localStorage.getItem("user")).upvotes;

  const { data, userLoading, userError } = useCurrentUser();
  const userId = data?.allUsers[0].id;
  const rawUpvotes = data?.allUsers[0].upvotes;
  const upvotes = rawUpvotes?.map(vote => vote.id);

  const [isVoted, setIsVoted] = useState(upvotes?.includes(id));
  useEffect(() => {
    setIsVoted(upvotes?.includes(id));
  }, [upvotes]);

  // handle creation of new upvote
  const newUpvoteAmount = numOfVotes + 1;
  const { updateUpvote, loading, error } = useUpdateUpvote(
    id,
    newUpvoteAmount,
    userId
  );

  function handleUpvote(e) {
    e.stopPropagation(); // since button sits inside linked div, we have to make sure when the user clicks this button they don't get taken to the link first

    // as long as the user hasn't already upvoted the suggestion
    if (!isVoted) {
      updateUpvote(); // call mutation that adds 1 to the upvote count
      setIsVoted(true);
    }
  }

  return (
    <BtnStyles onClick={handleUpvote} isVoted={isVoted} disabled={loading}>
      <ArrowUp light={isVoted} />
      <p>{numOfVotes}</p>
    </BtnStyles>
  );
}

UpVoteBtn.propTypes = {
  numOfVotes: PropTypes.number, // use the number of upvotes in order to update the upvote amount in the mutation
  id: PropTypes.string, // need the suggestion id to call mutation on correct suggestion
};
