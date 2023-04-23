import { ListInvoicesProps } from '..';
import InvoiceItem from '../../InvoiceItem';

const ListInvoicesMobile = (props: ListInvoicesProps) => {
  const { listInvoice } = props;
  const notEmpty = listInvoice?.length > 0;

  return notEmpty ? (
    <div className="grid gap-y-4">
      {listInvoice.map((invoice, index) => (
        <InvoiceItem invoice={invoice} key={index} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default ListInvoicesMobile;
