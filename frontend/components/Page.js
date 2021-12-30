// third-party
import PropTypes from "prop-types";

// components
import GlobalStyles from "../theme/GlobalStyles";

// helpers
import { useMobileMenu } from "../lib/hooks/context/mobileMenuState";

// The purpose of this component is to add the content that will be used as a template for all of the pages (e.g. nav, footer, etc.). Each individual page's content
// will go in the {children} variable
export default function Page({ children }) {
  const { menuIsOpen } = useMobileMenu();

  return (
    <>
      <GlobalStyles menuIsOpen={menuIsOpen} />
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
