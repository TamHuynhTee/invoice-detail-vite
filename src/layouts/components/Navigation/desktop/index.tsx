import React from 'react';
import { NavigationProps } from '..';
import IconLogo from '@/components/Icons/IconLogo';
import avatar from '@/assets/image-avatar.jpg';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const DeskTop = (props: NavigationProps) => {
  return (
    <div className="w-[103px] h-full fixed top-0 left-0 right-0 bg-dark-37 rounded-tr-[20px] rounded-br-[20px] flex flex-col">
      <IconLogo />
      <div className="mt-auto w-full">
        <div className="mb-6 flex justify-center">
          <ThemeSwitcher />
        </div>
        <Avatar />
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="flex w-full items-center justify-center aspect-square border-t border-t-dark-49 rounded-br-[20px]">
      <div className="w-8 h-8 rounded-full">
        <img src={avatar} alt="avatar" className="rounded-inherit" />
      </div>
    </div>
  );
};

export default DeskTop;
