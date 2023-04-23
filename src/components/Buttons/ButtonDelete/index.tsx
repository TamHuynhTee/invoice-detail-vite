import ButtonBase, { ButtonBaseProps } from '../ButtonBase';

export const ButtonDelete = (props: ButtonBaseProps) => {
  return (
    <ButtonBase {...props} className={`bg-pink-EC hover:bg-pink-FF`}>
      <span className="inline-block mx-4 text-white">Delete</span>
    </ButtonBase>
  );
};
