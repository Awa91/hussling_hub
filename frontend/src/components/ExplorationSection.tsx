import React,{} from "react";


type ExplorationSectionProps = {
    grid: {
        col1:{
            title: string;
            description: string;
            cta: string;
            ctaUrl: string;
        },
        col2:{
            img1: string;
            img1Label: string;
            img2: string;
            img2Label: string;
            img3: string;
            img3Label: string;
            img4: string;
            img4Label: string;
            bgImg: string;
            bgImgLabel: string;
            
        }
    }
    }


export const ExplorationSection = React.memo(({items}: {items: ExplorationSectionProps}) => {
    return (<>
      {/* <!-- Exploration Section --> */}
      <div className="relative max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
<div className="max-w-5xl mx-auto "   >
    {/* <!-- Grid --> */}
    <div className="w-[1120px] h-[327px]  rounded-2xl grid justify-items-center sm:grid-cols-1 mt-6  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-12 bg-gradient-to-r from-blue-600  to-blue-500" >
        <div >
        <p>{items.grid.col1.title}</p>
        <p>{items.grid.col1.description}</p>
      <a href={items.grid.col1.ctaUrl}>
        {items.grid.col1.cta}
      </a>
        </div>
        {/* <!-- End Col --> */}
        <div>
           <div className="">
           <img className=' h-[479.68px] w-[852.56px] object-contain -mt-20' src={items.grid.col2.bgImg} alt={items.grid.col2.bgImgLabel} />
           </div>
           <img src={items.grid.col2.img1}  alt={items.grid.col2.img1Label} className="w-[32.11px] -mt-80 ml-96 absolute  "/>
            <img src={items.grid.col2.img2} alt={items.grid.col2.img2Label} className="h-7 w-7 absolute -mt-60 ml-[400px]"/>
            <img src={items.grid.col2.img3} alt={items.grid.col2.img3Label} className="ml-24 -mt-28 absolute"/>
            <img src={items.grid.col2.img4} alt={items.grid.col2.img4Label} className="ml-2 -mt-44 mix-blend-screen  absolute
            
            "/>
        </div>
        {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
</div>
</div>
{/* <!-- End Exploration Section --> */}
    </>);
  });


  export const explorationSectionData = {
    grid: {
        col1:{
            title: 'Explore New Jobs Now',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rem veniam aperiam perspiciatis sapiente, tenetur, eos iure sint corporis quaerat porro veritatis perferendis inventore, magnam atque cum minus. Illo, minus!',
            cta: 'Get Started',
            ctaUrl: '/sign_up',
        },
        col2:{
            img1: '/img/Portal.png',
            img1Label: '',
            img2:'/img/Portal.png',
            img2Label: '',
            img3: '/img/Portal.png',
            img3Label: '',
            img4: '/img/object.png',
            img4Label: '',
            bgImg: '/img/Untitled design.png',
            bgImgLabel: ''
            
        }
    }
    }