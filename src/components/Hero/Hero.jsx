import {
  HeroSection,
  MainContainerHero,
  TextContainer,
  ImageContainer,
  SlidingTextContainer,
} from './heroStyle';
import { motion } from 'framer-motion';

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-200%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 36,
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
    <HeroSection>
      <MainContainerHero>
        <TextContainer variants={textVariants} initial='initial' animate='animate'>
          <motion.h2 variants={textVariants}>Hi! I'm Olga.</motion.h2>
          <motion.h4 variants={textVariants}>A passionate Full Stack Developer</motion.h4>
          <motion.p variants={textVariants}>
            I aim to make the complex simple and the ordinary extraordinary.
          </motion.p>
        </TextContainer>
        <ImageContainer variants={imageVariants} initial='initial' whileHover='hover'>
          <motion.img
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
            src='/images/hero.jpg'
            alt=''
          />
        </ImageContainer>
      </MainContainerHero>

      <SlidingTextContainer variants={sliderVariants} initial='initial' animate='animate'>
        Web Developer
      </SlidingTextContainer>
    </HeroSection>
  );
};

export default Hero;
