import styled from "styled-components";
import Hamburger from "./Icons/Hamburger";
import Close from "./Icons/Close";

import backgroundMobile from "../public/suggestions/mobile/background-header.png";
import { useMobileMenu } from "../lib/mobileMenuState";

const LogoStyles = styled.div`
  background-image: url(${backgroundMobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;

  h3 {
    margin-bottom: 0.25rem;
  }
`;

export default function Logo() {
  const { menuIsOpen, toggleMobileMenu } = useMobileMenu();

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
