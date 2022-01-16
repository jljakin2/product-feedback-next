import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ToastStateProvider({ children }) {
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    type: "",
    message: "",
  });

  function handleToastContent(type, message) {
    setToastContent({ ...toastContent, type, message });
    setShowToast(true);
  }

  function closeToast() {
    setShowToast(false);
  }

  return (
    <LocalStateProvider
      value={{ showToast, toastContent, handleToastContent, closeToast }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useToast() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { ToastStateProvider, useToast };
