import React, { useRef } from 'react';
import topics from '../assets/Data/topic.js'; // I tuoi topic
import { Link } from "react-router-dom";

const Navbar = () => {
    const groupTopic = useRef();

    function handleClick() {
        groupTopic.current.classList.toggle('hidden');
    }

    return (
        <div className="flex sticky top-0 bg-[#F2EFC7] py-2 px-2 items-center justify-between w-full z-50">
            <div>
                <h1 className="text-3xl font-bold">AI Articles</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-lg relative select-none">
                    <Link to="/" className="cursor-pointer hover:underline mx-1">Home</Link>
                    <Link to="/articlePersonal" className="cursor-pointer hover:underline mx-1">My own article</Link>

                    <li className="relative cursor-pointer mx-1">
                        <span className="hover:underline" onClick={handleClick}>Choose topic</span>

                        <div
                            ref={groupTopic}
                            className="absolute top-full right-0 mt-2 p-4 w-[450px] bg-[#F2EFC7] border transition duration-300 shadow-md rounded grid grid-cols-3 gap-2 justify-between text-[1rem] z-50 hidden"
                        >
                            {topics.map((topic, i) => (
                                <Link
                                    to={`/article/${encodeURIComponent(topic)}`}
                                    key={i}
                                    className="cursor-pointer hover:underline whitespace-nowrap"
                                >
                                    {topic}
                                </Link>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
