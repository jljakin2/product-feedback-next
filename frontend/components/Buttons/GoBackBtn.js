import styled from "styled-components";
import { useRouter } from "next/router";

import ArrowLeft from "../Icons/ArrowLeft";

const BtnStyles = styled.button`
  p {
    margin-left: 1rem;
  }
`;

export default function GoBackBtn() {
  const router = useRouter();

  return (
    <BtnStyles onClick={() => router.back()}>
      <ArrowLeft />
      <p className="body-3">Go Back</p>
    </BtnStyles>
  );
}
