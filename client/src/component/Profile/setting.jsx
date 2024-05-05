import React, {useState} from 'react';

// Delete Confirmation Alert Component
const DeleteConfirmation = ({ onClose, onDelete }) => {
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const handleReasonChange = (event) => {
    const selectedReason = event.target.value;
    setReason(selectedReason);
    if (selectedReason !== 'Reason explain') {
      setOtherReason('');
    }
  };

  const handleOtherReasonChange = (event) => {
    setOtherReason(event.target.value);
  };

  const handleDeleteButtonClick = () => {
    if (reason === 'Reason explain') {
      // If "Reason explain" is selected, you may want to validate the otherReason input here
      console.log('Reason:', otherReason);
    }
    onDelete();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-3">Delete Account</h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for deletion:</label>
          <select
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReasonChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a reason</option>
            <option value="Do not want to use BlogMini more">Do not want to use BlogMini more</option>
            <option value="No reason">No reason</option>
            <option value="Bad experience">Bad experience</option>
            <option value="Reason explain">Reason explain</option>
          </select>
        </div>
        {reason === 'Reason explain' && (
          <div className="mb-4">
            <label htmlFor="otherReason" className="block text-sm font-medium text-gray-700 mb-1">Explain your reason:</label>
            <textarea
              id="otherReason"
              name="otherReason"
              value={otherReason}
              onChange={handleOtherReasonChange}
              rows="4"
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
        )}
        <div className="flex justify-end">
          <button className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={handleDeleteButtonClick}>
            Delete my account
          </button>
        </div>
      </div>
    </div>
  );
};


const SettingsPage = ()=> {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Inside handleDeleteClick function
const handleDeleteClick = () => {
  setShowDeleteConfirmation(true);
  console.log(`Are you sure you want to delete`);
};

// Inside handleDeleteConfirmationAction function
const handleDeleteConfirmationAction = (confirmed) => {
  if (confirmed) {
    // Delete action logic goes here
    console.log("Account deleted!");
  }
  setShowDeleteConfirmation(false);
};



  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
    <div className="p-8 rounded-sm shadow-sm  max-w-md w-full bg-white">
      <h1 className="text-2xl font-semibold mb-4">User Settings</h1>

      {/* Personal Information */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Personal Information</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea type="textarea" id="bio" name="bio" placeholder="Enter your bio" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
            </div>
          </div>

          <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-black font-semibold rounded-md text-black bg-gray-400 hover:bg-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black">
            Save
          </button>
        </form>
      </div>

      <hr className="my-6" />

      {/* Change Password */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Change Password</h2>
        <form>
          <div>
            <label htmlFor="currentPassword" className="block py-2 text-sm font-medium text-gray-700">Current Password</label>
            <input type="password" id="currentPassword" name="currentPassword" placeholder="Enter your current password" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
          </div>
          <div>
            <label htmlFor="newPassword" className="block py-2 text-sm font-medium text-gray-700">New Password</label>
            <input type="password" id="newPassword" name="newPassword" placeholder="Enter your new password" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block py-2 text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your new password" className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2" />
          </div>

          <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-black font-semibold rounded-md text-black bg-gray-400 hover:bg-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black">
            Save
          </button>
        </form>
      </div>

      <hr className="my-6" />

      {/* Delete Account */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Delete Account</h2>
        <p className="text-sm text-gray-600">No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>

        <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 " onClick={handleDeleteClick}>
          Yes, delete my account
        </button>
      </div>
      {/* Delete Confirmation Alert */}
      {showDeleteConfirmation && (
          <DeleteConfirmation
            onClose={() => handleDeleteConfirmationAction(false)}
            onDelete={() => handleDeleteConfirmationAction(true)}
          />
        )}
    </div>
  </div>
  );
}


export default SettingsPage;