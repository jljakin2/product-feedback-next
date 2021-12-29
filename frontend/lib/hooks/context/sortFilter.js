import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function SortFilterStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer

  const [selected, setSelected] = useState("Most Upvotes");
  const [tag, setTag] = useState("all");

  function handleSelected(selection) {
    setSelected(selection);
  }

  function sortSuggestions(data, sort) {
    switch (sort) {
      case "Most Upvotes":
        let suggestions = data
          ?.slice()
          .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
        return suggestions;

      case "Least Upvotes":
        suggestions = data
          ?.slice()
          .sort((a, b) => (a.upvotes > b.upvotes ? 1 : -1));
        return suggestions;

      case "Most Comments":
        suggestions = data
          ?.slice()
          .sort((a, b) => (a.comments.length > b.comments.length ? -1 : 1));
        return suggestions;

      case "Least Comments":
        suggestions = data
          ?.slice()
          .sort((a, b) => (a.comments.length > b.comments.length ? 1 : -1));
        return suggestions;

      default:
        break;
    }
  }

  return (
    <LocalStateProvider
      value={{
        selected,
        setSelected,
        handleSelected,
        sortSuggestions,
        tag,
        setTag,
      }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useSortFilter() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { SortFilterStateProvider, useSortFilter };
