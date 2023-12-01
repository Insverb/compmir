import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Element } from 'react-scroll';

const ProductDetail = () => {
    const product = useSelector((state) => state.product.product); // redux
    const [scrollPosition, setScrollPosition] = useState(0); // react-scroll

    // react-scroll
    const handleSetActive = (to) => {
        console.log(to);
    };
    
    // react-scroll
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    // react-scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
        <div>
            <div className="flex justify-end gap-7 pr-24 text-[18px] sticky top-[128px] bg-black shadow-md z-50" >
                <ul className='flex justify-end gap-7 pr-24 text-[18px] py-4'>
                    <li>
                        <Link
                            className="cursor-pointer hover:text-violet-500 transition duration-500 ease-in-out"
                            activeClass="border-b-2 border-violet-500"
                            to="details" 
                            spy={true} 
                            smooth={true} 
                            offset={-200}
                            duration={500} 
                            onSetActive={handleSetActive}
                            >
                            Details
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="cursor-pointer hover:text-violet-500 transition duration-500 ease-in-out"
                            activeClass="border-b-2 border-violet-500"
                            to="design" 
                            spy={true} 
                            smooth={true} 
                            offset={-150} 
                            duration={500} 
                            onSetActive={handleSetActive}
                            >
                            Design
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="cursor-pointer hover:text-violet-500 transition duration-500 ease-in-out"
                            activeClass="border-b-2 border-violet-500"
                            to="customization" 
                            spy={true} 
                            smooth={true} 
                            offset={-60} 
                            duration={500} 
                            onSetActive={handleSetActive}
                            >
                            Customization
                        </Link>
                    </li>
                </ul>
                </div>
            <Element name="details" className='container mx-auto bg-[#111111]'>
                <div className='pl-16'>
                    <div className='flex h-[500px] items-center'>
                        <img className='w-[700px] h-[450px]' src={product.image} />
                        <div className='w-full flex justify-center items-center'>
                            <div>
                                <div className="text-5xl text-center">{product.title} </div>
                                <div className='text-2xl mt-5'>Reinventing the standard</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            <Element name="design" className='container mx-auto h-[500px]' id='design'>
                Design
            </Element>

            <Element name="customization" className='container mx-auto h-[500px]' id='customization'>
                Customization
            </Element>
        </div>
  );
};

export default ProductDetail;