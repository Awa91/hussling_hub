import React,{ReactNode} from "react";

type PopularitySectionProps = {
    grid: {
        col1:{
            title: string;
            description: string;
            card:{
                img: string;
                imgLabel: string;
                title: string;
            }[]
        },
        col2:{
            bgImg: string;
            bgImgLabel: string;
            // img1: string;
            // img1Label: string;
            // img2: string;
            // img2Label: string;
            // img3: string;
            // img3Label: string;
            // card: ReactNode;
        }
    }
    }


export const PopularitySection = React.memo(({items}: {items:PopularitySectionProps }) => {
    return (<>
     {/* <!-- Popularity Section --> */}
     <div className="relative max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">


<div className="max-w-5xl mx-auto ">
    {/* <!-- Grid --> */}
    <div className="grid justify-items-center sm:grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-12">
        <div >
        <p>{items.grid.col1.title}</p>
        <p>{items.grid.col1.description}</p>

      <div className="grid justify-items-center  mt-6  grid-cols-2  gap-6 ">
      {
            items.grid.col1.card.map((card, index)=>(
               <div >
                 <div key={index}>
                    <img src={card.img} alt={card.imgLabel}/>
                    <p>{card.title}</p>
                </div>  
               </div>
            ))
        }
      </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
           <div className="">
           <img className=' h-[479.68px] w-[327.11px] object-contain mix-blend-overlay' src={items.grid.col2.bgImg} alt={items.grid.col2.bgImgLabel} />
           
           </div>
           {/* <div className="absolute -mt-80 ml-64 ">
            {items.grid.col2.card}
           </div>
           <img src={items.grid.col2.img1}  alt={items.grid.col2.img1Label} className="w-[327.11px] -mt-52  mix-blend-soft-light  "/>
            <img src={items.grid.col2.img2} alt={items.grid.col2.img2Label} className="h-7 w-7"/>
            <img src={items.grid.col2.img3} alt={items.grid.col2.img3Label} className="ml-72 -mt-8"/> */}
        </div>
        {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
</div>
</div>
{/* <!-- End Popularity Section --> */}
    </>);
  });

  

  export const popularitySectionData = {

    grid: {
        col1:{
            title: 'Why We are Most Popular',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non quis, modi reprehenderit neque vel explicabo, laborum doloribus quod eveniet dolorem excepturi possimus. Quae error quos alias ullam, magni inventore',
            card:[{
                img: '/img/Portal.png',
                imgLabel: '',
                title: 'Quality Job'
            },
            {
                img: '/img/Portal.png',
                imgLabel: '',
                title: 'Top Companies'
            },{
                img: '/img/Portal.png',
                imgLabel: '',
                title: 'No Extra Charge'
            },
            {
                img: '/img/Portal.png',
                imgLabel: '',
                title: 'International Job'
            }]
        },
        col2:{
            bgImg: '/img/right side.png',
            bgImgLabel: '',
            // img1:'',
            // img1Label: '',
            // img2: '',
            // img2Label: '',
            // img3: '',
            // img3Label: '',
            // card: <></>
        }
    }
  }