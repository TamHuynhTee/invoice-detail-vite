import React from 'react';
import { PageContainerProps } from '..';

const Desktop = (props: PageContainerProps) => {
  return (
    <div className="ml-[103px] py-[77px]">
      <div className="max-w-[764px] w-[764px] mx-auto px-8">
        {props.children}
      </div>
    </div>
  );
};

export default Desktop;
