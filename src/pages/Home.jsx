import Slider from "../UI/Slider";
import cards from './../data/cards.json';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="container relative mx-auto p-0">
           
            <div className="relative">
            <div className="absolute w-full h-full bg-black/[0.4] top-0 left-0"></div>
                <video src="./video.mp4" autoPlay muted loop />
                <div className="flex flex-col items-center justify-center absolute top-56 w-[100%] text-white text-2xl">
                    <div className="mb-5 text-3xl text-slate-300">Superiority of strength</div>
                    <div className="text-5xl">CYBER</div>
                </div>
            </div>

            <div className="container mx-auto pt-[50px] sm:px-[100px] h-auto">
                <Slider slides={cards}/>
            </div>

            <div className='container mx-auto'>
                <div className='px-10 py-10 lg:flex lg:gap-3'>
                    <NavLink to='/pc' className='flex flex-col bg-[#161616] p-5 rounded-2xl mb-3 lg:mb-0'>
                        <img className='w-[100%]'  src="/custom.jpg" alt="" />
                        <div className='mt-4 text-2xl'>
                            Custom PCs
                        </div>
                    </NavLink>
                    
                    <NavLink to='/laptops' className='flex flex-col justify-end bg-[#161616] p-5 rounded-2xl mb-3 lg:mb-0'>
                        <img className='w-[100%]' src="/asus.jpg" alt="" />
                        <div className='mt-4 text-2xl'>
                            Laptops
                        </div>
                    </NavLink>
                    
                    <NavLink to='computer&office' className='flex flex-col justify-end bg-[#161616] p-5 rounded-2xl mb-3 lg:mb-0'>
                        <img className='w-[100%]' src="/devices.jpg" alt="" />
                        <div className='mt-4 text-2xl'>
                            Devices
                        </div>
                    </NavLink>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;