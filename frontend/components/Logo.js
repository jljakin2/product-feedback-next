// third-party
import styled from "styled-components";

// components
import Close from "./Icons/Close";
import Hamburger from "./Icons/Hamburger";
import backgroundMobile from "../public/suggestions/mobile/background-header.png";

// helpers
import { useMobileMenu } from "../lib/hooks/context/mobileMenuState";

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

  h3 {
    margin-bottom: 0.25rem;
  }
`;
// ===== END OF STYLING =====

export default function Logo() {
  const { menuIsOpen, toggleMobileMenu } = useMobileMenu(); // context state to toggle mobile menu

  return (
    <LogoStyles data-testid="logo">
      <div>
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>
      <div onClick={toggleMobileMenu}>
        {!menuIsOpen ? <Hamburger /> : <Close />}
      </div>
    </LogoStyles>
  );
}
