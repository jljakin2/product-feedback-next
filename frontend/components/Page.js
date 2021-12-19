import PropTypes from "prop-types";
import { useMobileMenu } from "../lib/mobileMenuState";
import GlobalStyles from "../theme/GlobalStyles";

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
