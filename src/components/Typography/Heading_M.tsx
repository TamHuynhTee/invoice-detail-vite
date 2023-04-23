import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Heading_M = (props: Props) => {
  const { children, className = '', ...rest } = props;
  return (
    <p
      className={`font-bold text-2xl leading-[22px] -tracking-[0.75px] theme-text ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};
