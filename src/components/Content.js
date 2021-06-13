import React from 'react';
import ImageOne from '../Images/01.png';
import ImageTwo from '../Images/02.png';
import ImageThree from '../Images/03.png';
import ImageFour from '../Images/04.png'

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={ImageOne} alt="plant" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Berry</h2>
                    <p className="mb-2">juicy, healthy, spiky</p>
                    <span>$30</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageTwo} alt="plant" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Sacculant</h2>
                    <p className="mb-2">juicy, healthy, smooth</p>
                    <span>$30</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageThree} alt="plant" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">cactus</h2>
                    <p className="mb-2">juicy, healthy, glossy</p>
                    <span>$30</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageFour} alt="plant" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Leafy</h2>
                    <p className="mb-2">thin, healthy, delicate</p>
                    <span>$30</span>
                </div>
            </div>
        </>
    );
};

export default Content;