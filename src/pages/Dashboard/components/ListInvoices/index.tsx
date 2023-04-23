import DeviceRender from '@/HOCs/DeviceRender.HOC';
import ListInvoicesMobile from './mobile';
import ListInvoicesDesktop from './desktop';
import { InvoiceListItemType } from '@/models';

export type ListInvoicesProps = {
  listInvoice: InvoiceListItemType[];
};

const ListInvoices = (props: ListInvoicesProps) => {
  return (
    <DeviceRender
      DesktopComponent={ListInvoicesDesktop}
      MobileComponent={ListInvoicesMobile}
      props={props}
    />
  );
};

export default ListInvoices;
