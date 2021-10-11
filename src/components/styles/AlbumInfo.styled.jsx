import styled from "styled-components";

export const StyledAlbumInfo = styled.div`
  padding: 2rem 1rem;

  p {
    color: ${({
      theme: {
        colors: { secondaryText }
      }
    }) => secondaryText};
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
`;
