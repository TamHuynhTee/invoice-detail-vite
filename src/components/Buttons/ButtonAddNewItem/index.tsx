import IconPlus from '@/components/Icons/IconPlus';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import style from './style.module.css';

export const ButtonAddNewItem = (props: ButtonBaseProps) => {
  return (
    <ButtonBase {...props} className={`bg-light-F9 hover:bg-gray-DF`}>
      <span className="inline-block mx-[107px] text-pale-7E">
        + Add New Item
      </span>
    </ButtonBase>
  );
};
