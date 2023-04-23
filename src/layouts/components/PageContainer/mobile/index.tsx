import React from 'react';
import { PageContainerProps } from '..';

const Mobile = (props: PageContainerProps) => {
  return (
    <div className="max-w-full px-6 py-8 tablet:px-12 tablet:py-16 mt-[72px] tablet:mt-[80px] h-[calc(100%-72px)] max-h-[calc(100%-72px)] overflow-y-auto">
      {props.children}
    </div>
  );
};

export default Mobile;
