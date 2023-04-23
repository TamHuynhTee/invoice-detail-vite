import { ReactNode } from 'react';
import DeviceRender from '@/HOCs/DeviceRender.HOC';
import Desktop from './desktop';
import Mobile from './mobile';

export type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = (props: PageContainerProps) => {
  return (
    <DeviceRender
      DesktopComponent={Desktop}
      MobileComponent={Mobile}
      props={props}
    />
  );
};

export default PageContainer;
