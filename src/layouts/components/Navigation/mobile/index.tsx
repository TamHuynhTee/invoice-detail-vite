import React from 'react';
import { NavigationProps } from '..';
import IconLogo from '@/components/Icons/IconLogo';
import avatar from '@/assets/image-avatar.jpg';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Mobile = (props: NavigationProps) => {
  return (
    <div className="h-[72px] tablet:h-[80px] w-full fixed top-0 left-0 right-0 bg-dark-37">
      <div className="w-full flex items-center h-full">
        <IconLogo />
        <div className="ml-auto h-full flex items-center">
          <div className="mr-6">
            <ThemeSwitcher />
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="flex h-full items-center justify-center aspect-square border-l border-l-dark-49">
      <div className="w-8 h-8 rounded-full">
        <img src={avatar} alt="avatar" className="rounded-inherit" />
      </div>
    </div>
  );
};

export default Mobile;
