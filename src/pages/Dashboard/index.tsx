import { LoaderFunction, useLoaderData } from 'react-router-dom';
import BaseLayout from '@/layouts';
import TitleAndFunctions from './components/TitleAndFunctions';
import ListInvoices from './components/ListInvoices';

import data_fake from '@/mock/data.json';
import { InvoiceListItemType } from '@/models';

const Dashboard = (props: any) => {
  return (
    <BaseLayout>
      <_Dashboard />
    </BaseLayout>
  );
};

const _Dashboard = () => {
  const data = useLoaderData() as InvoiceListItemType[];
  return (
    <>
      <TitleAndFunctions />
      <div className="my-8 tablet:my-[55px] laptop:my-16"></div>
      <ListInvoices listInvoice={data} />
    </>
  );
};

export const dashboardLoader: LoaderFunction = (params) => {
  const { request } = params;
  return new Promise((res) => {
    res(data_fake);
  });
};

export default Dashboard;
