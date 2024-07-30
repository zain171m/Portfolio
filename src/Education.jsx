const Education = () => {
  return (
    <div className="bg-slate-900 -mt-7 px-4 xl:px-28 lg:px-20 sm:px-8 xl:mt-0 text-white">
      <h1 id="experience" className="text-6xl pt-16 text-white">
        Education
      </h1>
      <div className="flex flex-row flex-wrap justify-center xl:justify-start py-10 space-x-8">
        <div className="pb-8">
          <img
            src="https://seeklogo.com/images/N/nust-logo-E161A9240F-seeklogo.com.png"
            alt="Logo"
            className="h-32"
          />
        </div>
        <div className="group">
          <h1 className="text-3xl">
            National University of Sciences & Technology
          </h1>
          <h1 className="text-2xl">
            Bachelor of Engineering in Information Security
          </h1>
          <h1 className="text-xl">November 2021 - June 2025</h1>
          <h1 className="text-xl text-slate-500 group-hover:text-purple-500">
            Grade: 3.7 out of 4.0
          </h1>
          <p className="text-xl">
            Took courses about Cryptography, Information security,Software
            Engineering, Operating Systems,...{" "}
          </p>
          <hr className="w-80 h-0.5 my-4 bg-slate-500 border-0 rounded-sm group-hover:w-full group-hover:bg-purple-800"></hr>
        </div>
      </div>
    </div>
  );
};

export default Education;
