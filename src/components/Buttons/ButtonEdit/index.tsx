import ButtonBase, { ButtonBaseProps } from '../ButtonBase';

export const ButtonEdit = (props: ButtonBaseProps) => {
  return (
    <ButtonBase
      {...props}
      className={`bg-light-F9 hover:bg-gray-DF dark:bg-dark-25 dark:hover:bg-white`}
    >
      <span className="inline-block mx-4 text-pale-7E dark:text-gray-DF">
        Edit
      </span>
    </ButtonBase>
  );
};
