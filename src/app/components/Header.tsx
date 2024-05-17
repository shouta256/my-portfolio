import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = ({ scrollToRef, worksRef, aboutMeRef }) => {
  const { japanese, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (japanese) {
      document.documentElement.lang = 'ja';
    } else {
      document.documentElement.lang = 'en';
    }
  }, [japanese]);

  return (
    <>
      <Box
        position='fixed'
        top='0'
        left='0'
        right='0'
        zIndex='1'
        boxShadow='sm'
        bgColor='white'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        py={2}
        px={4}
        h='50px'
      >
        <Box>
          <Text bg='white'>
            Japanese
            <Switch ml={2} isChecked={japanese} onChange={toggleLanguage} />
          </Text>
        </Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<RxHamburgerMenu size={25} color='black' />}
            bg='white'
          />
          <MenuList>
            <MenuItem onClick={() => scrollToRef(worksRef)}>Works</MenuItem>
            <MenuItem onClick={() => scrollToRef(aboutMeRef)}>About</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box h='50px' />
    </>
  );
};

export default Header;
