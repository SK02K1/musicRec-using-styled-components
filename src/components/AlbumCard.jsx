import { AlbumArt } from "./AlbumArt";
import { AlbumInfo } from "./AlbumInfo";
import { StyledAlbumCard } from "./styles/AlbumCard.styled";

export const AlbumCard = ({ name, artist, albumArt }) => {
  return (
    <StyledAlbumCard>
      <AlbumArt imgLink={albumArt} />
      <AlbumInfo songName={name} artistName={artist} />
    </StyledAlbumCard>
  );
};
