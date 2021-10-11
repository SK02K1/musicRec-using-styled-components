import { StyledAlbumArt } from "./styles/AlbumArt.styled";

export const AlbumArt = ({ imgLink }) => {
  return <StyledAlbumArt src={imgLink} alt="album-art"></StyledAlbumArt>;
};
