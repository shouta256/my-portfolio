'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import Header from './components/Header';
import { getList } from '../../libs/client';
import { contentsType } from './type';
import { useQuery } from 'react-query';
import { useLanguage } from './hooks/useLanguage';
import MainText from './components/MainText';
import Works from './components/Works';
import AboutMe from './components/AboutMe';

function Home() {
  const { data, error, isLoading } = useQuery('works', () => getList());

  const worksRef = useRef(null);
  const aboutMeRef = useRef(null);
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  if (isLoading) {
    return (
      <>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
          <Spinner size='xl' />
        </Flex>
      </>
    );
  }

  if (error) {
    return (
      <Flex height='100vh' alignItems='center' justifyContent='center'>
        <Text>エラーが発生しました</Text>
      </Flex>
    );
  }

  return (
    <Box bg='gray.10'>
      <Header
        scrollToRef={scrollToRef}
        worksRef={worksRef}
        aboutMeRef={aboutMeRef}
      />
      <Box mx={5}>
        <MainText />
        <Box
          display='flex'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box ref={worksRef}>
            <Works contents={data?.contents} />
          </Box>
          <Box ref={aboutMeRef}>
            <AboutMe />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
