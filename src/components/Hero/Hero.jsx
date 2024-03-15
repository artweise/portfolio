import {
  StyledHeroSection,
  StyledImageContainer,
  StyledSlidingTextContainer,
  StyledTextContainer,
} from './heroStyle';
import { motion } from 'framer-motion';

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 40,
    },
  },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

const textVariants = {
  initial: {
    x: -500,
    opasity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <StyledHeroSection>
      <StyledTextContainer variants={textVariants} initial='initial' animate='animate'>
        <motion.h2 variants={textVariants}>Hello! I'm Olga.</motion.h2>
        <motion.h4 variants={textVariants}>A passionate Full Stack Developer</motion.h4>
        <motion.p variants={textVariants}>
          I aim to make the complex simple and the ordinary extraordinary.
        </motion.p>
      </StyledTextContainer>
      <StyledSlidingTextContainer
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Full Stack Web Developer
      </StyledSlidingTextContainer>
      <StyledImageContainer variants={imageVariants} initial='initial' whileHover='hover'>
        <motion.img
          variants={imageVariants}
          initial='initial'
          whileHover='hover'
          src='/images/hero.jpg'
          alt=''
        />
      </StyledImageContainer>
    </StyledHeroSection>
  );
};

export default Hero;
