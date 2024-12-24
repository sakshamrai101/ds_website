import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firstVideo from '../assets/first_vid.mp4';
import secondVideo from '../assets/second_vid.mp4';


const LandingPage = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Change the background video smoothly as the user scrolls
            if (scrollPosition > window.innerHeight / 2) {
                setBackgroundIndex(1); // Show second video
            } else {
                setBackgroundIndex(0); // Show first video
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Videos */}
            <div className="absolute inset-0 -z-10">
                <video
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${backgroundIndex === 0 ? "opacity-100" : "opacity-0"
                        }`}
                    autoPlay
                    loop
                    muted
                    src={firstVideo}
                ></video>
                <video
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${backgroundIndex === 1 ? "opacity-100" : "opacity-0"
                        }`}
                    autoPlay
                    loop
                    muted
                    src={secondVideo}
                ></video>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">
                    Happy 2-Years of Togetherness Mera Chota Sa Duniyaaa
                </h1>
                <p className="mt-4 text-xl text-white drop-shadow-lg">
                    A miniscule gesture to kickstart this BIG MILESTONE.
                </p>
                <div className="flex space-x-4 mt-6">
                    <Link
                        to="/gallery"
                        className="px-4 py-2 bg-white text-purple-500 rounded hover:bg-purple-500 hover:text-white transition-all"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/vision-board"
                        className="px-4 py-2 bg-white text-purple-500 rounded hover:bg-purple-500 hover:text-white transition-all"
                    >
                        Vision Board
                    </Link>
                    <a
                        href="https://ds-timeline.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-purple-500 rounded hover:bg-purple-500 hover:text-white transition-all"
                    >
                        Timeline
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
