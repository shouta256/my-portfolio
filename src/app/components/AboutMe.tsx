import { Box, Image, Link, Text } from '@chakra-ui/react';
import { useLanguage } from '../hooks/useLanguage';
import { FiExternalLink } from 'react-icons/fi';

const AboutMe = () => {
  const { japanese } = useLanguage();

  const desc_ja = (
    <Text>
      2004年生まれ。現役の高専生。2024年9月からアメリカの大学に編入予定。 <br />
      学校で学んだことをアウトプットするため、留学費を貯めるためフリーランス・インターンを始めました。
      <br /> 学生など関係なく実直に仕事に向き合い、責任を持って取り組みます。
    </Text>
  );

  const desc_en = (
    <Text>
      A Japanese individual born in 2004, hailing from Japan, attended a
      National Institute of Technology from the age of 15 to 19.
      <br />
      During this time, they studied the fundamentals of computer science.
      <br />
      While enrolled, they participated in business contest - which is the
      biggest Japanese competition where high school students think of business
      ideas and received recognition, achieving a Top 100 award among 5000
      submissions.
    </Text>
  );

  return (
    <Box ml={5} mb={5}>
      <Text mb={3} fontSize={22} fontWeight={700}>
        About
      </Text>
      <Box>
        <Box display='flex'>
          <Image
            src='me.jpg'
            boxSize={24}
            objectFit='cover'
            borderRadius='full'
          />
          <Box ml={8}>
            <Text fontSize={20} fontWeight={700}>
              {japanese ? 'スズキ ショウタ' : 'Shota Suzuki'}
            </Text>
            <Text mt={3} fontSize={18}>
              {japanese ? desc_ja : desc_en}
            </Text>
            <Text mt={1} fontSize={18} whiteSpace='pre-line'>
              CONTACT:shouta160618@gmail.com
            </Text>
            <Box display='flex' alignItems='center'>
              <Link href='https://github.com/shouta256' mr={1} fontSize={18}>
                GitHub
              </Link>
              <FiExternalLink />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
