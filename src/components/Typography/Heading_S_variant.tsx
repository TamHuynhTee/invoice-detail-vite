import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Heading_S_Variant = (props: Props) => {
  const { children, className = '', ...rest } = props;
  return (
    <p
      className={`font-bold text-[15px] leading-[15px] -tracking-[0.25px] theme-text ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};
