import { ReactNode } from 'react';
import DeviceRender from '@/HOCs/DeviceRender.HOC';
import Desktop from './desktop';
import Mobile from './mobile';

export type NavigationProps = {
  //   children: ReactNode;
};

const Navigation = (props: NavigationProps) => {
  return (
    <DeviceRender
      DesktopComponent={Desktop}
      MobileComponent={Mobile}
      props={props}
    />
  );
};

export default Navigation;
