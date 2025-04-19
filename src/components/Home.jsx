import React from 'react';
import {Link} from 'react-router-dom';
import imgHome from '../assets/images/ai-writing-article-removebg-preview.png';

const Home = () => {
    document.title = 'AI Writing Article';
    return (
        <div className="w-full   flex flex-col items-center justify-center p-6">
            <div className="w-full min-h-screen md:w-[60%] grid md:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
                        The AI article website,<br />
                        <span className="text-green-700">free forever</span> and open source.
                    </h1>
                    <p className="text-lg text-gray-700 titleHome">
                        Everyone knows Medium, a site to write and share articles. With <strong> no ads. </strong>
                        We offer the same freedom, but <strong>without subscription plans </strong>unlike Medium and powered by <span className="font-semibold">AI</span>.<br />
                        1 question, 1 click, 1 article. Nothing easier than that right?
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
                        className="w-full max-w-md select-none drop-shadow-lg"
                    />
                </div>
            </div>
            <div className="max-w-6xl mt-20 w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-extrabold leading-tight text-gray-900">Endless possibilities</h1>
                    <p className="text-md text-gray-700 titleHome">
                        In a world where information is everywhere, but often scattered, AI Writing Article offers you clear, complete and well-written articles on over 200,000 topics.
                        Forget the endless search: ask, and artificial intelligence writes for you.
                        No advertising, no paywall. Only useful content.
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F66714bac-5fb7-4ace-948e-8a979f4ced7a_1376x864.png"
                        alt="AI writing articles"
                        className="w-full max-w-md select-none drop-shadow-lg"
                    />
                </div>
            </div>
            <div className="max-w-6xl mt-20 w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-extrabold leading-tight text-gray-900">Smart writing</h1>
                    <p className="text-md text-gray-700 titleHome">
                        It's not just a blog, it's an intelligent engine.
                        We use AI to transform your questions into structured, readable, and well-formatted articles.
                        Every click is an idea that takes shape.
                        Discover, explore, learn.
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src="https://img.esg360.it/wp-content/uploads/2024/11/12134221/intelligenza-artificiale-chip-semiconduttori.jpg"
                        alt="AI writing articles"
                        className="w-full max-w-md select-none drop-shadow-lg"
                    />
                </div>
            </div>
            <div className="max-w-6xl mt-20 w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-extrabold leading-tight text-gray-900">Better learning</h1>
                    <p className="text-md text-gray-700 titleHome">
                        Because we believe in the importance of learning, we provide high-quality
                        prompts that lead to up to 35% more effective learning compared to typical user queries, allowing you to learn faster and more effectively.
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src="https://img.esg360.it/wp-content/uploads/2024/11/12134221/intelligenza-artificiale-chip-semiconduttori.jpg"
                        alt="AI writing articles"
                        className="w-full max-w-md select-none drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
