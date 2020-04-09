import styled from "styled-components";
import { Variable } from "./VariableCSS";

const width = eval(
  `${Variable.width} * ${Variable.column} + ${Variable.column}*2* ${Variable.padMargin}`
);

const height = eval(
  `${Variable.height} * ${Variable.row} + ${Variable.row}*2* ${Variable.padMargin}`
);

export const DrumMachine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border: 0.25em ridge #ff4500;
  background-image: linear-gradient(180deg, #00ffff, #ee82ee);
  text-align: center;
  flex-flow: column wrap;

  @media only screen and (min-width: 720px) {
    flex-flow: row wrap;
    border-width: 0.5em;
  }
`;

export const Controller = styled.div`
  width: ${width}px;
  height: ${height}px;
  position: relative;
  box-sizing: border-box;

  @media (min-width: 720px) {
    width: calc(${width}px*1.5);
    height: calc(${height}px*1.5);
  }
`;
