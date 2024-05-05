
const Missing = ()=>{
    return(
        <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
  <div className="rounded-lg bg-white p-8 text-center shadow-xl">
    <h1 className="mb-4 text-4xl text-red-500 font-bold">ERROR:404</h1>
    <div className="animate-bounce">
      <svg className="mx-auto h-16 w-16 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    </div>
    <p className="text-gray-600 text-xl">Oops! The page you are looking for could not be found.</p>
    <a href="/" className="mt-6 inline-block rounded-sm bg-gray-400 hover:bg-gray-500 px-4 py-2 font-semibold text-black focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black"> Go back</a>
  </div>
</div>
    )
}

export default Missing;