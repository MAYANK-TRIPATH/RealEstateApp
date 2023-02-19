import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
<header className='py-6 mb-12 border-b'>
  <div className='container mx-auto flex justify-between items-center'>

    <div className='flex items-center gap-6'>
      <Link  className='hover:text-orange-900 transition' to=''>
        Log In
      </Link>
      <Link className='bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg transition' to=''>
        Sign up
      </Link>
  </div>
  </div>
</header>
  );
};
export default Header;
