import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>  {
        event.preventDefault();
    }

    return (
        <div className="container mx-auto py-10 text-black">
            <div className="flex justify-center">
                <form className="w-[300px] border border-gray-500 rounded-lg pb-3" onSubmit={handleSubmit} >
                        <div className="p-5">
                            <input className="w-full p-2 rounded-lg" type="text" placeholder="Enter your email or phone number" onChange={ e => setEmail(e.target.value)} />
                            <input className="mt-3 w-full p-2 rounded-lg" type="password" placeholder="Enter password" onChange={ e => setPassword(e.target.value)} />
                        </div>
                        <div className="px-5 text-white">

                        <button className=" text-sm w-full transition duration-500 ease-in-out bg-violet-800 px-5 py-2 rounded-full hover:bg-violet-500">Sign In</button>
                        <div className="mt-8">Don't have account? <NavLink to='/signUp' className='text-violet-500'>Sign Up</NavLink></div> 
                        </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;