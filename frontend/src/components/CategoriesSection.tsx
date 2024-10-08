import React,{ ReactNode } from "react";

type CategoryItem ={
    category:{
        title: string;
        card:{ title: string; icon: ReactNode; rating: string; skills: string;}[]
    }
}


export const Category = React.memo(({items}:{items:CategoryItem}) => {
    return (<>
     {/* <!-- Category Section --> */}
     <div className="relative max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">


<div className="max-w-5xl mx-auto ">
<p>{items.category.title}</p>
    {/* <!-- Grid --> */}
    <div className="grid justify-items-center sm:grid-cols-2 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-12">
      
       {items.category.card.map((card, index)=>(
         <div key={index}>
         <p>{card.title}</p>
         <p>{card.icon}</p>
         <p>{card.rating}</p>
         <p>{card.skills}</p>
         </div>
       ))}
        {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
</div>
</div>
{/* <!-- End Category Section --> */} 
    </>);
  });


  export const categoryData = {
    category: {
        title:'Browse Talent by Category',
        card: [{title: 'Development & IT', icon:<></>, rating:'4.8/5', skills:'459'},
            {title: 'Development & IT', icon:<></>, rating:'4.8/5', skills:'459'},
            {title: 'Development & IT', icon:<></>, rating:'4.8/5', skills:'459'},
            {title: 'Development & IT', icon:<></>, rating:'4.8/5', skills:'459'},
            {title: 'Development & IT', icon:<></>, rating:'4.8/5', skills:'459'},
            {title: 'Development & IT', icon:<></>, rating:'4.8/5', skills:'459'},
        ]
    }
  }