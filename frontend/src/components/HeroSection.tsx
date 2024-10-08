import React, { ReactNode } from "react";
import { HeroCard, heroCardData } from "./HeroCard";
import { StackedAvatar } from "./StackedAvatar";

type HeroSectionProps = {
grid: {
    col1:{
        icon: string;
        title: string;
        subtitle: string;
        description: string;
        avatar: ReactNode;
        statistics: string;
    },
    col2:{
        img: string;
        imgLabel: string;
        card: ReactNode;
    }
}
}


export const HeroSection = React.memo(({items}: {items: HeroSectionProps}) => {
    return (<>
        {/* <!-- Hero Section --> */}
        <div className="relative max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">


            <div className="max-w-5xl mx-auto ">
                {/* <!-- Grid --> */}
                <div className="grid justify-items-center sm:grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-12">
                    <div >
                    <img src={items.grid.col1.icon} alt="" className="justify-center"/>
                    <p>{items.grid.col1.title}</p>
                    <p className="mt-2 text-gray-600 dark:text-neutral-400">
                            {items.grid.col1.subtitle}
                        </p>
                    <p>{items.grid.col1.description}</p>
                    <div>
                        {items.grid.col1.avatar}
                    </div>
                    <p>{items.grid.col1.statistics}</p>
                    
                       
                    </div>
                    {/* <!-- End Col --> */}

                    <div>
                       <div className="">
                       <img className=' h-[479.68px] w-[327.11px] object-contain mix-blend-overlay' src={items.grid.col2.img} alt={items.grid.col2.imgLabel} />
                       
                       </div>
                       <div className="absolute -mt-80 ml-64 ">
                        {items.grid.col2.card}
                       </div>
                       <img src="/img/object.png"  alt="" className="w-[327.11px] -mt-52  mix-blend-soft-light  "/>
                        <img src="/img/Portal.png" className="h-7 w-7"/>
                        <img src="/img/Portal.png" className="ml-72 -mt-8"/>
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
        </div>
        {/* <!-- End Hero Section --> */}
    </>);

});

export const heroSectionData = {
    grid: {
        col1:{
            icon: '/logo',
            title: 'Find Your Dream Job',
            subtitle: 'Freelance Jobs and Talents at Your Fingertips',
            description: 'Connect with top freelancers and clients on our platform! Find your perfect match for your next project.',
            avatar: <StackedAvatar/>,
            statistics: 'Over 12800+ freelancers to complete your projects'
    
        },
        col2:{
            img: '/img/removal.png',
            imgLabel: '',
            card: <HeroCard items={heroCardData}/>
        }
}
}