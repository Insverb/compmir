import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { BiLogoMastercard} from 'react-icons/bi'
import { BsGooglePlay } from 'react-icons/bs'
import { BsApple } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className="bg-[#212529]">
            <div className="container lg:flex lg:justify-around pt-[50px] pb-[15px]">
                <div className="pb-5">
                    <div className='text-center'>
                        <h3 className="mb-[20px] text-xl">CONTACTS</h3>
                        <div className="flex justify-center gap-2">
                            <div className="text-2xl"><BsFillTelephoneFill /></div>
                            <div className="text-xl mb-[15px]">954-00-34</div>
                        </div>
                        <div>
                            <NavLink className='hover:text-violet-500 transition duration-500 ease-in-out' to='/map'>Map</NavLink>
                        </div>
                        <div className="mt-[40px] text-5xl flex gap-1 justify-center">
                            <div><FaCcVisa /></div>
                            <div><BiLogoMastercard /></div>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="text-center">
                        <h3 className="mb-[20px] text-xl">ABOUT</h3>
                        <div>About company</div>
                        <div>News</div>
                        <div>Career</div>
                    </div> 
                </div>
                <div className="pb-5">
                    <div className="text-center">
                        <h3 className="mb-[20px] text-xl">INFORMATION</h3>
                        <div>Privacy Policy</div>
                        <div>Guarantees</div>
                        <div>Return policy</div>
                    </div>
                </div>
                <div>
                    <div className="mb-[20px] text-xl text-center">Become a fan now, follow or rate</div>
                    <div className="flex text-2xl lg:justify-between gap-5 justify-center">
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><FaTelegramPlane /></NavLink></div>
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><FaTiktok /></NavLink></div>
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><FaInstagram /></NavLink></div>
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><FaTwitterSquare /></NavLink></div>
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><FaFacebookF /></NavLink></div>
                    </div>
                    <div className="mt-[30px] mb-[20px] text-xl text-center">Download from:</div>
                    <div className="flex text-2xl justify-center gap-4">
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><BsGooglePlay /></NavLink></div>
                        <div><NavLink className='hover:text-violet-300 ver:text-violet-300 transition duration-500 ease-in-out'><BsApple /></NavLink></div>
                    </div>
                </div>
                
            </div>
            <div className="pt-[10px] pb-[30px] text-center"> © GR GROUP 2023 </div>
        </footer>
    )
}

export default Footer;