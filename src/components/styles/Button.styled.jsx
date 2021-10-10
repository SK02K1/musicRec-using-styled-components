import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  color: ${({
    theme: {
      colors: { primaryText }
    }
  }) => primaryText};
  background: ${({
    theme: {
      colors: { bg }
    }
  }) => bg};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.1);
`;
