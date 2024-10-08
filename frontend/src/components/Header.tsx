import React, { useState, useCallback } from "react";


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


export const Header = React.memo((props: HeaderProps) => {
    console.log('Header component');
    const { sections, logo, logoLabel, title, mobileMenuSections } = props;
    const [isMobileDevice, setMobileMenu] = useState<boolean>(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const showMobileMenu = () => setMobileMenu(!isMobileDevice);
    const hideMobileMenu = () => {
        setMobileMenu(false);
    };

    const memoizedHideMobileMenu = useCallback(hideMobileMenu, [isMobileDevice])
    const memoizedShowMobileMenu = useCallback(showMobileMenu, [isMobileDevice])
    return (<>
        {/* Navigation bar on large screen */}
        <div className='w-screen bg-green-600 h-[70px] -inset-0  z-10 fixed drop-shadow-lg dark:bg-gray-800'>

            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt={logoLabel} height="50px" width="50px" />
                    <h1 className='text-3xl font-bold animate-pulse bg-gradient-to-r from-[#FFD700] via-green-500 to-white bg-clip-text text-transparent  sm:pr-4 sm:pl-0 md:p-9 lg:pr-48 xl:pr-56 2xl:pr-96 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0'>{title}</h1>
                    <ul className='hidden   lg:flex xl:flex 2xl:flex text-primary'>
                        <li className='cursor-pointer'>
                            {sections.map((section, index) => (
                                <a href={section.url} key={index} className="py-2 pr-4 pl-3 m-2  text-primary rounded bg-primary md:bg-primary lg:bg-primary xl:bg-primary 2xl:bg-primary  md:text-primary lg:text-primary xl:text-primary 2xl:text-primary md:p-0 xl:p-0 2xl:p-0 lg:p-0 dark:text-primary hover:bg-secondary hover:text-secondary hover:rounded-lg" aria-current="page">
                                    {section.title}
                                </a>
                            ))}
                        </li>
                    </ul>
                
                    <div className="hidden   lg:flex xl:flex 2xl:flex">
                    <a className="hover:bg-[#000000] bg-white rounded-lg hover:rounded-lg hover:w-16 w-16 text-center">
                            Sign In
                    </a>
                    <a className="hover:bg-[#000000] bg-white rounded-lg hover:rounded-lg hover:w-16 w-16 text-center ml-3">
                            Sign Up
                    </a>
                    </div>
                    {/* <button type="submit" className="w-40 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
              */}
                </div>

                <div className=' lg:hidden xl:hidden 2xl:hidden mr-4' onClick={memoizedShowMobileMenu}>
                    {!isMobileDevice ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                        : <div className='flex'>
                            <span className="sr-only">Open user menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" className="size-6" onClick={memoizedHideMobileMenu}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>}
                </div>
            </div>
            {/* Navigation on small screens */}
            <ul className={!isMobileDevice ? 'hidden' : 'absolute bg-zinc-200 w-full px-8  lg:hidden xl:hidden 2xl:hidden' }>
                <li className='border-b-2 border-zinc-300 w-full'>

                    {mobileMenuSections.map((section, index) => (
                        <a href={section.url} key={index} className="block py-2 pr-4 pl-3 text-primary rounded sm:bg-primary dark:text-primary hover:bg-secondary hover:text-secondary hover:rounded-lg" aria-current="page">
                            {section.title}
                        </a>
                    ))}


                </li>
                
            </ul>
            

        </div>
    </>);

});

