import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container mx-auto py-10 text-black">
            <div className="flex justify-center ">
                <form className=" w-[500px] border border-gray-500 rounded-lg pb-3" action="">
                        <div className="p-5">
                            <input required className="w-full p-2 rounded-lg" type="email" placeholder="Enter your email" />
                            <input required className="mt-3 w-full p-2 rounded-lg" type="tel" placeholder="Enter your phone number" />
                            <input required className="mt-3 w-full p-2 rounded-lg" type="password" placeholder="Enter password" />
                            <input required className="mt-3 w-full p-2 rounded-lg" type="password" name="" id="" placeholder="Confirm password" />
                        </div>
                        <div className="px-5 text-white">
                        <button className=" text-sm w-full transition duration-500 ease-in-out bg-violet-800 px-5 py-2 rounded-full hover:bg-violet-500">Register</button>
                        <div className="mt-8">Already have an account? <NavLink to='/signIn' className='text-violet-500'>Sign In</NavLink> here</div> 
                        </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;