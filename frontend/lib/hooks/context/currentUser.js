import { useQuery, gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query {
    allUsers(where: { id: "61ba6848fe09b43f32591efe" }) {
      id
      upvotes
    }
  }
`;

function useCurrentUser() {
  const { error, data, loading } = useQuery(GET_CURRENT_USER);

  return {
    error,
    data,
    loading,
  };
}

export default useCurrentUser;

import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CurrentUserStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer

  const [user, setUser] = useState({
    id: "61ba6848fe09b43f32591efe",
    image:
      "res.cloudinary.com/dpp64ouz9/image/upload/v1639702185/productFeedback/image-zena_t0xqs8.jpg",
    name: "Zena Kelley",
    username: "velvetround",
    upvotes: [
      "61ba86dafe09b43f325920a3",
      "61ba876ffe09b43f32592174",
      "61ba9421fe09b43f3259250d",
    ], // suggestion ids to represent suggestions the current user has already upvoted
  });

  function addUpvote(id) {
    setUser({ ...user, upvotes: user.upvotes.push(id) });
  }

  function checkIfVoted(id) {
    return user.upvotes.includes(id);
  }

  return (
    <LocalStateProvider value={{ user, addUpvote, checkIfVoted }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useUser() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { CurrentUserStateProvider, useUser };
