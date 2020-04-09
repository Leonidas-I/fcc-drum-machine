import styled from "styled-components";

export const Footer = styled.footer`
  font-size: 1.3rem;
  color: #006666;
  margin: 0.75em auto;
  &:hover {
    color: #f0f8ff;
    transition: color 2s ease 0.5s;
    cursor: not-allowed;
  }
  a {
    text-decoration: none;
    color: #8a2be2;
  }

  @media (min-width: 720px) {
    font-size: 2rem;
    margin: 1em auto;
  }
`;
