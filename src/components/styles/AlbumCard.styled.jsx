import styled from "styled-components";

export const StyledAlbumCard = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  background-color: ${({
    theme: {
      colors: { card }
    }
  }) => card};
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 200ms ease;
  }
`;
