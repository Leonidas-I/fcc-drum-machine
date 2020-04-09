import styled from "styled-components";

export const BankSelectInput = styled.input`
  display: none;
`;

export const BankSelectButton = styled.span`
  margin: 0.5em;
  position: relative;
  font-size: 1rem;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #fff;
  padding: 0.25em;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-out;
  ${BankSelectInput}:checked + & {
    background-color: #ff4500;
    border-color: #ff4500;
    color: #fff;
  }

  @media (min-width: 720px) {
    margin: 1em;
    font-size: 1.2rem;
    padding: 0.5em;
  }
`;
