import { useEffect, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "../../api/axios";
import AuthContext from "../../Context/authContext";

const USER_URL = "/user/current-user";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Retrieve token from session storage
        const token = sessionStorage.getItem("token");

        // Check if token exists
        if (!token) {
          throw new Error("Token not found in session storage");
        }

        // Make request with token in Authorization header
        const response = await axios.get(USER_URL, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        console.log(response.data?.data?.fullName, "fhrhihfiuegiuei",user.loggedInUser.username); // Log the user details
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white  p-8 rounded-md flex">
    {/* Left side (Avatar and Username) */}
    <div className="flex flex-col mr-8">
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Avatar" className="w-20 h-20 rounded-full mb-4" />
      <h2 className="text-xl font-bold">Username</h2>
      <p>Email</p>
      <p>Role</p>
    </div>
    {/* Right side (Profile Content) */}
    <div className="flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Profile</h3>
        <p>Bio</p>
        <p>Total Blogs</p>
      </div>
      <button className="px-4 py-2 bg-gray-500 font-semibold text-white rounded-md hover:bg-gray-300 hover:text-black focus:outline-none">
        Update Profile
      </button>
    </div>
    {/* Close button */}
    <button className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
      <IoCloseOutline className="text-xl" />
    </button>
  </div>
</div>

  

  );
};

export default UserProfile;
