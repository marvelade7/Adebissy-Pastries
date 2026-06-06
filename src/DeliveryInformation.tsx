const DeliveryInformation = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='120' className='flex flex-col w-full gap-15 px-4 py-7 md:py-10 sm:px-8 lg:px-20 md:flex-row md:gap-10'>
            <img data-aos='zoom-in' data-aos-delay='180' src="deliveryImg.png" width="500" className='lg:w-1/2 w-full border border-[#72462c83] rounded-2xl' />
            <div className="lg:w-1/2 w-full">
                <h3 data-aos='fade-up' data-aos-delay='240' className="md:text-4xl text-3xl mb-3 font-medium">Delivery Information</h3>
                <p data-aos='fade-up' data-aos-delay='300' className="mb-7 md:text-2xl text-xl">Fresh Pastries delivered across Ogbomoso, Ilorin, and surrounding areas in Kwara</p>
                <div className="flex flex-col gap-5 ">
                    <div data-aos='fade-up' data-aos-delay='460' className="w-full px-8 py-4 rounded-2xl border border-[#72462c83]">
                        <h3 className="md:text-2xl text-xl mb-3 font-medium">Areas We Serve</h3>
                        <p className="text-lg md:text-xl list-item">We currently deliver to Ogbomoso, Ilorin, and nearby locations across Kwara, making it easy to enjoy your favorite pastries wherever you are.</p>
                    </div>
                    
                    <div data-aos='fade-up' data-aos-delay='540' className="w-full px-8 py-4 rounded-2xl border border-[#72462c83]">
                        <h3 className="md:text-2xl text-xl mb-3 font-medium">Opening Hours</h3>
                        <p className="text-lg md:text-xl list-item">Monday - Saturday.</p>
                        <p className="text-xl">9 AM - 6 PM</p>
                    </div>
                    
                    <div data-aos='fade-up' data-aos-delay='620' className="w-full px-8 py-4 rounded-2xl border border-[#72462c83]">
                        <h3 className="md:text-2xl text-xl mb-3 font-medium">Areas We Serve</h3>
                        <p className="text-lg md:text-xl list-item">Place your order through Whatsapp, Phone Call, or Instagram DM and we'll help you get your favorite treats quickly.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DeliveryInformation;