import styled from "styled-components";

export const VolumeSlider = styled.input`
  cursor: pointer;
  margin: 0.5em;
  width: 75%;

  @media (min-width: 720px) {
    width: 60%;
  }
`;

export const Title = styled.p`
  color: #990000;
  text-decoration: underline double #0000ff;
  font-size: 1rem;
  font-style: italic;

  @media (min-width: 720px) {
    font-size: 1.2rem;
  }
`;
