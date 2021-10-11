import { StyledAlbumInfo } from "./styles/AlbumInfo.styled";

export const AlbumInfo = ({ songName, artistName }) => {
  return (
    <StyledAlbumInfo>
      <h2>{songName}</h2>
      <p>{artistName}</p>
    </StyledAlbumInfo>
  );
};
