import React from 'react';
import { Link } from 'react-router-dom';
import imgHome from '../assets/images/ai-writing-article-removebg-preview.png';

const Home = () => {
    return (
        <div className="w-full flex items-center justify-center p-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
                        The article website,<br />
                        <span className="text-green-700">free forever</span> and open source.
                    </h1>
                    <p className="text-lg text-gray-700 titleHome">
                        Everyone knows Medium, a site to write and share articles. With <strong> no ads. </strong>
                        We offer the same freedom, but <strong>without subscription plans </strong>unlike Medium and powered by <span className="font-semibold">AI</span>.<br />
                        Ask, and the AI writes for you.
                    </p>
                    <Link to="/topics">
                        <button className="bg-green-700 select-none hover:bg-green-900 transition-colors text-white text-lg font-medium py-3 px-6 rounded-xl shadow-lg cursor-pointer">
                            Browse Topics
                        </button>
                    </Link>
                </div>

                {/* Right image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={imgHome}
                        alt="AI writing articles"
                        className="w-full max-w-md drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
