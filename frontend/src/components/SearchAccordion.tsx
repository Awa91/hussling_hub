
import React,{ useState, useRef, useEffect, ReactNode } from 'react'





function SearchAccordionItem({ data, isOpen, btnOnClick }: { data: ReactNode, isOpen: boolean, btnOnClick: () => void; }) {

    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current as HTMLDivElement;
            setHeight(contentEl.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);
    return (
        <div className={`[&:not(:first-of-type)]:border border-[#ffffff] border-t-0 w-800 ${isOpen ? 'transform duration-700 ease ' : ''}`}>

            <button className="flex  items-end w-48 bg-primary border-0 pt-10 pb-4   text-md font-normal font-poppins  max-h-0.5 " onClick={btnOnClick}>
                <div className='grid grid-cols-2 grid-rows-1 '>
                   
                    <div className='col-span-2 ml-40 mt-1 '>
                        <li ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" className="size-5  " >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" className={`transform origin-center transition duration-200 ease-out  ${isOpen && '!rotate-180'}`} />
                        </svg></li>
                    </div>
                </div>                </button>

            <div className="transition duration-700 ease-in-out overflow-hidden" style={{ height }}>
                {isOpen && <div ref={contentRef} className=" pt-3 pb-6 pr-14 font-poppins bg-primary text-sm text-button font-light">{data}</div>
                }
            </div>
        </div>
    );
}





export const SearchAccordion = React.memo(({ items }: { items: ReactNode }) => {
    const [currentIdx, setCurrentIdx] = useState<number>(-1);
    const btnOnClick = (idx: number) => {
        setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
    }
    const idx: number = 0;
    return <div className="m-0 p-0 list-none  -mt-7">
       
            <SearchAccordionItem  data={items} isOpen={idx === currentIdx} btnOnClick={() => btnOnClick(idx)} />
       
    </div>;
});
