import styled from "styled-components";
import { Variable } from "../Others/VariableCSS";

const width = eval(
  `${Variable.width} * ${Variable.column} + ${Variable.column}*2* ${Variable.padMargin}`
);

const height = eval(
  `${Variable.height} * ${Variable.row} + ${Variable.row}*2* ${Variable.padMargin}`
);

export const PadBankStyle = styled.div`
  width: ${width}px;
  height: ${height}px;
  margin: 0.5em auto;
  position: relative;

  @media (min-width: 720px) {
    width: calc(${width}px*1.5);
    height: calc(${height}px*1.5);
  }
`;
