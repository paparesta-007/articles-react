import React from 'react';
import topics from "../assets/Data/topic.js";
import {Link} from "react-router-dom";
const BrowseTopics = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-8">
            <h1 className="text-4xl font-bold w-[90%] md:w-[70%] mb-6 text-left">Browse Topics</h1>
            <p className="text-xl text-gray-700 w-[90%] md:w-[70%] mb-8 text-left">Since topics are endless, under here you can find the most popular topics</p>
            <div className="w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {topics.map((topic, index) => (
                    <Link to={`/topics/${encodeURIComponent(topic.name)}`}
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <img
                            src={topic.image ? topic.image : "https://via.placeholder.co/150"}
                            alt={topic.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{topic.name}</h2>
                            <p className="text-lg text-gray-700">{topic.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BrowseTopics;
