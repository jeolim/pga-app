import styled from "styled-components";
import PGALogoPath from "../../../../src/images/pga_logo.png";

const PGACenterLogo = styled.img.attrs({ src: PGALogoPath })``;
const OverlayContent = styled.section.attrs({
  className: "container"
})`
  &.container {
    background: white;
    height: -webkit-fill-available;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: contain;
      opacity: 0.4;
      height: 350px;
      width: 350px;
    }
  }
`;

const StyledTable = styled.table.attrs({ className: "table-content" })`
  &.table-content {
    width: 100%;
    transition: opacity 0.5s;

    p {
      color: black;
      font-family: "arial";
      text-align: center;
    }
  }
`;

const PositionWrapper = styled.div.attrs({ className: "position-wrapper" })`
  position: absolute;
  top: 2rem;
  width: 85%;
`;

export { PGACenterLogo, OverlayContent, StyledTable, PositionWrapper };
