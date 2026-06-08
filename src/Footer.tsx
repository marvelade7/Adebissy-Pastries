const Footer = () => {
    const phoneNumber = '2348134794011';
    const message = encodeURIComponent('Hello,\n\n My name is ... \n\nI would like to place an order.');
    return (
        <footer
            id='contact'
            data-aos='fade-up'
            data-aos-duration='800'
            className='scroll-mt-28 md:scroll-mt-32 w-full px-4 pt-10 pb-15 sm:px-8 md:py-15 lg:px-20'
        >
            <div className='flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
                <div data-aos='fade-up' data-aos-delay='100' className='flex-2'>
                    <img src='./logo.png' alt='Adebissy’s Pastries logo' className='w-40 sm:w-52 md:w-64' />
                    <p className='mt-4 text-base sm:text-lg md:w-2/3'>
                        <i>Freshly baked pastries and tasty treats made for every craving</i>
                    </p>
                </div>

                <div data-aos='fade-up' data-aos-delay='200' className='flex-1'>
                    <h3 className='mb-4 text-lg font-semibold text-[#522E1F] md:text-xl'>Quick Links</h3>
                    <ul>
                        <li className='mb-3 text-md text-[#522E1F] md:text-lg'><a href='#home' className='hover:opacity-75'>Home</a></li>
                        <li className='mb-3 text-md text-[#522E1F] md:text-lg'><a href='#menu' className='hover:opacity-75'>Menu</a></li>
                        <li className='mb-3 text-md text-[#522E1F] md:text-lg'><a href='#about' className='hover:opacity-75'>About</a></li>
                        <li className='mb-3 text-md text-[#522E1F] md:text-lg'><a href='#delivery' className='hover:opacity-75'>Delivery</a></li>
                        <li className='mb-3 text-md text-[#522E1F] md:text-lg'><a href='#contact' className='hover:opacity-75'>Contact</a></li>
                    </ul>
                </div>

                <div data-aos='fade-up' data-aos-delay='300' className='flex-1'>
                    <h3 className='text-lg font-semibold text-[#522E1F] md:text-xl'>Phone Number</h3>
                    <a href="tel:+2348134794011" target="_blank" rel="noopener noreferrer" className='mb-3 text-md text-[#522E1F] hover:opacity-75 md:text-lg'>+23481 3479 4011</a>

                    <h3 className='mt-4 text-lg font-semibold text-[#522E1F] md:text-xl'>Whatsapp</h3>
                    <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">+23481 3479 4011</a>

                    <h3 className='mt-4 text-lg font-semibold text-[#522E1F] md:text-xl'>Instagram</h3>
                    <a href="https://www.instagram.com/debissys?igsh=b3E4cWJ5MjdrMXB6" target="_blank" rel="noopener noreferrer" className='mb-3 text-md text-[#522E1F] md:text-lg hover:opacity-75'>debissys</a>

                    <h3 className='mt-4 text-lg font-semibold text-[#522E1F] md:text-xl'>Tik Tok</h3>
                    <a href="https://vm.tiktok.com/ZS92361ALyXNh-5J9Rw/" target="_blank" rel="noopener noreferrer" className='mb-3 text-md text-[#522E1F] md:text-lg hover:opacity-75'>Adebissy&apos;s pastries</a>
                </div>

                <div data-aos='fade-up' data-aos-delay='400' className='flex-1'>
                    <h3 className='text-lg font-semibold text-[#522E1F] md:text-xl'>Monday - Saturday</h3>
                    <p className='mb-3 text-md text-[#522E1F] md:text-lg'>09:00 AM - 06:00 PM</p>

                    <h3 className='mt-4 text-lg font-semibold text-[#522E1F] md:text-xl'>Sunday</h3>
                    <p className='mb-3 text-md text-[#522E1F] md:text-lg'>Closed</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;