import { Swiper, SwiperSlide } from 'swiper/react'
import slides from './../data/slides.json';
import 'swiper/css';
import {GiProcessor} from 'react-icons/gi'


const Slider = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                    1280: {
                      slidesPerView: 2,
                    }
                  }}
        >   
            {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <div className='rounded-3xl bg-[#131313] pb-8 px-16'>
                      <img className='rounded-3xl mx-auto sm:h-[400px]' src={slide.image} alt="" />
                      <hr className='mb-4'/>
                      <div className='pt-2 text-3xl pb-4'>{slide.title}</div>
                      <div className='text-lg text-gray-400 flex flex-col gap-y-2'>
                        <div>{slide.processor}</div>
                        <div>{slide['graphics cards']}</div>
                        <div>RAM: {slide.ram}</div>
                        <div>SSD: {slide.ssd}</div>
                        <div>{slide['water cooling']}</div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-3'>
                        <div className='text-2xl'>{new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          }).format(slide.price)}
                        </div>
                        <button className="transition duration-500 ease-in-out bg-violet-800 px-5 py-2 rounded-full hover:bg-violet-500">Add to Basket</button>
                      </div>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper> 
    )
}

export default Slider;