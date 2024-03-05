import { motion } from 'framer-motion';
import { MenuContainer, MenuList, MenuItem, MenuLinks } from './style';

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

const linksVariants = {
  opened: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.95,
  },
};

const Links = ({ menuOpen, setMenuOpen }) => {
  const handleCloseMenu = () => {
    // Close the menu when a link is clicked
    setMenuOpen(false);
  };
  return (
    <>
      <MenuContainer variants={variants}>
        <MenuList as={motion.ul} variants={variants}>
          <MenuItem
            as={motion.li}
            variants={linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MenuLinks to='/' onClick={handleCloseMenu}>
              Home
            </MenuLinks>
          </MenuItem>
          <MenuItem
            as={motion.li}
            variants={linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MenuLinks to='/about' onClick={handleCloseMenu}>
              About
            </MenuLinks>
          </MenuItem>
          <MenuItem
            as={motion.li}
            variants={linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MenuLinks to='/projects' onClick={handleCloseMenu}>
              Projects
            </MenuLinks>
          </MenuItem>
          <MenuItem
            as={motion.li}
            variants={linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MenuLinks to='/contacts' onClick={handleCloseMenu}>
              Contacts
            </MenuLinks>
          </MenuItem>
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default Links;

// old variant

{
  /* <>
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
</> */
}
