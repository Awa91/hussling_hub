import React from "react";
type productCarouselData = {
    
   product:{ title: string;
    img: string;
    imgText: string;
    description: string;
    cta: string;
    ctaUrl: string}[]
}

export const ProductsCarousel = React.memo(({ items }: { items: productCarouselData }) => {
    console.log('Product carousel');
    return (<>
    {/* <section className="sm:pl-10 sm:pr-10 md:pl-16 md:pr-16 lg:pr-52 lg:pl-52 xl:pl-64 xl:pr-64 2xl:pl-80 2xl:pr-80  "> */}
      <div>
      <div className="container   mx-auto w-full overflow-hidden mt-[5px] relative">
            <div className="w-full h-full relative">
                <div className="w-1/4 h-full relative z-50 left-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                <div className="w-1/4 h-full relative z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
            </div>
            
            <div className="carousel-items  flex items-center  justify-center " style={{ width: 'fit-content; animation: carouselAnim 10s infinite alternate linear' }}>
                {items.product.map((item, index) => (
                    <div key={index} className="carousel-focus  flex font-poppins items-center flex-col relative bg-secondary mx-5 my-10 px-4 py-3 rounded-2xl shadow-2xl" style={{ width: '270px', height:'300px' }}>
                        <span className="text-primary font-light text-sm mb-3">{item.title}</span>
                        <img className="h-16 w-16 rounded-full shadow-2xl" src={item.img} alt={item.imgText} />
                        <p className="mt-3 text-description font-extralight text-center text-sm">{item.description}</p>
                        <button className="mt-4 mb-2 bg-primary rounded-full px-20 py-1 text-button font-thin text-sm hover:bg-[#a68989] focus:outline-none w-max "><a href={item.ctaUrl}>{item.cta}</a></button>
                    </div>
                ))}
            </div>
           
        </div>
      </div>

      {/* </section> */}
      
      </>);  
  });
  
  

export const productCarouselData = {

   
    product: [{
      title: 'Program',
      img: './frontend-program.png',
      imgText: 'developer',
      description: ' the shortest time possible...',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
  
    {
      title: 'Program',
      img: './backend-program.png',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
  
    {
      title: ' Program',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
    {
      title: ' Program',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
    {
      title: ' Program',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
    {
      title: ' Program',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
  
   
    
    ]
  };




  export const productCarouselData1 = {

   
    product: [{
      title: 'T1',
      img: './frontend-program.png',
      imgText: 'developer',
      description: ' the shortest time possible...',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
  
    {
      title: 'T1',
      img: './backend-program.png',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
  
    {
      title: ' T1',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
    {
      title: ' T1',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
    {
      title: ' T1',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
    {
      title: ' T1',
      img: '',
      imgText: 'developer',
      description: '',
      cta: 'Expore more!',
      ctaUrl: '/',
    },
  
   
    
    ]
  };

