const DevelopedBy = () => {
    const contactLinks = [
        {
            label: 'GitHub',
            href: 'https://github.com/marvelade7',
            icon: 'bi-github',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/marvellous-adewuyi-a32070278',
            icon: 'bi-linkedin',
        },
        {
            label: 'Email',
            href: 'mailto:marveladeadewuyi@gmail.com',
            icon: 'bi-envelope-fill',
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/2347012893212',
            icon: 'bi-whatsapp',
        },
    ];

    return (
        <div className='px-2 pb-10 sm:px-8 lg:px-20'>
            <div className='border-t border-[#72462c26] pt-10 sm:pt-18'>
                <div className='flex flex-col items-center text-center'>
                    {/* <p className='text-[.8em] font-medium uppercase tracking-[0.28em] text-[#72462C]/70'>Crafted with care</p> */}

                    <div className='flex items-center gap-1 text-md font-semibold text-[#522E1F] '>
                        <h3>Developed by - </h3>

                        <a
                            href='https://github.com/marvelade7'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-md text-[#522E1F] transition hover:text-[#8c5b38]'
                        >
                            Marvellous Adewuyi
                        </a>
                    </div>
                    <p className="mt-6 text-md font-medium text-[#522E1F]">Explore my work and connect with me.</p>
                    <div className='flex flex-wrap gap-2 sm:gap-5 mt-2 justify-center'>
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.label === 'Email' ? undefined : '_blank'}
                                rel='noopener noreferrer'
                                className='group inline-flex items-center gap-3 rounded-full  bg-transparent px-2 py-1 text-sm font-medium text-[#522E1F] transition duration-300 hover:border-[#F9CA46] hover:bg-[#F9CA46]/10 hover:text-[#8c5b38]'
                            >
                                <span className='flex items-center justify-center  text-[#72462C] transition'>
                                    <i className={`bi ${link.icon} text-base`} aria-hidden='true' />
                                </span>

                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopedBy;