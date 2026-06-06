const WhyChooseUs = () => {
    return (
        <div className='px-4 md:py-15 py-10 sm:px-8 lg:px-20'>
            <h3 data-aos='fade-up' data-aos-delay='150' className='md:text-4xl text-3xl font-bold text-center md:mb-18 mb-10'>Why Choose Us</h3>
            <div data-aos='fade-up' data-aos-delay='420' className='flex flex-col w-full items-stretch gap-5 md:flex-row lg:gap-10'>
                <div className='w-full border border-[#72462c83] rounded-2xl py-6 px-6  bg-[#FFFEF7]'>
                    <img data-aos='fade-up' data-aos-delay='420' src="./heroImg3.png" width="200" className='mx-auto mb-5' />
                    <h4 data-aos='fade-up' data-aos-delay='420' className='text-2xl font-medium my-4'>Student-Friendly Prices</h4>
                    <p data-aos='fade-up' data-aos-delay='420' className='text-lg'>Delicious snacks and treats that fit your budget without compromising quality.</p>
                </div>
                
                <div data-aos='fade-up' data-aos-delay='620' className='w-full border border-[#72462c83] rounded-2xl py-6 px-6  bg-[#FFFEF7]'>
                    <img data-aos='fade-up' data-aos-delay='620' src="./heroImg3.png" width="200" className='mx-auto mb-5' />
                    <h4 data-aos='fade-up' data-aos-delay='620' className='text-2xl font-medium my-4'>Freshly Baked Goodness</h4>
                    <p data-aos='fade-up' data-aos-delay='620' className='text-lg'>Every Pastry is made fresh to give you the best taste in every bite.</p>
                </div>
                
                <div data-aos='fade-up' data-aos-delay='300' className='w-full border border-[#72462c83] rounded-2xl py-6 px-6  bg-[#FFFEF7]'>
                    <img data-aos='fade-up' data-aos-delay='300' src="./heroImg3.png" width="200" className='mx-auto mb-5' />
                    <h4 data-aos='fade-up' data-aos-delay='300' className='text-2xl font-medium my-4'>Fast & Easy Ordering</h4>
                    <p data-aos='fade-up' data-aos-delay='300' className='text-lg'>Order quickly through Whatsapp, Phone Calls or Instagram DM, and get your cravings sorted.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;