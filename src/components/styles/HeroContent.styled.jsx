import styled from "styled-components";

export const StyledHeroContent = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  p {
    color: ${({
      theme: {
        colors: { secondaryText }
      }
    }) => secondaryText};
  }
`;
