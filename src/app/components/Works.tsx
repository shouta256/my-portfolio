import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { contentsType } from '../type';
import { useLanguage } from '../hooks/useLanguage';
import { useRouter } from 'next/navigation';

const MotionBox = motion(Box);

interface WorksProps {
  contents?: contentsType[];
}

const Works: React.FC<WorksProps> = ({ contents }) => {
  const { japanese } = useLanguage();
  const router = useRouter();

  const handleBoxClick = (id: string) => {
    router.push(`/details/${id}`);
  };

  const renderAdditionalBoxes = () => {
    if (contents) {
      let boxes = [];
      const remainder = contents?.length % 3;
      if (remainder !== 0) {
        for (let i = 0; i < 3 - remainder; i++) {
          boxes.push(<Box key={`additional-${i}`} w='30%' mx={2} />);
        }
      }
      return boxes;
    }
  };

  return (
    <>
      <Text ml={5} mb={3} fontSize={22} fontWeight={700}>
        Works
      </Text>
      <Flex flexWrap='wrap' justifyContent='center'>
        {contents?.map((work, index) => (
          <MotionBox
            key={work.id}
            flex='1 0 30%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            maxW='30%'
            p='5'
            mx={2}
            mb={3}
            bgImage={`url(${work.mainImage.url})`}
            backgroundSize='cover'
            backgroundPosition='center'
            height='300px'
            boxSizing='border-box'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => handleBoxClick(work.id)} // クリックイベントハンドラを追加
          >
            <Box
              w='80%'
              bg='white'
              p='4'
              textAlign='center'
              cursor='pointer'
              opacity={0}
              _hover={{
                opacity: 1,
                transition: 'opacity 0.5s ease',
              }}
            >
              <Text mb={3} fontSize='2xl' color='black' fontWeight='bold'>
                {japanese ? work.title_ja : work.title_en}
              </Text>
              <Text fontSize='lg'>{work.kind}</Text>
              <Text fontSize='lg'>{work.stack}</Text>
            </Box>
          </MotionBox>
        ))}
        {renderAdditionalBoxes()}
      </Flex>
    </>
  );
};

export default Works;
