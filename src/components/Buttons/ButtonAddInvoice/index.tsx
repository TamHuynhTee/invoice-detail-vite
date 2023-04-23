import IconPlus from '@/components/Icons/IconPlus';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import style from './style.module.css';

export const ButtonAddInvoice = (props: ButtonBaseProps) => {
  return (
    <ButtonBase
      {...props}
      className={`${style.button_add_invoice} h-[44px] !p-[6px] tablet:h-12 tablet:p-2`}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <IconPlus />
        </div>
        <span className="inline-block ml-2 mr-[7px] tablet:ml-4 tablet:mr-[9px]">
          New <span className={`hidden tablet:inline`}>Invoice</span>
        </span>
      </div>
    </ButtonBase>
  );
};
