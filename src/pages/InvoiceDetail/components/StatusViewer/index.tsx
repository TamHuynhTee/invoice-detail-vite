import { Paragraph_Variant } from '@/components/Typography';
import SectionComponent from '../SectionComponent';
import { InvoiceStatus } from '@/models';
import StatusBox from '@/components/StatusBox';
import styles from './style.module.css';
import {
  ButtonDelete,
  ButtonEdit,
  ButtonMarkAsPaid,
} from '@/components/Buttons';

export type Props = {
  status: InvoiceStatus;
};

const StatusViewer = ({ status }: Props) => {
  return (
    <SectionComponent className="mt-8 tablet:px-8 ">
      <div className="flex items-center justify-between tablet:justify-start gap-x-5">
        <Paragraph_Variant className="!text-gray-85 dark:!text-gray-DF">
          Status
        </Paragraph_Variant>
        <StatusBox status={status} />

        <div className={styles.actionButtons}>
          <ButtonEdit />
          <ButtonDelete />
          <ButtonMarkAsPaid />
        </div>
      </div>
    </SectionComponent>
  );
};

export default StatusViewer;
