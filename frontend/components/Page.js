// third-party
import PropTypes from "prop-types";

// components
import GlobalStyles from "../theme/GlobalStyles";
import Toast from "../components/Toast";

// helpers
import { useMobileMenu } from "../lib/hooks/context/mobileMenuState";
import { useToast } from "../lib/hooks/context/showToast";

// The purpose of this component is to add the content that will be used as a template for all of the pages (e.g. nav, footer, etc.). Each individual page's content
// will go in the {children} variable
export default function Page({ children }) {
  const { menuIsOpen } = useMobileMenu();
  const { showToast } = useToast();

  return (
    <>
      <GlobalStyles menuIsOpen={menuIsOpen} />
      {showToast && <Toast />}
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
