const About = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='120' className='flex flex-col-reverse w-full items-stretch gap-5 px-4 py-15 sm:px-8 lg:px-20 md:flex-row md:gap-10'>
            <div data-aos='fade-right' data-aos-delay='180' className="relative mx-auto w-full  sm:max-w-none">
                <img src="./aboutImg11.jpg" width="100%" className="h-auto rounded-[20px]" />
                <div className="absolute inset-0 rounded-[20px] bg-black/45" />
                <div className="absolute -bottom-5 left-2/5 transform -translate-x-1/2 -translate-y-1/2 rounded-[20px] px-5 py-3">
                    <p className="font-mono md:py-5 py-2 mb-3 text-xl md:text-2xl px-4  rounded-[10px] bg-white text-[#603921]">Adebissy's Pastries</p>
                    <p className="text-xl md:text-3xl font-bold text-white">Every bite tells a delicious story</p>
                </div>
            </div>
            <div data-aos='fade-left' data-aos-delay='260' className='flex flex-col gap-5'>
                <h3 className='md:text-4xl text-3xl font-bold'>About Adebissy's Pastries</h3>
                <p className="md:text-xl text-lg my-2">We create fresh, delicious pastries and snacks
                    that bring people together. From everyday treats
                    to special occasions, every bite is made with care,
                    quality ingredients, and a passion for great taste.
                </p>
                <img src="./aboutImg2.jpg" width="900" alt="About Adebissy's Pastries" className="rounded-[20px] hidden md:block" />
            </div>
        </div>
    );
};

export default About;