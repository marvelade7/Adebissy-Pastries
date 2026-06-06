import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const phoneNumber = '2347012893212'; // Replace with your phone number
    const message = encodeURIComponent('Hello, I would like to place an order.'); // Customize the message  
    return (
        <>
            <nav data-aos='fade-down' data-aos-delay='100' className='fixed top-4 left-3 right-3 md:top-8 md:left-8 md:right-8 lg:top-10 lg:left-35 lg:right-35 z-50 rounded-2xl md:rounded-full bg-[#999471] px-4 py-2 shadow-lg md:px-5 md:py-1'>
                <div className='flex items-center justify-between'>
                <img src="logo.png" className='w-14 sm:w-16 md:w-22.5' />
                <ul className='hidden md:flex items-center gap-4 lg:gap-10'>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Home</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Menu</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>About</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Delivery</li>
                    <li className='text-white font-medium cursor-pointer hover:opacity-75'>Contact</li>
                </ul>
                <div className='flex items-center gap-3'>
                    <a href={`https://wa.me/${phoneNumber}?text=${message}`} className='bg-[#F9CA46] rounded-[25px] px-4 py-2 text-sm font-medium cursor-pointer hover:border hover:border-[#F9CA46] hover:text-[#F9CA46] hover:bg-transparent md:px-7 md:text-base'>Order Now</a>
                    <button
                        type='button'
                        className='text-[#72462C] md:hidden'
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label='Toggle navigation menu'
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-7 w-7 fill-current'>
                            {menuOpen ? (
                                <path d='M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4Z' />
                            ) : (
                                <path d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z' />
                            )}
                        </svg>
                    </button>
                </div>
                </div>
                {menuOpen && (
                    <ul data-aos='fade-down' data-aos-duration='450' className='mt-3 flex flex-col gap-2 rounded-xl bg-[#8d8868] p-3 md:hidden'>
                        <li className='text-[#72462C] font-medium cursor-pointer hover:opacity-75'>Home</li>
                        <li className='text-[#72462C] font-medium cursor-pointer hover:opacity-75'>Menu</li>
                        <li className='text-[#72462C] font-medium cursor-pointer hover:opacity-75'>About</li>
                        <li className='text-[#72462C] font-medium cursor-pointer hover:opacity-75'>Delivery</li>
                        <li className='text-[#72462C] font-medium cursor-pointer hover:opacity-75'>Contact</li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navbar;