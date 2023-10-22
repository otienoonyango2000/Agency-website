import React, {useEffect, useState} from 'react'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-scroll';
import {FaXmark, FaBars} from 'react-icons/fa6'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle menu
const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
}

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            } else{
                setIsSticky(false);

            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    //navitems array
    const navitems = [
        {link: "Home", path: "home"},
        {link: "Services", path: "services"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Terminal", path: "terminal"},
        {link: "FAQ", path: "faq"},
    ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 right-0 left-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300":""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='#home' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo2} alt='img' className='w-10 inline-block items-center'/><span className='text-[#263238]'>NEXCENT</span></a>
                    {/* nav items for large device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navitems.map(({link, path}) => <Link key={path} spy={true} smooth={true} offset={-100} to={path} className='block text-base text-gray900 hover:text-brandprimary 
                            first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href='' className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all rounded hover:bg-neutralGrey'>Sing Up</button>
                    </div>

                    {/* menu btn for only mobile device */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='w-6 h-6 text-neutralDGrey'/>)
                            }
                        </button>

                    </div>

                </div>

                {/* navitems for mobile device */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary 
                ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                     navitems.map(({link, path}) => <Link key={path} spy={true} smooth={true} offset={-100} to={path} className='block text-base text-white hover:text-brandprimary 
                     first:font-medium'>{link}</Link>)
                }   
                </div>
        </nav>
    </header>
  )
}

export default Navbar