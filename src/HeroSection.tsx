import { useState, useEffect } from 'react';

const HeroSection = () => {
    const phoneNumber: string = '2348134794011'; // Replace with your phone number
    const message: string = encodeURIComponent('Hello, I would like to place an order.'); // Customize the message
    const slides = [
        {
            img: 'heroImg2.png',
            gradient: 'bg-linear-to-br from-[#BFB890] to-[#D5D1B8]'
        },
        {
            img: 'heroImg3.png',
            gradient: 'bg-linear-to-br from-[#D5D1B8] to-[#BFB890]'
        },
        {
            img: 'heroImg4.png',
            gradient: 'bg-linear-to-br from-[#999471] to-[#FFF6BD]'
        },
        {
            img: 'heroImg1.png',
            gradient: 'bg-linear-to-br from-[#FFF6BD] to-[#999471]'
        },
    ]; // Add your image paths here
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. Automatically change the image index every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000); 

        return () => clearInterval(interval); // Cleanup timer on unmount
    }, [slides.length]);

    return (
        <section id='home' className='scroll-mt-28 md:scroll-mt-32'>
            <div className={`min-h-screen w-full ${slides[currentIndex]?.gradient || 'bg-linear-to-br from-[#FFF6BD] to-[#999471]'} relative flex flex-col items-center justify-center gap-8 overflow-hidden px-4 pb-10 pt-28 sm:px-8 md:flex-row md:gap-12 md:px-12 md:pb-0 md:pt-24 lg:gap-20 lg:ps-25 lg:pe-35`}>
            {/* <div className='h-screen w-full bg-linear-to-br from-[#FFF6BD] to-[#999471] flex items-center justify-center ps-25 pe-35 gap-20 relative overflow-hidden'> */}
                
                <div data-aos='fade-right' data-aos-delay='120' className='z-10 w-full text-center md:w-1/2 md:text-left'>
                    <h2 className='text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-[4em] lg:leading-20'>Fresh Pastries and Tasty Treats Made for you</h2>
                    <a href="#menu">
                        <button data-aos='fade-up' data-aos-delay='220'  className='mx-auto mt-5 flex w-auto items-center gap-2 rounded-xl bg-[#72462C] px-8 py-3 text-lg font-medium text-white hover:bg-[#533320] cursor-pointer duration-300 sm:px-12 md:mx-0 md:px-15 md:text-[1.3em]'>
                        Browse Menu <i className="bi bi-arrow-right font-bold mt-1"></i>
                    </button>
                    </a>
                </div>

                {/* 3. The Fading Carousel Wrapper for the main image */}
                <div data-aos='zoom-in' data-aos-delay='180' className='relative h-75 w-full sm:h-105 md:h-130 md:w-1/2 lg:h-150'>
                    {slides.map((slide, index) => (
                        <img
                            key={slide.img}
                            src={slide.img}
                            alt={`Pastry slide ${index + 1}`}
                            className={`absolute inset-0 mx-auto w-70 object-contain transition-opacity duration-1000 ease-in-out sm:w-95 md:w-125 lg:w-150 ${
                                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        />
                    ))}
                </div>

                {/* Secondary Decorative Element */}
                <img data-aos='fade-left' data-aos-delay='260' src="heroImg1-2.png" className='absolute right-0 top-0 z-0 hidden w-1/4 sm:block' alt="Decorative" />

                {/* WhatsApp Floating CTA Layout Button */}
                <a data-aos='fade-up' data-aos-delay='320' href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className='fixed bottom-6 right-4 z-50 flex cursor-pointer items-center gap-3 sm:bottom-10 sm:right-8 md:bottom-15 md:right-15 md:gap-5 hover:scale-120 hover:opacity-90 transition-transform duration-500 active:scale-140'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="2.7em" viewBox="0 0 256 258">
                        <defs>
                            <linearGradient id="SVGK3KZq49U" x1="50%" x2="50%" y1="100%" y2="0%">
                                <stop offset="0%" stop-color="#1faf38" />
                                <stop offset="100%" stop-color="#60d669" />
                            </linearGradient>
                            <linearGradient id="SVGefMkoEOd" x1="50%" x2="50%" y1="100%" y2="0%">
                                <stop offset="0%" stop-color="#f9f9f9" />
                                <stop offset="100%" stop-color="#fff" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#SVGK3KZq49U)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" />
                        <path fill="url(#SVGefMkoEOd)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" />
                        <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;