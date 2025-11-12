import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'
import UserDropdown from './UserDropdown'

const Header = () => {
  return (
    <header>
      <div className='flex justify-between items-center py-4 px-10 bg-gray-900 shadow-md'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="Logo" width={140} height={33} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
          <Navitems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header