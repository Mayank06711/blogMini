import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <main className="flex flex-col  sm:flex-row sm:justify-between justify-center items-center w-1/1 h-auto bg-white">
      <div className="bg-white  sm:w-1/2 w-full sm:p-8 p-8">
        <h2 className="text-xl font-bold mb-4">Give Your Feedback Here</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="block w-full rounded-sm border-1 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="block w-full rounded-sm border-1 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              cols={4}
              required
              className="block w-full rounded- border-1 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded- px-3 py-1 text-sm font-semibold leading-6  shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 border border-black  text-black bg-gray-400 ho focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black focus-visible:outline-blue-600"
            >
               Send
            </button>
          </div>
        </form>
      </div>
      <div className="hidden sm:block bg-white sm:w-1/2 w-full p-12">
        <div className="text-pretty flex-1">
          <h2 className="text-xl font-bold mb-8 py-0.1">About</h2>
          <p className="text-md text-gray-500 mb-4">HQ Kanpur</p>
          <p className="text-md text-gray-500 mb-4">Uttar-Pradesh India 208002 </p>
          <p className="text-md text-gray-500 mb-4">Create , Share , Like and Follow Your Loved Blog And Its Author</p>
          <p className="text-md text-gray-500 mb-4">With Love <span role="img" aria-label="heart">❤️</span> BlogMini</p>
          <p className="text-md text-gray-200 mb-4">AllRights Reserved @BlogMini</p>
        </div>
    </div>
    </main>
  )
};

export default Contact;
