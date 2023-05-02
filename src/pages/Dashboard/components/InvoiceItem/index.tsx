import {
  Heading_S,
  Heading_S_Variant,
  Paragraph_Variant,
} from '@/components/Typography';
import { DateJS } from '@/helpers/DateJS';
import { InvoiceListItemType } from '@/models';
import StatusBox from '@/components/StatusBox';
import style from './style.module.css';
import IconArrowRight from '@/components/Icons/IconArrowRight';
import { Link } from 'react-router-dom';

type Props = {
  invoice: InvoiceListItemType;
};

const InvoiceItem = (props: Props) => {
  const { invoice } = props;
  return (
    <Link to={`/invoice/${invoice.id}`} className={style.invoice_item_wrapper}>
      <span className={style.invoiceID}>
        <Heading_S_Variant>
          <span className="text-pale-7E">#</span>
          <span>{invoice.id}</span>
        </Heading_S_Variant>
      </span>
      <span className={style.dueDate}>
        <Paragraph_Variant className="!text-gray-85">
          Due {DateJS.getFormatDate(invoice.paymentDue, 'DD MMM YYYY')}
        </Paragraph_Variant>
      </span>
      <span className={style.customerName}>
        <Paragraph_Variant className="!text-gray-85 dark:!text-white">
          {invoice.clientName}
        </Paragraph_Variant>
      </span>
      <span className={style.totalCharge}>
        <Heading_S>£ {invoice.total}</Heading_S>
      </span>
      <div className={style.statusBox}>
        <StatusBox status={invoice.status} />
        {/* from tablet add arrow right*/}
        <div className="hidden tablet:block ml-5">
          <IconArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default InvoiceItem;
