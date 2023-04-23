import { isMobileDevice } from '@/helpers';

type Props = {
  MobileComponent: any;
  DesktopComponent: any;
  props?: Record<string, any>;
};

const DeviceRender = ({ MobileComponent, DesktopComponent, props }: Props) => {
  return isMobileDevice ? (
    <MobileComponent {...props} />
  ) : (
    <DesktopComponent {...props} />
  );
};

export default DeviceRender;
