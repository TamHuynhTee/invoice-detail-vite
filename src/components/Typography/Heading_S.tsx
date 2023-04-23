import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Heading_S = (props: Props) => {
  const { children, className = '', ...rest } = props;
  return (
    <p
      {...rest}
      className={`font-bold text-[15px] leading-[24px] -tracking-[0.25px] theme-text ${className}`}
    >
      {children}
    </p>
  );
};
