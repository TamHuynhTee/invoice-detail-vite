import React from 'react';
import style from './style.module.css';

export type ButtonBaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonBase = (props: ButtonBaseProps) => {
  const { className = '', children } = props;
  return (
    <button className={[style.base_button, className].join(' ')}>
      {children}
    </button>
  );
};

export default ButtonBase;
