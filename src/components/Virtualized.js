
import React, { useEffect, useState } from 'react'

export default function Virtualized({ items, itemHeight, containerHeight }) {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        startIndex + Math.ceil(containerHeight / itemHeight),
        items.length
    );
    const visibleItems = items.slice(startIndex, endIndex + 1);
 
    const handleScroll = (e) => {
        setScrollTop(e.currentTarget.scrollTop);
    };
    return (
        <>
            <h1 className='font-serif font-extrabold text-center my-6 text-4xl'><span>Virtualized</span> <span className='text-[#ff6868]'>List</span> </h1>
            <div
                style={{ height: `${containerHeight}px`, overflowY: "scroll" }}
                onScroll={handleScroll}
                className='bg-[#000000b9] text-white flex flex-col items-center shadow-xl rounded-lg mt-2 md:w-[70%] w-[90%] m-auto p-4'
            >
                <div style={{ height: `${items.length * itemHeight}px` }} >
                    <div className='md:w-[456px] w-[200px]  ' 
                        style={{
                            position: "relative",
                            height: `${visibleItems.length * itemHeight}px`,
                            top: `${startIndex * itemHeight}px`,
                        }}
                    >
                        {visibleItems.map((item) => (
                            <div key={item.id} style={{ height: `${itemHeight}px` }}  data-aos="fade-right" className='bg-[#ff6767f3] text-white font-bold flex flex-col items-center shadow-xl rounded-lg mt-2 w-full m-auto p-4 transition-opacity duration-300 hover:opacity-75'>
                                {item.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div></>
    )
}
