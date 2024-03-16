import ProfileIcon from '../../assets/images/Frame 5.jpg';
import { CiSearch } from "react-icons/ci";
import Banner from '../../assets/images/Rectangle 1.jpg';
const Header = () => {
    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  gap-10 text-[16px]">
                   <li>Home</li>
                   <li>Recipes</li>
                   <li>About</li>
                   <li>Search</li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <input className='rounded-3xl relative bg-[#150B2B0D] py-3 px-10' type="text" name="" id="" placeholder='Search'/>
                <button className='text-xl absolute lg:right-[545px]'><CiSearch /></button>
                <a><img src={ProfileIcon} alt="" /></a>
            </div>
        </div>
        <div className='my-10'>
            <div className='relative'>
             <img className='w-[1420px] mx-auto' src={Banner} alt="" />
            </div>
            <div className='absolute text-center lg:top-[270px] top-[120px] lg:right-[480px] lg:w-[1000px] mx-auto'>
                <h1 className='lg:text-6xl text-2xl font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='lg:my-6 my-2 text-white lg:text-lg'> Learn culinary skills, techniques, and recipes personalized to your preferences and Master dishes tailored to your tastes with expert guidance and hands-on practice in a supportive environment.</p>
                <button className='rounded-[30px] bg-green-400 py-3 px-5 mt-4 text-xl'>Explore Now</button>
                <button className='rounded-[30px] bg-slate-300 py-3 px-4 ml-3 mt-4 text-xl'>Our Feedback</button>
            </div>
        </div>
        </div>
    );
};

export default Header;