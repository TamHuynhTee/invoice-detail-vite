import BaseLayout from '@/layouts';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import data_fake from '@/mock/data.json';
import { InvoiceListItemType } from '@/models';
import ButtonGoBack from '@/components/Buttons/ButtonGoBack';
import StatusViewer from './components/StatusViewer';
import DetailedInfo from './components/DetailedInfo';

const InvoiceDetail = (props: any) => {
  return (
    <BaseLayout>
      <_InvoiceDetail />
    </BaseLayout>
  );
};

const _InvoiceDetail = () => {
  const data = useLoaderData() as InvoiceListItemType;

  return (
    <div className="mb-[110px] tablet:mb-0">
      <ButtonGoBack />
      <StatusViewer status={data.status} />
      <DetailedInfo info={data} />
    </div>
  );
};

export const invoiceDetailLoader: LoaderFunction = (args) => {
  const { params } = args;
  const { id } = params;

  return new Promise((res, rej) => {
    const response = data_fake?.find((item) => item?.id === id);
    if (!response) {
      rej("Invoice doesn't exists");
      return;
    }
    res(response);
  });
};

export default InvoiceDetail;
