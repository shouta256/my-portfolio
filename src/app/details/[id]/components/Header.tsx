import { useLanguage } from '@/app/hooks/useLanguage';
import { Box, Switch, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => {
  const { japanese, toggleLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (japanese) {
      document.documentElement.lang = 'ja';
    } else {
      document.documentElement.lang = 'en';
    }
  }, [japanese]);

  const handleBackClick = () => {
    router.push('/');
  };

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
        <Box
          display='flex'
          alignItems='center'
          cursor='pointer'
          onClick={handleBackClick}
        >
          <IoIosArrowBack />
          <Text ml={1}>Back</Text>
        </Box>
        <Box>
          <Text bg='white'>
            Japanese
            <Switch ml={2} isChecked={japanese} onChange={toggleLanguage} />
          </Text>
        </Box>
      </Box>
      <Box h='50px' />
    </>
  );
};

export default Header;
