const Courses = () => {
  return (
    <div
      id="courses"
      className="bg-slate-800 pb-8 px-4 xl:px-28 lg:px-20 sm:px-8"
    >
      <h1 className="text-6xl pt-16 text-white">
        Courses And Certifications 🏆
      </h1>

      <div className=" md:grid grid-cols-2">
        <div className="px-10 py-5 mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-purple-900 ">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/harvard-university-logo-png-transparent.png"
            alt="Logo"
            className="h-28  px-10 lg:px-20 xl:pl-52"
          />
          <h1 className="text-2xl py-4 text-white text-center">CS50x</h1>
          <p className="text-sm text-slate-500">Issued May 2023</p>
          <p className="text-sm py-4 text-white">
            Harvard&apos;s Introduction to the intellectual enterprises of
            computer science and the art of programming by David J. Malan
          </p>
        </div>
        <div className="px-10 py-5  mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-purple-900">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/harvard-university-logo-png-transparent.png"
            alt="Logo"
            className="h-28  px-10 lg:px-20 xl:pl-52"
          />
          <h1 className="text-2xl py-4 text-white text-center">CS50w</h1>
          <p className="text-sm text-slate-500">Issued Oct 2023</p>
          <p className="text-sm py-4 text-white">
            Harvard&apos;s CS50w Web Programming with Python and JavaScript by
            David J. Malan and Brian Yu
          </p>
        </div>
        <div className="px-10 py-5  mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-purple-900">
          <img
            src="https://hackerx.org/wp-content/uploads/job-manager-uploads/company_logo/2022/07/68747470733a2f2f7374617469632e66726f6e74656e646d6173746572732e636f6d2f6173736574732f6272616e642f6c6f676f732f6d2e706e67.png"
            alt="Logo"
            className="h-28  px-10 lg:px-20 xl:pl-52"
          />
          <h1 className="text-2xl py-4 text-white text-center">
            Complete React v8
          </h1>
          <p className="text-sm text-slate-500">Issued May 2024</p>
          <p className="text-sm py-4 text-white">
            The Complete Intro to React, taught by Brian Holt a veteran React.js
            developer on Frontend Masters
          </p>
        </div>
        <div className="px-10 py-5  mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-purple-900">
          <img
            src="https://www.alchemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675403%2Fdapp-store%2Fdapp-logos%2FAlchemy%2520University.jpg&w=640&q=75"
            alt="Logo"
            className="h-[88px] rounded px-10 lg:px-20 xl:pl-56"
          />
          <h1 className="text-2xl py-6 text-white text-center">
            Learn Solidity
          </h1>
          <p className="text-sm text-slate-500">Issued 2024</p>
          <p className="text-sm py-4 text-white">
            Modern Solidity v0.8.20 Course for Solidity fundamentals and some
            real world projects by Dan Nolan.
          </p>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/zain--nasir/details/certifications/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-auto align-center justify-center">
          <button className=" text-white rounded-md py-4 px-6 bg-purple-600 hover:bg-purple-700 ">
            More Courses
          </button>
        </div>
      </a>
    </div>
  );
};

export default Courses;
