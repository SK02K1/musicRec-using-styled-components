import styled from "styled-components";

export const StlyedGenreBtnContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: ${({
    theme: {
      colors: { card }
    }
  }) => card};
  border-radius: 5px;
`;
