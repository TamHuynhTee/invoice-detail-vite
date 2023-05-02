export type SectionComponentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const SectionComponent = ({
  children,
  className = 'placeholder:',
  ...restProps
}: SectionComponentProps) => {
  return (
    <div
      className={[
        'bg-white w-full dark:bg-dark-1E p-6 rounded-lg',
        className,
      ].join(' ')}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default SectionComponent;
