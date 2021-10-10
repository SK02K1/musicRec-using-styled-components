import styled from "styled-components";

export const StyledHero = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 1rem auto;
  padding: 1rem;
  background: ${({
    theme: {
      colors: { card }
    }
  }) => card};
  border-radius: 10px;

  img {
    display: inline-block;
    width: 40%;
    height: auto;
  }
`;
