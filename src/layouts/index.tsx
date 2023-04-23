import React, { ReactNode } from 'react';
import Navigation from './components/Navigation';
import PageContainer from './components/PageContainer';

type Props = {
  children: ReactNode;
};

const BaseLayout = (props: Props) => {
  return (
    <div className="w-screen max-h-screen overflow-y-auto overflow-x-hidden bg-light-F8 dark:bg-dark-14 h-screen">
      <Navigation />

      <PageContainer>{props.children}</PageContainer>
    </div>
  );
};

export default BaseLayout;
