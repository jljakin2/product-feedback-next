import styled from "styled-components";

import roadmapColors from "../lib/roadmapColors";

const DotStyles = styled.div`
  background: ${({ statusView, colors }) => `${colors[statusView]}`};
  border-radius: 50%;

  width: 0.5rem;
  height: 0.5rem;
`;

export default function Dot({ statusView }) {
  return <DotStyles colors={roadmapColors} statusView={statusView} />;
}
