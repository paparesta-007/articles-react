import React from 'react';
import topics from "../assets/Data/topic.js";

const BrowseTopics = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-8">
            <div className="w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <img
                            src={topic.image ? topic.image : "https://via.placeholder.co/150"}
                            alt={topic.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold mb-2">{topic.name}</h2>
                            <p className="text-sm text-gray-700">{topic.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseTopics;
