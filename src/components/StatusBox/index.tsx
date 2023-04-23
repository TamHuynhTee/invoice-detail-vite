import IconDot from '@/components/Icons/IconDot';
import { Heading_S_Variant } from '@/components/Typography';
import { INVOICE_STATUS_META } from '@/constants';
import { InvoiceStatus } from '@/models';

const StatusBox = (props: { status: InvoiceStatus }) => {
  const { status } = props;

  const statusData = INVOICE_STATUS_META[status];

  return (
    <div className="inline-block">
      <div
        className={`h-10 rounded-[6px] flex w-[104px] items-center justify-center gap-2 ${statusData.background}`}
      >
        <IconDot fill={statusData.color} />
        <Heading_S_Variant className={statusData.color}>
          {statusData.text}
        </Heading_S_Variant>
      </div>
    </div>
  );
};

export default StatusBox;
