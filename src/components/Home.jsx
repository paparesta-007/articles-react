import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full ">
        <div className="h-[400px] flex">
            <div className="w-[60%] border">
                <h1 className="text-4xl titleHome font-bold  mt-10 mb-4">The article website, free forever and open source</h1>
                <p className="text-xl titleHome">We all know what is Medium, a website where you can write and publish articles. Well that's what we do. An ad-free website where AI write articles about what you want.</p>
                <Link to={"/topics"}><button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">Topics</button></Link>
            </div>
            <div className="w-[40%] border">
                <img src="https://placehold.co/200" alt="Placeholder"/>
            </div>
        </div>
    </div>
  );
};

export default Home;
