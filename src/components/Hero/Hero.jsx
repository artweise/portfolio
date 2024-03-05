import { StyledHeroSection } from './heroStyle';

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1>Welcome!</h1>
      <img src={import.meta.env.PUBLIC_URL + '/images/flower.jpg'} alt='' />
    </StyledHeroSection>
  );
};

export default Hero;
