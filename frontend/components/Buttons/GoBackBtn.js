import styled from "styled-components";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import ArrowLeft from "../Icons/ArrowLeft";

const BtnStyles = styled.button`
  p {
    color: ${({ light }) => (light ? "var(--white)" : "var(--text)")};
    margin-left: 1rem;
  }
`;

export default function GoBackBtn({ light }) {
  const router = useRouter();

  return (
    <BtnStyles onClick={() => router.back()} light={light}>
      <ArrowLeft light={light} />
      <p className="body-3">Go Back</p>
    </BtnStyles>
  );
}

GoBackBtn.defaultProps = {
  light: false,
};

GoBackBtn.propTypes = {
  light: PropTypes.bool,
};
