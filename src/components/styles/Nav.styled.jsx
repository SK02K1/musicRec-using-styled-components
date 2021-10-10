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
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
