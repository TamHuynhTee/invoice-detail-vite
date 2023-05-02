import {
  Heading_M,
  Heading_S_Variant,
  Paragraph,
  Paragraph_Variant,
} from '@/components/Typography';
import SectionComponent from '../SectionComponent';
import { InvoiceItemType, InvoiceListItemType } from '@/models';
import { DateJS } from '@/helpers/DateJS';

export type Props = {
  info: InvoiceListItemType;
};

const DetailedInfo = ({ info }: Props) => {
  return (
    <SectionComponent className="mt-[15px] tablet:p-8">
      {/* ID and client address */}
      <div className="block tablet:flex justify-between items-start">
        <div className="">
          <Heading_S_Variant>
            <span className="text-pale-7E">#</span>
            <span>{info.id}</span>
          </Heading_S_Variant>
          <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
            {info.description}
          </Paragraph_Variant>
        </div>

        <div className="mt-8 tablet:mt-0">
          <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF">
            {info.clientAddress.street}
          </Paragraph_Variant>
          <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
            {info.clientAddress.city}
          </Paragraph_Variant>
          <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
            {info.clientAddress.postCode}
          </Paragraph_Variant>
          <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
            {info.clientAddress.country}
          </Paragraph_Variant>
        </div>
      </div>

      {/* Sender Info */}
      <div className="mt-8 tablet:mt-5">
        <div className="w-full block tablet:flex tablet:gap-x-28 items-start">
          <div className="grid grid-cols-2 grid-rows-2 gap-8 tablet:gap-x-28">
            <LabelValue
              label="Invoice Date"
              value={DateJS.getFormatDate(info.paymentDue, 'DD MMM YYYY')}
            />
            <div className="row-span-2">
              <LabelValue label="Bill To" value={info.clientName} />
              <div className="mt-2 tablet:mt-3">
                <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF">
                  {info.clientAddress.street}
                </Paragraph_Variant>
                <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
                  {info.clientAddress.city}
                </Paragraph_Variant>
                <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
                  {info.clientAddress.postCode}
                </Paragraph_Variant>
                <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF mt-2">
                  {info.clientAddress.country}
                </Paragraph_Variant>
              </div>
            </div>
            <LabelValue
              label="Payment Due"
              value={DateJS.getFormatDate(info.paymentDue, 'DD MMM YYYY')}
            />
          </div>
          <div className="mt-8 tablet:mt-0">
            <LabelValue label="Sent To" value={info.clientEmail} />
          </div>
        </div>
      </div>

      {/* Enlist */}
      <div className="mt-10 tablet:mt-12">
        <div className="p-6 tablet:p-8 rounded-tl-lg rounded-tr-lg bg-light-F9 dark:bg-dark-25">
          {/* Table headings */}
          <div className="hidden tablet:grid grid-cols-10 gap-x-6">
            <div className="col-span-5">
              <Paragraph className="!text-pale-7E dark:!text-gray-DF">
                Item Name
              </Paragraph>
            </div>
            <div className="col-span-1">
              <Paragraph className="!text-pale-7E dark:!text-gray-DF text-center">
                QTY.
              </Paragraph>
            </div>
            <div className="col-span-2">
              <Paragraph className="!text-pale-7E dark:!text-gray-DF text-right">
                Price
              </Paragraph>
            </div>
            <div className="col-span-2">
              <Paragraph className="!text-pale-7E dark:!text-gray-DF text-right">
                Total
              </Paragraph>
            </div>
          </div>

          {/* Table items */}
          <div className="mt-0 tablet:mt-9">
            {info.items.map((item, key) => (
              <EnlistItem key={key} {...item} />
            ))}
          </div>
        </div>
        <div className="p-6 tablet:p-8 rounded-bl-lg rounded-br-lg bg-dark-37 dark:bg-dark-0C">
          <div className="flex items-center justify-between gap-x-2">
            <Paragraph className="!text-white">Amount Due</Paragraph>
            <Heading_M className="!text-white leading-8">
              £ {info.total}
            </Heading_M>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

const EnlistItem = (props: InvoiceItemType) => {
  return (
    <div className="w-full mt-6 tablet:mt-8 first:mt-0">
      {/* Phone only */}
      <div className="tablet:hidden flex items-center justify-between gap-x-3">
        <div className="">
          <Heading_S_Variant className="mb-2">{props.name}</Heading_S_Variant>
          <Heading_S_Variant className="!text-pale-7E dark:!text-gray-88">
            {props.quantity} x £ {props.price}
          </Heading_S_Variant>
        </div>
        <Heading_S_Variant className="">£ {props.total}</Heading_S_Variant>
      </div>
      {/* Tablet and bigger */}
      <div className="hidden tablet:grid grid-cols-10 gap-x-6">
        <div className="col-span-5">
          <Paragraph className="!text-pale-7E dark:!text-gray-DF">
            {props.name}
          </Paragraph>
        </div>
        <div className="col-span-1">
          <Paragraph className="!text-pale-7E dark:!text-gray-DF text-center">
            {props.quantity}
          </Paragraph>
        </div>
        <div className="col-span-2">
          <Paragraph className="!text-pale-7E dark:!text-gray-DF text-right">
            £ {props.price}
          </Paragraph>
        </div>
        <div className="col-span-2">
          <Paragraph className="!text-pale-7E dark:!text-gray-DF text-right">
            £ {props.total}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

const LabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="w-full">
      <Paragraph_Variant className="!text-pale-7E dark:!text-gray-DF capitalize">
        {label}
      </Paragraph_Variant>
      <Heading_S_Variant className="mt-[13px]">{value}</Heading_S_Variant>
    </div>
  );
};

export default DetailedInfo;
