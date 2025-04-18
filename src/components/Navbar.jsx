import React from 'react';

const Navbar = () => {
    return (
        <div className="flex sticky absolute items-center justify-between w-full border">
            <div>
                <h1 className="text-3xl font-bold">AI Articles</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-lg">
                    <li className="cursor-pointer hover:underline">Home</li>
                    <li className="cursor-pointer hover:underline">Trending</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
