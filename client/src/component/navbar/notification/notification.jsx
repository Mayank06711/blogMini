// Notification.jsx
import React from 'react';

const Notification = ({ visible}) => {
    return (
        <div className="fixed top-20 right-2 w-80 h-3/4 bg-gray-50 border rounded shadow-md p-4 z-50 transition-all ">
            <h2 className="text-xl font-bold mb-2">Notifications</h2>
            <hr className="mb-2" />
            <p>Notification content goes here...</p>
            <button className='absolute  bottom-4 right-3 rounded-sm border border-black   py-2 px-4  font-semibold bg-gray-400 hover:bg-gray-500'>Clear</button>

        </div>
    );
};

export default Notification;
