import React, {useContext} from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import WhenDropdown from './WhenDropdown';
// imported icon
import {RiSearch2Line} from 'react-icons/ri'
//imported context here
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return (
<div className='px-[30px] py-8 max-w-[1270px] mx-auto flex flex-col lg:flex-row
justify-between gap-4 lg:gap-x-3 relative lg:-top-1 lg:shadow-4 
bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
  <CountryDropdown />
  <PropertyDropdown />
  <PriceRangeDropdown />
  <WhenDropdown />

  <button onClick={() => handleClick()} 
  className='bg-orange-700 hover:bg-orange-800 transition w-full lg:max-w-[162px] h-16 
  rounded-lg flex justify-center items-center text-white text-lg'>
    <RiSearch2Line />
  </button >
</div>
  );
};

export default Search;
