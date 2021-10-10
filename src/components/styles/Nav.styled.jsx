import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 50%;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({
    theme: {
      colors: { card }
    }
  }) => card};
  border-radius: 5px;
`;
