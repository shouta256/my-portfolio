'use client';
import { useParams } from 'next/navigation';
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Spinner,
  Link,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getDetail } from '../../../../libs/client';
import Header from './components/Header';
import { useLanguage } from '@/app/hooks/useLanguage';
import { FiExternalLink } from 'react-icons/fi';

const DetailPage = () => {
  const param = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery('detail', () =>
    getDetail(param.id)
  );

  const { japanese } = useLanguage();

  if (isLoading) {
    return (
      <>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
          <Spinner size='xl' />
        </Flex>
      </>
    );
  }

  interface LinkItemProps {
    url: string | undefined;
    textJa: string;
    textEn: string;
  }

  const LinkItem: React.FC<LinkItemProps> = ({ url, textJa, textEn }) => {
    if (!url) return null;
    return (
      <Box display='flex' alignItems='center' mr={4}>
        <Link mr={1} href={url} fontWeight={600} fontSize={18}>
          {japanese ? textJa : textEn}
        </Link>
        <FiExternalLink />
      </Box>
    );
  };

  return (
    <Box mb={10}>
      <Header />
      <Box p={5}>
        <Text fontSize={22} fontWeight={800}>
          {japanese ? data?.title_ja : data?.title_en}
        </Text>
        <Text my={5} fontSize={18} fontWeight={600}>
          {japanese ? data?.description_ja : data?.description_en}
        </Text>
        <Box display='flex'>
          <LinkItem
            url={data?.devUrl}
            textJa='デプロイ先'
            textEn='Go to Deploy'
          />
          <LinkItem url={data?.GitUrl} textJa='GitHub' textEn='Go to GitHub' />
          <LinkItem
            url={data?.videoUrl}
            textJa='動画を見る'
            textEn='Watch Video'
          />
        </Box>
      </Box>
      {data?.images.map((image, index) => (
        <Flex
          key={index}
          justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
          mt={4}
          mx={5}
          w='100%'
        >
          <Box w='47%' p={3} bg='gray.100' borderRadius='lg'>
            <Image src={image.url} alt={`Image ${index + 1}`} />
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default DetailPage;
