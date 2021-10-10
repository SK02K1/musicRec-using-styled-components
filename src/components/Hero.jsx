import { HeroContent } from "./HeroContent";
import { StyledHero } from "./styles/Hero.styled";
import airpods from "../assets/airpod.svg";

export const Hero = () => {
  return (
    <StyledHero>
      <HeroContent />
      <img src={airpods} alt="airpods-pro" />
    </StyledHero>
  );
};
