import { Box, Image, Link, Text } from '@chakra-ui/react';
import { useLanguage } from '../hooks/useLanguage';
import { FiExternalLink } from 'react-icons/fi';
import useIsSmallerThan1080 from '../hooks/useSmallerThan1080';
import useIsSmallerThan768 from '../hooks/useSmallerThan768';

const AboutMe = () => {
  const { japanese } = useLanguage();

  const isSmallerThan1080 = useIsSmallerThan1080();
  const isSmallerThan768 = useIsSmallerThan768();

  const desc_ja = (
    <Text>
      &nbsp;2004年生まれ。2020年から4年間、仙台高専に在学。2024年9月からアメリカのWashburn
      Universityに編入しComputer Information Scienceを専攻。 <br />
      学校で学んだことをアウトプットするため、留学費を貯めるためフリーランス・インターンを始めました。
      <br />
      4月から複数の会社でインターンをしております。
      &nbsp;未熟ですが実直に仕事に向き合い、責任を持って取り組みます。
    </Text>
  );

  const desc_en = (
    <Text>
      &nbsp;A Japanese individual born in 2004, hailing from Japan, attended
      a&nbsp;
      <Link
        href='https://www.sendai-nct.ac.jp/english/'
        textDecorationLine='underline'
      >
        National Institute of Technology, Sendai college
      </Link>
      &nbsp;from the age of 15 to 19.
      <br />
      &nbsp;During this time, they studied the fundamentals of computer science.
      <br />
      &nbsp;While enrolled, they participated in business contest - which is the
      biggest Japanese competition where high school students think of business
      ideas and received recognition, achieving a Top 100 award among 5000
      submissions.
      <br />
      &nbsp;I have been interning at multiple Japanese companies since April.
    </Text>
  );

  return (
    <Box
      mb={5}
      w='100%'
      maxW='1320px'
      display='flex'
      flexDir='column'
      justifyContent='center'
    >
      <Text
        mb={3}
        fontSize={`${
          isSmallerThan768 ? '16' : isSmallerThan1080 ? '28' : '30'
        }`}
        fontWeight={700}
      >
        About
      </Text>
      {isSmallerThan768 ? (
        <Box ml={4}>
          <Box display='flex' alignItems='center'>
            <Box mr={8}>
              <Text fontSize={16} fontWeight={700}>
                {japanese ? 'スズキ ショウタ' : 'Shota Suzuki'}
              </Text>
            </Box>
          </Box>
          <Text mt={3} overflowWrap='break-word' fontSize={14}>
            {japanese ? desc_ja : desc_en}
          </Text>
          <Text mt={1} fontSize={14} whiteSpace='pre-line'>
            CONTACT:shouta160618@gmail.com
          </Text>
          <Box display='flex' alignItems='center'>
            <Link href='https://github.com/shouta256' mr={1} fontSize={14}>
              GitHub
            </Link>
            <FiExternalLink />
          </Box>
        </Box>
      ) : (
        <Box ml={4}>
          <Box display='flex'>
            <Image
              src='me.jpg'
              alt='my photo'
              boxSize={`${isSmallerThan1080 ? '20' : '24'}`}
              objectFit='cover'
              borderRadius='full'
            />
            <Box ml={8}>
              <Text
                fontSize={`${isSmallerThan1080 ? '25' : '30'}`}
                fontWeight={700}
              >
                {japanese ? 'スズキ ショウタ' : 'Shota Suzuki'}
              </Text>
              <Text
                mt={3}
                overflowWrap='break-word'
                fontSize={`${isSmallerThan1080 ? '20' : '22'}`}
              >
                {japanese ? desc_ja : desc_en}
              </Text>
              <Text
                mt={1}
                fontSize={`${isSmallerThan1080 ? '20' : '22'}`}
                whiteSpace='pre-line'
              >
                CONTACT:shouta160618@gmail.com
              </Text>
              <Box display='flex' alignItems='center'>
                <Link
                  href='https://github.com/shouta256'
                  mr={1}
                  fontSize={`${isSmallerThan1080 ? '20' : '22'}`}
                >
                  GitHub
                </Link>
                <FiExternalLink />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AboutMe;
