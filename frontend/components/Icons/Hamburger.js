// third-party
import styled from "styled-components";

// ===== STYLING =====
const Icon = styled.svg`
  cursor: pointer;
`;
// ===== END OF STYLING =====

export default function Hamburger() {
  return (
    <Icon width="20" height="17" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
      </g>
    </Icon>
  );
}
