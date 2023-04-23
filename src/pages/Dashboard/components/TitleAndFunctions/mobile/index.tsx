import { ButtonAddInvoice } from '@/components/Buttons';
import { Heading_M, Paragraph_Variant } from '@/components/Typography';
import React from 'react';
import FilterStatus from '../../FilterStatus';

type Props = {};

export const TitleAndFunctionsMobile = (props: Props) => {
  return (
    <div className="flex">
      <div className="">
        <Heading_M>Invoices</Heading_M>
        <Paragraph_Variant className="dark:!text-gray-DF !text-gray-88 ">
          7 invoices
        </Paragraph_Variant>
      </div>
      <div className="ml-auto flex items-center gap-x-[18px]">
        <FilterStatus />
        <ButtonAddInvoice />
      </div>
    </div>
  );
};
