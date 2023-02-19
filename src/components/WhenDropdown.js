import React, { useState, useEffect, useContext } from 'react';
import { RiCalendar2Line, RiArrowDownSLine, RiArrowUpSLine}
from 'react-icons/ri';
// importing headless ui
import { Menu } from '@headlessui/react';
// importing house context
import { HouseContext } from './HouseContext';

const WhenDropdown = () => {
  const { date, setDate } =
  useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const dates = [
    {
      value: 'Time range (any)',
    },
    {
      value: 'This Month',
    },
    {
      value: 'In 15 Days',
    },
    {
      value: 'Next Month',
    },
    {
      value: 'After 2 month',
    },
    {
      value: 'In 3 Months',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
      className='dropdown-btn w-full text-left'>
        <RiCalendar2Line
        className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading
          -tight'>{date}</div>
          <div className='text-[13px]'>Choose date range</div>
          {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )}
        </div>
      </Menu.Button>

     <Menu.Items className='dropdown-menu'>
      {dates?.map((date, index) => {
        return (
          <Menu.Item
          onClick={() => setDate(date.value)}
          className='cursor-pointer hover:text-orange-700 
          transition' as='li'
          key={index}>
            {date.value}
          </Menu.Item>
        );
      })}
     </Menu.Items>
    </Menu>
  );
 
};

export default WhenDropdown;