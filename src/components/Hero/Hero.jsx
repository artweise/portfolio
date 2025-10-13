import {
  HeroSection,
  MainContainerHero,
  TextContainer,
  ImageContainer,
  SlidingTextContainer,
} from './heroStyle';
import { motion } from 'framer-motion';
import Button from '../Button/Button';

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
    opacity: 0,
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
        <TextContainer
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Hi! I'm Olga.</motion.h2>
          <motion.h4 variants={textVariants}>
            I ship{' '}
            <strong style={{ color: '#95c5c9' }}>products that scale</strong>{' '}
            and delight users
          </motion.h4>
          <motion.p variants={textVariants}>
            <strong style={{ color: '#95c5c9' }}>Full-stack developer</strong>{' '}
            focused on turning complex ideas into elegant solutions.
          </motion.p>
          <Button
            as={motion.a}
            href='#projects'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            variants={textVariants}
            style={{ marginTop: '24px' }}
          >
            See What I've Built
          </Button>
        </TextContainer>
        <ImageContainer
          variants={imageVariants}
          initial='initial'
          whileHover='hover'
        >
          <motion.img
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
            src='/images/hero.jpg'
            alt='portrait'
          />
        </ImageContainer>
      </MainContainerHero>

      <SlidingTextContainer
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Web Developer
      </SlidingTextContainer>
    </HeroSection>
  );
};

export default Hero;
