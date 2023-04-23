import React from 'react';

type Props = {
  fill: string;
};

const IconDot = ({ fill }: Props) => {
  return (
    <svg
      className={`w-2 h-2 ${fill}`}
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
};

export default IconDot;
