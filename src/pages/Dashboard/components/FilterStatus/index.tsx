import React from 'react';
import style from './style.module.css';
import IconArrowDown from '@/components/Icons/IconArrowDown';
import { Heading_S } from '@/components/Typography';

type Props = {};

const FilterStatus = (props: Props) => {
  return (
    <div className={style.switcher_container}>
      <label
        className={[style.switcher_result, 'text-dark-2D dark:text-white'].join(
          ' '
        )}
        htmlFor={'filter-status'}
      >
        {/* <span className="font-bold text-lg">Filter</span> */}
        <Heading_S>Filter</Heading_S>
        <span className="ml-3 block">
          <IconArrowDown />
        </span>
      </label>
      <input
        type="checkbox"
        id="filter-status"
        hidden
        className={style.switch_toggle}
      />
      <label className={style.overlay_hidden} htmlFor={'font-switcher'}></label>
      <div className={style.switcher_overlay}>
        {/* <ul className={style.switch_list}>
          {Object.values(FONTS).map((e, i) => {
            const isActive = e.value == showFont.value;
            return (
              <li
                key={i}
                className={[
                  style.switch_item,
                  `${fontByIndex[i]}`,
                  isActive ? style.active : '',
                ].join(' ')}
              >
                <label htmlFor={'font-switcher'} onClick={() => changeFont(i)}>
                  {e.label}
                </label>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default FilterStatus;
