import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MobileMenuStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMobileMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <LocalStateProvider value={{ menuIsOpen, toggleMobileMenu }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useMobileMenu() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { MobileMenuStateProvider, useMobileMenu };
