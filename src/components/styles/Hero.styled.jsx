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
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
