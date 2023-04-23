import { InvoiceStatus } from '@/models';
import style from '@/components/StatusBox/style.module.css';

export type STATUS_META = {
  text: string;
  color: string;
  background: string;
};

export const INVOICE_STATUS_META: Record<InvoiceStatus, STATUS_META> = {
  draft: {
    text: 'Draft',
    color: style.draft_text,
    background: style.draft_bg,
  },
  paid: {
    text: 'Paid',
    color: style.paid_text,
    background: style.paid_bg,
  },
  pending: {
    text: 'Pending',
    color: style.pending_text,
    background: style.pending_bg,
  },
};
