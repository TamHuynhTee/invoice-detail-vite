import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Paragraph = (props: Props) => {
  const { children, className = '', ...rest } = props;
  return (
    <p
      {...rest}
      className={`font-medium text-[13px] leading-[18px] -tracking-[1px] theme-text ${className}`}
    >
      {children}
    </p>
  );
};
