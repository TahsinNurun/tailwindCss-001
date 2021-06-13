import React from 'react';
import { Link } from 'react-router-dom';

const PlantEnthusiasts = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                Green Enthusiasts
            </h1>
            <Link className="py-6 px-10 bg-green-500 rounded-full text-3xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center animate-bounce">Pick your one
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </Link>
        </div>
    );
};

export default PlantEnthusiasts;