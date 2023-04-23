import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import style from './style.module.css';

export const ButtonMarkAsPaid = (props: ButtonBaseProps) => {
  return (
    <ButtonBase {...props} className={`${style.button_mark_as_paid}`}>
      <span className="inline-block mx-4">Mark as Paid</span>
    </ButtonBase>
  );
};
