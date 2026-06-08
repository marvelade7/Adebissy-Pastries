const DevelopedBy = () => {
    const contactLinks = [
        {
            label: 'WhatsApp',
            href: 'https://wa.me/2347012893212',
            icon: 'bi-whatsapp',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/marvelade7',
            icon: 'bi-github',
        },
        {
            label: 'Email',
            href: 'mailto:marveladeadewuyi@gmail.com',
            icon: 'bi-envelope-fill',
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/debissys?igsh=b3E4cWJ5MjdrMXB6',
            icon: 'bi-instagram',
        },
    ];

    return (
        <div className='px-4 pb-10 sm:px-8 lg:px-20'>
            <div className='border-t border-[#72462c26] pt-6 sm:pt-8'>
                <div className='flex flex-col items-center text-center'>
                    <p className='text-sm font-medium uppercase tracking-[0.28em] text-[#72462C]/70'>Crafted with care</p>

                    <div className='mt-3 flex items-center gap-1 text-lg font-bold text-[#522E1F] sm:text-xl'>
                        <h3>Developed by - </h3>

                    <a
                        href='https://github.com/marvelade7'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-md font-semibold text-[#522E1F] decoration-[#F9CA46] decoration-2 underline-offset-4 transition hover:text-[#8c5b38]'
                    >
                         Marvellous Adewuyi
                    </a>
                    </div>

                    <div className='mt-6 flex flex-wrap justify-center gap-1 sm:gap-4'>
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.label === 'Email' ? undefined : '_blank'}
                                rel='noopener noreferrer'
                                className='group inline-flex items-center gap-1 rounded-full  bg-transparent px-4 py-1 text-sm font-medium text-[#522E1F] transition duration-300 hover:border-[#F9CA46] hover:bg-[#F9CA46]/10 hover:text-[#8c5b38]'
                            >
                                <span className='flex h-8 w-8 items-center justify-center  text-[#72462C] transition group-hover:bg-[#F9CA46] group-hover:text-[#72462C]'>
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