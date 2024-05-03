import { useState } from "react";
import dataFetcher from "../../api/fetcherApi.js"
const URL = "/user/current-user"
const User = ()=>{
       const user = dataFetcher(URL);
      const blog = dataFetcher("/blog/")
      console.log(blog?.data?.blogs[0],"user")
     return (
        <div className="bg-gradient-to-b from-white to-gray-200">
      <div className="container mx-auto py-5">
        <div className="flex justify-center items-center">
          <div className="lg:w-3/4">
            <div className="bg-black rounded-t text-white flex items-center" style={{ height: '200px' }}>
              <div className="ml-4 mt-36 flex flex-col" style={{ width: '150px' }}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Profile" className="mt-4 mb-2 rounded-lg" style={{ width: '150px' }} />
                <button className="border border-black  rounded-sm font-semibold bg-gray-400 text-black hover:bg-gray-500 py-2 px-4 mt-4">
                  Edit profile
                </button>
              </div>
              <div className="ml-3 mt-5">
                <h5 className="text-2xl">Full Name</h5>
                <p>username</p>
                <p>New York</p>
              </div>
            </div>
            <div className="p-4 text-black bg-gray-100">
              <div className="flex justify-end text-center py-1">
                <div>
                  <p className="mb-1 text-2xl">253</p>
                  <p className="text-xs text-gray-500">Blogs</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 text-2xl">1026</p>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="mb-1 text-2xl">478</p>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-5">
                <p className="text-xl font-normal mb-1">About</p>
                <div className="p-4 bg-gray-100">
                  <p className="italic mb-1">Bio</p>
                  <p className="italic mb-1">Lives in New York</p>
                  <p className="italic mb-0">Role</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-normal mb-0">Recent Blogs</p>
                <p className="mb-0"><a href="#!" className="text-gray-500">Show all</a></p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="mb-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                    alt="image 1" className="w-full rounded-lg" />
                </div>
                <div className="mb-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                    alt="image 1" className="w-full rounded-lg" />
                </div>
                <div className="mb-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                    alt="image 1" className="w-full rounded-lg" />
                </div>
                <div className="mb-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
    )
}

export default User;







/*  This can be used here instead of userFetcher 

 const [user, setUser] = useState();
       const navigate = useNavigate();
       const location = useLocation();
       const axiosPrivate = useAxiosPrivate();
       console.log(location,"location user" ,"\n",  navigate,"\n", user,"\n","userm is above" )
       
       useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController(); // this is for cancelling req once blog is fetched
        const {signal}  = controller;
        console.log("hii mayank this controller", controller.signal, "\n")
        const userProfile = async ()=>{
            try {
                console.log("hii mayank this top ", "\n")
                const response = await axiosPrivate.get(URL, {
                     signal:signal
                });
                console.log(response.data, "Fetch user data \n")
                isMounted && setUser(response.data)
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request aborted");
                  } else {
                    console.log(error.message, "Fetch user data error \n \n \n");
                    navigate('/login', { state: { from: location }, replace: true });
                  }
                  console.log(signal.reason, "Fetch user data")
            }
       }
       userProfile();
       return ()=>{  // clean up function when blog is fetched
           isMounted  = false;
        //    controller.abort();
           setTimeout(() => {
            controller.abort();
        }, 100)   
       }
       },[]);

 */