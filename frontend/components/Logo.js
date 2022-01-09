// third-party
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

// components
import Close from "./Icons/Close";
import Hamburger from "./Icons/Hamburger";
import backgroundMobile from "../public/suggestions/mobile/background-header.png";
import backgroundTablet from "../public/suggestions/tablet/background-header.png";
import backgroundDesktop from "../public/suggestions/desktop/background-header.png";

// helpers
import { useMobileMenu } from "../lib/hooks/context/mobileMenuState";
import { media } from "../lib/config";

// ==== STYLING =====
const LogoStyles = styled.div`
  background-image: url(${backgroundMobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 1rem 1.5rem;

  z-index: 1000;

  ${media.tablet} {
    background-image: url(${backgroundTablet.src});

    align-items: flex-end;

    padding: 1.5rem;
  }

  ${media.laptop} {
    background-image: url(${backgroundDesktop.src});
  }

  h3 {
    margin-bottom: 0.25rem;
  }
`;
// ===== END OF STYLING =====

export default function Logo() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });

  const { menuIsOpen, toggleMobileMenu } = useMobileMenu(); // context state to toggle mobile menu

  return (
    <LogoStyles data-testid="logo">
      <div>
        <h3>Frontend Mentor</h3>
        <p className="body-2">Feedback Board</p>
      </div>
      {isMobile && (
        <div onClick={toggleMobileMenu}>
          {!menuIsOpen ? <Hamburger /> : <Close />}
        </div>
      )}
    </LogoStyles>
  );
}
