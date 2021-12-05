import styled from "styled-components";

import ArrowLeft from "../Icons/ArrowLeft";

const BtnStyles = styled.button`
  p {
    margin-left: 1rem;
  }
`;

export default function GoBackBtn() {
  return (
    <BtnStyles>
      <ArrowLeft />
      <p className="body-3">Go Back</p>
    </BtnStyles>
  );
}
