import styled from "styled-components";
import { Variable } from "../Others/VariableCSS";

export const Pad = styled.div`
  float: left;
  position: relative;
  height: ${Variable.height}px;
  width: ${Variable.width}px;
  box-sizing: border-box;
  padding-top: calc(${Variable.height}px / 3);
  margin: ${Variable.padMargin}px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  color: #808080;

  @media (min-width: 720px) {
    height: calc(${Variable.height}px*1.5);
    width: calc(${Variable.width}px*1.5);
    padding-top: calc(${Variable.height}px / 2);
    margin: calc(${Variable.padMargin}px*1.5);
    border-radius: 10px;
    font-size: 2rem;
  }
`;
