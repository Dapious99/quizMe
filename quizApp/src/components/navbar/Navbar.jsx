import React from 'react'

const Navbar = () => {
  return (
    <nav className="px-[3rem] bg-gray-400">
      <div className='flex justify-between items-center'>
        <p className='italic font-medium text-[1.5rem]'>quizMe</p>
        <ul className="flex p-4 gap-6 text-[1.2rem]">
          <li className="">
            <a href="/" className="">
              Home
            </a>
          </li>
          <li className="relative group">
            <p className="">
              Category
            </p>
            <ul className="ml-2 absolute hidden p-2 group-hover:block">
              <a href="#" className="block py-2">
                Politics
              </a>

              <a href="#" className="block py-2">
                Programming
              </a>

              <a href="#" className="block py-2">
                Automobile
              </a>
            </ul>
          </li>
          <li>
            <a href="/about" className="">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar