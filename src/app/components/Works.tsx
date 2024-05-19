import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { contentsType } from '../type';
import { useLanguage } from '../hooks/useLanguage';
import { useRouter } from 'next/navigation';
import useIsSmallerThan1080 from '../hooks/useSmallerThan1080';
import useisSmallerThan768 from '../hooks/useSmallerThan768';

const MotionBox = motion(Box);

interface WorksProps {
  contents?: contentsType[];
}

const Works: React.FC<WorksProps> = ({ contents }) => {
  const { japanese } = useLanguage();
  const isSmallerThan1080 = useIsSmallerThan1080();
  const isSmallerThan768 = useisSmallerThan768();

  const router = useRouter();

  const handleBoxClick = (id: string) => {
    router.push(`/details/${id}`);
  };

  const renderAdditionalBoxes = () => {
    if (contents) {
      let boxes = [];
      const remainder = contents?.length % 3;
      if (remainder !== 0) {
        if (isSmallerThan1080) {
          boxes.push(<Box key='0' w='45%' mx={2} />);
        } else {
          for (let i = 0; i < 3 - remainder; i++) {
            boxes.push(<Box key={`additional-${i}`} w='30%' mx={2} />);
          }
        }
      }
      return boxes;
    }
  };

  return (
    <Box w='100%'>
      <Text
        mb={3}
        fontSize={`${
          isSmallerThan768 ? '16' : isSmallerThan1080 ? '28' : '30'
        }`}
        fontWeight={700}
      >
        Works
      </Text>
      <Flex flexWrap='wrap' justifyContent='center'>
        {contents?.map((work, index) => (
          <MotionBox
            key={work.id}
            display='flex'
            alignItems='center'
            justifyContent='center'
            w={`${
              isSmallerThan768 ? '80%' : isSmallerThan1080 ? '45%' : '30%'
            }`}
            maxW={`${
              isSmallerThan768 ? '80%' : isSmallerThan1080 ? '45%' : '30%'
            }`}
            p='5'
            mx={2}
            mb={3}
            bgImage={`url(${work.mainImage.url})`}
            backgroundSize='cover'
            backgroundPosition='center'
            height={`${isSmallerThan768 ? '40%' : '300px'}`}
            boxSizing='border-box'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => handleBoxClick(work.id)}
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
    </Box>
  );
};

export default Works;
