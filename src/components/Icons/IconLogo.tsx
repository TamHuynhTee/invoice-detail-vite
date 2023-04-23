import React from 'react';
import DeviceRender from '@/HOCs/DeviceRender.HOC';

type Props = {};

const IconLogo = (props: Props) => {
  return (
    <DeviceRender MobileComponent={IconMobile} DesktopComponent={IconDesktop} />
  );
};

const IconDesktop = () => {
  return (
    <svg
      className="w-[103px] h-[103px]"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
        fill="#7C5DFA"
      />
      <mask
        id="mask0_1_194"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="103"
        height="103"
      >
        <path
          d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_194)">
        <path
          d="M103 52H20C8.95431 52 0 60.9543 0 72V135C0 146.046 8.95431 155 20 155H103V52Z"
          fill="#9277FF"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.6942 33.292L52 51.9998L61.3058 33.292C67.6645 36.6406 72 43.3139 72 50.9998C72 62.0454 63.0457 70.9998 52 70.9998C40.9543 70.9998 32 62.0454 32 50.9998C32 43.3139 36.3355 36.6406 42.6942 33.292Z"
        fill="white"
      />
    </svg>
  );
};

const IconMobile = () => {
  return (
    <svg
      className="w-[72px] h-[72px] tablet:w-[80px] tablet:h-[80px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z"
        fill="#7C5DFA"
      />
      <mask
        id="mask0_0_1479"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="72"
        height="72"
      >
        <path
          d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_0_1479)">
        <path
          d="M72 36.3496H20C8.95431 36.3496 0 45.3039 0 56.3496V88.3496C0 99.3953 8.95431 108.35 20 108.35H72V36.3496Z"
          fill="#9277FF"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.486 23.0003L36 35.8995L42.514 23.0003C46.9652 25.3092 50 29.9105 50 35.21C50 42.8261 43.732 49.0002 36 49.0002C28.268 49.0002 22 42.8261 22 35.21C22 29.9105 25.0348 25.3092 29.486 23.0003Z"
        fill="white"
      />
    </svg>
  );
};

export default IconLogo;
