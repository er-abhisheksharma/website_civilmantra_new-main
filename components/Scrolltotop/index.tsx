// components/ScrollToTopButton.tsx
'use client'
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed z-10 max-sm:right-2 bottom-10 right-16 transition-opacity duration-300 
            ${visible ? 'opacity-100' : 'opacity-0'} 
            bg-primary text-white py-2 px-2 rounded-lg shadow-lg hover:bg-blue-700`}
            style={{ display: visible ? 'block' : 'none' }} // Additional visibility control
        >
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;
