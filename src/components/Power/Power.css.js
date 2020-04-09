import styled, { css } from "styled-components";

export const PowerLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  vertical-align: top;
`;

export const PowerInput = styled.input`
  display: none;
`;

export const PowerUI = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1rem;
  width: 3rem;
  height: 1.5rem;
  margin: 0.25em;
  text-transform: uppercase;
  background-color: #ff0000;
  border: 1px solid #ff0000;
  color: #fff;
  transition: all ease 0.5s;
  cursor: pointer;
  ${PowerInput}:checked + & {
    background-color: hsl(120, 100%, 40%);
    border: 1px solid hsl(120, 100%, 40%);
  }

  &::before {
    position: absolute;
    display: inline-block;
    font-size: 0.75rem;
    top: 0.3em;
    left: 0.25em;
    height: 1rem;
    background: #fff;
    color: #ff0000;
    content: "off";
    transition: all ease 0.5s;
    ${PowerInput}:checked + & {
      left: 2.3em;
      content: "on";
      color: hsl(120, 100%, 40%);
    }
  }

  @media (min-width: 720px) {
    transform: scale(1.5);
  }
`;
