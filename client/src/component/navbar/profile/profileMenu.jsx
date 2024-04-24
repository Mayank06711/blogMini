// ProfileMenu.jsx
import React from 'react';

const ProfileMenu = ({ profileLinks }) => {
    return (
        <div className="fixed top-20 right-8 h-70 w-70 bg-gray-100 border rounded shadow-md p-4 z-50 transition-all opacity-65">
            {profileLinks.map((link, index) => (
                <a href={link.link} key={index} className="block text-black font-semibold mb-2  hover:text-gray-500">
                    {link.label}
                </a>
            ))}
        </div>
    );
};

export default ProfileMenu;
