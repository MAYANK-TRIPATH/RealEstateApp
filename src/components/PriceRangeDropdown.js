import React, { useState, useEffect, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine}
from 'react-icons/ri';
// importing headless ui
import { Menu } from '@headlessui/react';
// importing house context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } =
  useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '10000-20000',
    },
    {
      value: '20000-30000',
    },
    {
      value: '30000-40000',
    },
    {
      value: '40000-50000',
    },
    {
      value: '50000-60000',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
      className='dropdown-btn w-full text-left'>
        <RiWallet3Line
        className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading
          -tight'>{price}</div>
          <div className='text-[13px]'>Choose Price range</div>
          {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )}
        </div>
      </Menu.Button>

     <Menu.Items className='dropdown-menu'>
      {prices?.map((price, index) => {
        return (
          <Menu.Item
          onClick={() => setPrice(price.value)}
          className='cursor-pointer hover:text-orange-700 
          transition' as='li'
          key={index}>
            {price.value}
          </Menu.Item>
        );
      })}
     </Menu.Items>
    </Menu>
  );
 
};

export default PriceRangeDropdown;