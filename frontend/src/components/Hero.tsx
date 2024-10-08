
import React,{ ReactNode } from "react";

type HeroData = {
    bgImg: string;
    title: ReactNode;
    description: ReactNode;
    cta: string;
    ctaUrl: string;
}

export const Hero = React.memo(({ items }: { items: HeroData }) => {
    console.log('Hero component')
    return (<>
    <div className=" pt-0 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16 lg:pl-52 lg:pr-52 xl:pl-64 xl:pr-64 2xl:pl-80 2xl:pr-80">
            {/* section starts here */}
            <section className="relative pb-2">
                <div className='w-full h-[500px] bg-gray-900/20 absolute'>
                    <img className='2xl:w-full 2xl:h-full     w-full h-[500px] object-cover mix-blend-overlay' src={items.bgImg} alt="" />
                    <div className="text-primary uppercase -mt-80 relative" >
                        <div className="flex justify-center font-poppins font-extralight text-sm mb-2 "> {items.title}</div>
                        <div className="flex justify-center font-poppins font-extralight text-sm mb-2 ml-10 mr-10">{items.description}</div>
                        <div>
                            <a className="flex font-poppins text-green-500 font-extralight text-sm justify-center" href={items.ctaUrl}>{items.cta}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div></>);
  
  });


export const heroData = {
    bgImg: '/img/bgImg1366x768.png',
    title: <><p>Looking for a service provider?</p></>,
    description: <><p>Search no more ... </p></>,
    cta: "Let's get started! ",
    ctaUrl: '/contact',
  };