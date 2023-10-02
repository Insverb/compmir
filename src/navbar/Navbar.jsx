import { NavLink } from "react-router-dom";
import { useState } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';


const NavbarMain = () => {

    let navLinks = [
        {
            name: 'HOME',
            link: '/'
        },
        {
            name: 'PCs',
            link: '/pc'
        },
        {
            name: 'LAPTOPS',
            link: '/laptops'
        },
        {
            name: 'COMPONENTS',
            link: '/components'
        },
        {
            name: 'COMPUTER & OFFICE',
            link: '/computer&office'
        },
    ]

    const [open, setOpen] = useState(false);

    return (
        <div>
            <header className="bg-[#212529] text-violet-100 fixed z-10 w-[100%]">
                <nav className="container flex justify-between items-center w-[100%] px-5">
                    <div className="pl-4">
                        <img className="w-40 h-32" src="/logo.png" alt="" />
                    </div>

                    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-13 cursor-pointer lg:hidden">
                        {open === false ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </div>

                    <ul className="lg:flex lg:items-center gap-4 hidden">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink className='hover:text-violet-500 transition duration-500 easy-in-out' to={link.link}>{link.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="flex items-center gap-[3vw] pr-4">
                        <NavLink className='hover:text-violet-500 transition duration-500 ease-in-out' to='/basket'><AiOutlineShoppingCart className="text-3xl" /></NavLink>
                        <button className="transition duration-500 ease-in-out bg-violet-800 px-5 py-2 rounded-full hover:bg-violet-500">Sign In</button>
                    </div>
                </nav>

                {open && (
                    <ul className="pb-3">
                        {
                            navLinks.map((link, index) => (
                                <li className={(index === navLinks.length - 1) ? 'py-2' : 'py-2 border-b-2'} key={index}>
                                    <NavLink className='hover:text-violet-500 transition duration-500 ease-in-out' to={link.link}>{link.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </header>
            <div className="h-[128px]"></div>
        </div>
    )
}

export default NavbarMain;