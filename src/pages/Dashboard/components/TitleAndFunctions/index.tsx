import DeviceRender from '@/HOCs/DeviceRender.HOC';
import React from 'react';
import { TitleAndFunctionsMobile } from './mobile';

export type TitleAndFunctionsProps = {};

const TitleAndFunctions = (props: TitleAndFunctionsProps) => {
  return (
    <DeviceRender
      DesktopComponent={<></>}
      MobileComponent={TitleAndFunctionsMobile}
      props={props}
    />
  );
};

export default TitleAndFunctions;
