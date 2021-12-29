import { useQuery, gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER($id: ID!) {
    allUsers(where: { id: $id }) {
      id
      name
      username
      image
      upvotes {
        id
      }
    }
  }
`;

function useCurrentUser() {
  const { error, data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { id: "61ba6848fe09b43f32591efe" },
  });

  return {
    error,
    data,
    loading,
  };
}

export default useCurrentUser;
