import { useState } from "react";
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import {
//   Bars4Icon,
// } from "@heroicons/react/24/outline";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  mobileMenuSections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  logo: string;
  title: string;
  logoLabel: string;
}

export default function Header(props: HeaderProps) {
  const { sections, logo, logoLabel, title, mobileMenuSections } = props;
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const handleClick = () => setMobileMenu(!mobileMenu);
  const handleClose = () => {
    setMobileMenu(false);
  };
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setMobileMenu(false);
    }
  };
  return (
   
    <>
     <div  className="md:flex relative">


        {/* Navigation bar on large screen */}
{/*         
        <div className='w-screen bg-primary h-[70px]  z-10  fixed drop-shadow-sm drop-shadow-lg drop-shadow-md drop-shadow-xl drop-shadow-2xl dark:bg-primary '>
        <div className="absolute w-full  bg-[#ffffff] "><h1 className="flex items-center">Marketing campaign</h1></div> */}
        
       <div>
        
        {/* <div className='px-2 flex justify-between items-center mt-4  w-full h-full'> */}
          <div className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <div className='flex items-center'>
            <img src={logo} alt={logoLabel} height="50px" width="50px" />
            <h1 className='text-3xl font-bold animate-pulse bg-gradient-to-r from-[#FFD700] via-green-500 to-white bg-clip-text text-transparent  sm:pr-4 sm:pl-0 md:p-9 lg:pr-48 xl:pr-56 2xl:pr-96 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0'>{title}</h1>
            <ul className='hidden   text-primary md:flex lg:flex xl:flex 2xl:flex '>
              <li className='cursor-pointer block'>
                {sections.map((section, index) => (
                  <a href={section.url} key={index} className="py-2 pr-4 pl-3 m-2  text-[#000000] rounded bg-primary md:bg-primary lg:bg-primary xl:bg-primary 2xl:bg-primary  md:text-primary lg:text-primary xl:text-primary 2xl:text-primary md:p-0 xl:p-0 2xl:p-0 lg:p-0 dark:text-primary hover:bg-secondary hover:text-secondary hover:rounded-lg" aria-current="page">
                    {section.title}
                  </a>
                ))}
              </li>
            </ul>
          </div>

          {/* User Logged in menu */}
          <div className="sm:ml-80 md:m-8 m-12">
            {isUserLoggedIn ? (<>
              <div>
                <button className="flex items-center justify-between w-full text-left font-semibold py-2 ">
                  <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" stroke="#41614B" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>

                </button>
              </div>

            </>) : null}</div>

          {/* Demo begins */}
          {/* <div className='flex items-center'>
      <button onClick={() => scrollToSection('features')} >
        Features
      </button>

    </div> */}
          {/* Ends */}
          <div className='md:hidden lg:hidden xl:hidden 2xl:hidden mr-4 ' onClick={handleClick}>
            {!mobileMenu ? 
            // <Bars4Icon className='w-5 text-primary' /> 
<p> X </p>            : <div className='flex'>
              <span className="sr-only">Open user menu</span>
              {/* <XMarkIcon className='w-5 text-primary' onClick={handleClose} /> */}
           X
            </div>}
          </div>
        </div>
        {/* Navigation on small screens */}
        <ul className={!mobileMenu ? 'hidden' : 'absolute sm:bg-primary w-full px-8  md:hidden '}>
          <li className=' w-full sm:bg-primary'>

            {mobileMenuSections.map((section, index) => (
              <a href={section.url} key={index} className="block py-2 pr-4 pl-3 text-primary rounded sm:bg-primary dark:text-primary hover:bg-secondary hover:text-secondary hover:rounded-lg" aria-current="page">
                {section.title}
              </a>
            ))}
          </li>
        </ul>
        <div className="absolute w-full  bg-[#ffffff] pt-0"><h1>Marketing campaign</h1></div>
        
      </div>
     
     </div>
      </>
     
  );
}