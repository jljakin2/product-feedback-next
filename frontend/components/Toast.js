import { useEffect } from "react";
import styled from "styled-components";
import { useToast } from "../lib/hooks/context/showToast";
import { media } from "../lib/config";

const ToastStyles = styled.div`
  background: var(--white);
  box-shadow: var(--bs);

  display: flex;
  align-items: center;
  position: fixed;
  top: 0;

  min-width: 100vw;
  height: 4rem;
  padding: 0.5rem;

  z-index: 100000;

  ${media.tablet} {
    border-radius: 0.625rem;

    top: 5vh;
    right: 3vw;

    min-width: 15rem;
  }

  .border {
    background: var(--success);
    border-radius: 0.625rem;

    width: 0.25rem;
    height: 100%;
    margin-right: 0.75rem;
  }

  .body-2 {
    opacity: 0.75;

    margin-top: 0.25rem;
  }

  .close {
    cursor: pointer;
    opacity: 0.5;

    align-self: flex-start;

    margin-left: auto;

    ${media.tablet} {
      margin-left: 0.5rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default function Toast() {
  const header = {
    success: "Hooray!",
    error: "Uh oh!",
  };

  const { showToast, toastContent, closeToast } = useToast();

  useEffect(() => {
    setTimeout(closeToast, 4000);
  }, []);

  return (
    <ToastStyles showToast={showToast}>
      {/* <div className="border" />
      <div>
        <h4>{header[toastContent.type]}</h4>
        <p className="body-2">{toastContent.message}</p>
      </div>
      <p className="close" onClick={closeToast}>
        &times;
      </p> */}
      <div className="border" />
      <div>
        <h4>Hooray!</h4>
        <p className="body-2">Your request has been successfully created.</p>
      </div>
      <p className="close" onClick={closeToast}>
        &times;
      </p>
    </ToastStyles>
  );
}
