import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Heading_L = (props: Props) => {
  const { children, className = '', ...rest } = props;
  return (
    <p
      className={`font-bold text-4xl leading-[33px] -tracking-[1px] theme-text ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};
