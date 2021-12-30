// third-party
import styled from "styled-components";

// helpers
import roadmapColors from "../lib/roadmapColors";

// ===== STYLING =====
const DotStyles = styled.div`
  background: ${({ statusView, colors }) => `${colors[statusView]}`};
  border-radius: 50%;

  width: 0.5rem;
  height: 0.5rem;
`;
// ===== END OF STYLING =====

export default function Dot({ statusView }) {
  return <DotStyles colors={roadmapColors} statusView={statusView} />;
}
