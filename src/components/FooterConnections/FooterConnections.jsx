import {
  SectionContainer,
  Connections,
  HorizontalLine,
  SocialLinksContainer,
  SocialLink,
  ButtonLineContainer,
  StickyButtonWrapper,
} from './footerConnectionsStyle';
import StickyButton from '../StickyButton/StickyButton';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LinkedInIcon from './icons/linkedin.svg';
import GitHubIcon from './icons/github.svg';
import EmailIcon from './icons/email.png';

const FooterConnections = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <SectionContainer>
      <Connections>
        <Typography
          variant='h1'
          pb={5}
          sx={{
            fontSize: 'clamp(4rem, 6vw, 6rem)', // Font size from 4rem to 6rem based on viewport width
            paddingBottom: 'clamp(4rem, 6vw, 2rem)', // Padding from 2rem to 4rem based on viewport width
          }}
        >
          Let's work together
        </Typography>

        <Typography
          variant='h6'
          sx={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          info@olgalysko.com
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          +49 152 371 308 22
        </Typography>
      </Connections>
      <ButtonLineContainer>
        <HorizontalLine />
        <StickyButtonWrapper>
          <StickyButton onClick={handleButtonClick} />
        </StickyButtonWrapper>
      </ButtonLineContainer>
      <SocialLinksContainer>
        <SocialLink
          href="mailto:info@olgalysko.com?subject=Let's%20work&body=Hello%20Olga"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={EmailIcon} alt='Email' />
        </SocialLink>
        <SocialLink
          href='https://linkedin.com/in/olga-lysko'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={LinkedInIcon} alt='LinkedIn' />
        </SocialLink>
        <SocialLink
          href='https://github.com/artweise'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GitHubIcon} alt='GitHub' />
        </SocialLink>
      </SocialLinksContainer>
      {/* <p>built w/ passion</p>
      <p>Olga Lysko c 2024</p> */}
    </SectionContainer>
  );
};

export default FooterConnections;
