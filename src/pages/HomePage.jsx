import { MainContainer } from '../utilities/globalStyles';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contacts from '../components/Contacts/Contacts';

const HomePage = () => {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </MainContainer>
  );
};

export default HomePage;
