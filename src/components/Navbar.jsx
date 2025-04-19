import React, {useEffect, useRef} from 'react';
import topics from '../assets/Data/topic.js';
import {Link} from "react-router-dom";
import {House, List, Newspaper} from "lucide-react";

const Navbar = () => {
    const groupTopic = useRef();
    const chooseBtnRef = useRef(); // Referenza al bottone "Choose topic"

    function handleClick() {
        groupTopic.current.classList.toggle('hidden');
    }

    // Effetto che aggiunge e rimuove il listener per chiudere il menu cliccando fuori
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Se il click NON è dentro il menu né dentro il bottone "Choose topic"
            if (
                groupTopic.current &&
                !groupTopic.current.contains(event.target) &&
                !chooseBtnRef.current.contains(event.target)
            ) {
                groupTopic.current.classList.add('hidden'); // Nascondi
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex sticky top-0 bg-[#F2EFC7] py-2 px-2 items-center justify-between w-full z-50">
            <div>
                <Link to="/" className="text-3xl font-bold select-none">AI Articles</Link>
            </div>
            <div>
                <ul className="flex gap-4 items-center text-lg relative select-none">
                    <Link to="/" className="cursor-pointer hover:underline mx-1  flex items-center gap-2"><House
                        className="md:hidden block"/><span className="hidden md:block">Home</span></Link>
                    <Link to="/articlePersonal" className="cursor-pointer flex items-center gap-2 hover:underline mx-1"><Newspaper
                        className="md:hidden block"/><span className="hidden md:block">My own article</span></Link>

                    <li className="relative cursor-pointer mx-1">
                        <List className="md:hidden block"/>
                        <span
                            ref={chooseBtnRef}
                            className="hover:underline cursor-pointer md:block hidden"
                            onClick={handleClick}
                        >
                            Choose topic
                        </span>

                        {/* menu dropdown */}
                        <div
                            ref={groupTopic}
                            className="absolute top-full right-0 mt-2 p-4 w-[450px] bg-[#F2EFC7] border transition duration-300 shadow-md rounded grid grid-cols-3 gap-2 justify-between text-[1rem] z-50 hidden"
                        >
                            {topics.map((topic, i) => (
                                <Link
                                    to={`/topics/${encodeURIComponent(topic.name)}`}
                                    key={i}
                                    onClick={() => handleClick()}
                                    className="cursor-pointer hover:underline whitespace-nowrap"
                                >
                                    {topic.name}
                                </Link>
                            ))}
                        </div>
                    </li>
                    <button><img src={"https://compote.slate.com/images/d2f8555b-0f63-49ea-99e1-302c1391d905.jpg"} className="w-10 h-10 rounded-full" alt="dark jar jar"/> </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
