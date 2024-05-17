import { contentsType } from '@/app/type';
import { MicroCMSQueries, createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain:
    process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || 'defaultServiceDomain',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || 'defaultApiKey',
});

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList({
    endpoint: 'myworks',
    queries,
  });

  return listData;
};

export const getDetail = async (
  id: string,
  queries?: MicroCMSQueries
): Promise<contentsType> => {
  const detailData = await client.getListDetail({
    endpoint: `myworks`,
    contentId: id,
  });

  return detailData;
};
