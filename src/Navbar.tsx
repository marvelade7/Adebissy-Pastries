import React from 'react';

const Navbar = () => {
    const phoneNumber = '2347012893212'; // Replace with your phone number
    const message = encodeURIComponent('Hello, I would like to place an order.'); // Customize the message  
    return (
        <>
            <nav className='flex items-center justify-between shadow-lg px-5 py-1 bg-[#999471] fixed top-10 right-35 left-35 rounded-full z-50'>
                <img src="logo.png" width='90' />
                <ul className='flex items-center gap-10'>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Home</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Menu</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>About</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Delivery</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Contact</li>
                </ul>
                <a href={`https://wa.me/${phoneNumber}?text=${message}`} className='bg-[#F9CA46] rounded-[25px] py-2 px-7 font-medium cursor-pointer hover:border hover:border-[#F9CA46] hover:text-[#F9CA46] hover:bg-transparent'>Order Now</a>
            </nav>
        </>
    );
};

export default Navbar;