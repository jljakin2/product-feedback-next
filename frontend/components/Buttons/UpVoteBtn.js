// third-party
import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import ArrowUp from "../Icons/ArrowUp";

// helpers
import useUpdateUpvote from "../../lib/hooks/mutations/useUpdateUpvote";
import useCurrentUser from "../../lib/hooks/queries/useCurrentUser";
import { media } from "../../lib/config";

// ===== STYLING =====
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

  ${media.tablet} {
    flex-direction: ${({ roadmap }) => (roadmap ? "row" : "column")};
    justify-content: ${({ roadmap }) => (roadmap ? "space-between" : "center")};

    padding: ${({ roadmap }) => (roadmap ? "0.5rem 1rem" : "0.75rem 0.5rem")};
  }

  &:hover {
    background: ${({ isVoted }) =>
      isVoted ? "var(--blue)" : "var(--greyBlueLight2)"};
  }

  p {
    color: ${({ isVoted }) => (isVoted ? "var(--white)" : "var(--text)")};

    margin-left: 0.5rem;

    ${media.tablet} {
      margin: ${({ roadmap }) => (roadmap ? "0 0 0 0.5rem" : "0.5rem 0 0 0")};
    }
  }
`;
// ===== END OF STYLING =====

export default function UpVoteBtn({ numOfVotes, id, roadmap }) {
  const { data, userLoading, userError } = useCurrentUser(); // get the current user so we can update their upvotes
  const userId = data?.allUsers[0].id; // look complicated but just gets the id from the returned data object. it is a very nested piece of data
  const rawUpvotes = data?.allUsers[0].upvotes; // same silly complicated mess but just gets the upvotes
  const upvotes = rawUpvotes?.map(vote => vote.id); // upvotes had some extra garbage attached to them so this just gets the final integer

  const [isVoted, setIsVoted] = useState(upvotes?.includes(id)); // has the button been clicked by the current user already? initial state checks if the suggestion id is in the user's list of upvotes

  useEffect(() => {
    // whenever the upvotes variable changes, let's rerun the isVoted state to update whether or not the button appears as voted or not
    setIsVoted(upvotes?.includes(id));
  }, [upvotes]);

  // handle creation of new upvote
  const newUpvoteAmount = numOfVotes + 1;
  // TODO: properly handle loading and error
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
      setIsVoted(true); // we know for sure the user has upvoted this button so we set isVoted to true
    }
  }

  return (
    <BtnStyles
      onClick={handleUpvote}
      isVoted={isVoted}
      roadmap={roadmap}
      disabled={loading}>
      <ArrowUp light={isVoted} />
      <p>{numOfVotes}</p>
    </BtnStyles>
  );
}

UpVoteBtn.defaultProps = {
  roadmap: false,
};

UpVoteBtn.propTypes = {
  numOfVotes: PropTypes.number, // use the number of upvotes in order to update the upvote amount in the mutation
  id: PropTypes.string, // need the suggestion id to call mutation on correct suggestion
  roadmap: PropTypes.bool, // is the upvote button being used on the roadmap page
};
