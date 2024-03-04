import { motion } from 'framer-motion';
import { MenuContainer, MenuList, MenuItem, MenuLinks } from './style';
import { navbarData } from '../../../data/NavbarData';

const variants = {
  opened: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      type: 'spring',
      stiffness: 20,
      damping: 10,
    },
  },
};

// export const Link = ({ className, children }) => <a className={className}>{children}</a>;

const Links = () => {
  // const links = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <>
      <MenuContainer variants={variants}>
        <MenuList as={motion.ul} variants={variants}>
          {navbarData.map((link, index) => (
            <MenuItem
              key={index}
              as={motion.li}
              // to={`#${link}`}
            >
              <MenuLinks to='/'>{link.text}</MenuLinks>
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default Links;
