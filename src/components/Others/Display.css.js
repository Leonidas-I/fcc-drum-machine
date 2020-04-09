import styled from "styled-components";

export const Display = styled.div`
  box-sizing: border-box;
  width: 75%;
  margin: 0.5em auto;
  padding: 0.5em;
  border-radius: 10px;
  background-color: #c0c0c0;
  font-size: 0.75rem;

  @media (min-width: 720px) {
    width: 60%;
    margin: 1.5em auto;
    padding: 1em;
    border-radius: 20px;
    font-size: 1.2rem;
  }
`;
