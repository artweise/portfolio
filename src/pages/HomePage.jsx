import { MainContainer } from '../utilities/globalStyles';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import FooterConnections from '../components/FooterConnections/FooterConnections';

const HomePage = () => {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Projects />
      <FooterConnections />
    </MainContainer>
  );
};

export default HomePage;
