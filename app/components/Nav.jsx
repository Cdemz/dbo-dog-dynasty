'use client';
import Image from 'next/image';
import { GrFormClose } from 'react-icons/gr';
import { HiMenuAlt3 } from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-[var(--color-bg)]">
      <nav className="flex px-4 min-h-[40px] h-[70px] items-center justify-between w-full">
        <div className="w-[95%] items-center justify-between flex mx-auto">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/images/DBO DOG  DYNASTY.png"
                alt="My Image"
                width={100}
                height={50}
                priority={true}
                className="  mr-[55px] w-auto h-auto flex-1"
              />
            </Link>
          </div>
          <ul className="hidden md:flex gap-4 text-white  ">
            <Link href="/">
              <li>Home</li>
            </Link>

            <Link href="/about">
              <li>About</li>
            </Link>

            <Link href="/">
              <li>Sessions</li>
            </Link>

            <Link href="/">
              <li>FAQ</li>
            </Link>

            <Link href="/">
              <li>Financing</li>
            </Link>
          </ul>
          <button className=" bg-[var(--color-primary-variant)] px-4 py-2   rounded-2xl ">
            Register
          </button>

          <div
            onClick={handleNav}
            className="md:hidden font-bold text-[#000000]  "
          >
            {!nav ? <HiMenuAlt3 size={26} /> : <GrFormClose size={26} />}
          </div>

          {/* mobile navigation  */}
          <div
            className={
              nav
                ? 'fixed right-0 top-[4.2rem] w-[60%] rounded-2xl border-r border-r-gray-900  bg-black ease-in-out duration-500 shadow-lg shadow-black z-20'
                : 'fixed left-[-100%] '
            }
          >
            <ul className="flex gap-4 text-[var(--color-primary-variant)] flex-col justify-center items-center py-4">
              <Link href="/">
                <li>Home</li>
              </Link>

              <Link href="/about">
                <li>About</li>
              </Link>

              <Link href="/">
                <li>Sessions</li>
              </Link>

              <Link href="/">
                <li>FAQ</li>
              </Link>

              <Link href="/">
                <li>Financing</li>
              </Link>
            </ul>
          </div>

          {/* mobile navigation end */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
