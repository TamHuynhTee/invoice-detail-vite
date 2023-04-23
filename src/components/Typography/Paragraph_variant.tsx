import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Paragraph_Variant = (props: Props) => {
  const { children, className = '', ...rest } = props;
  return (
    <p
      {...rest}
      className={`font-medium text-[13px] leading-[15px] -tracking-[1px] theme-text ${className}`}
    >
      {children}
    </p>
  );
};
