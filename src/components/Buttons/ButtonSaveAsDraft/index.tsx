import ButtonBase, { ButtonBaseProps } from '../ButtonBase';

export const ButtonSaveAsDraft = (props: ButtonBaseProps) => {
  return (
    <ButtonBase
      {...props}
      className={`bg-dark-37 hover:bg-dark-0C dark:hover:bg-dark-1E`}
    >
      <span className="inline-block mx-4 text-gray-88 dark:text-gray-DF">
        Save as Draft
      </span>
    </ButtonBase>
  );
};
