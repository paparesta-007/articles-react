import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t py-10 w-full justify-between mx-auto text-sm text-gray-600 ">


            {/* Licenza */}
            <div className="  pt-2 text-center text-base">
                <p>
                    © {new Date().getFullYear()} Papa’s Company. All rights reserved.
                </p>
                <p className="mt-2">
                    This work is licensed under a&nbsp;
                    <a
                        href="https://creativecommons.org/licenses/by-nc/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 underline hover:text-green-900"
                    >
                        Creative Commons Attribution-NonCommercial 4.0 International License
                    </a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
