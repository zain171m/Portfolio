const Experience = () => {
  return (
    <div className="bg-slate-900 -mt-7 px-4 xl:px-28 lg:px-20 sm:px-8 xl:mt-0 text-white">
      <h1 className="text-6xl pt-14 text-white">Experience</h1>
      <div className="flex flex-row flex-wrap justify-center xl:justify-start py-10 space-x-8">
        <div className="pb-8">
          <img
            src="https://www.eu-startups.com/wp-content/uploads/2024/03/koryntia_finance_logo.jpg"
            alt="Logo"
            className="h-32 rounded-full border-2"
          />
        </div>
        <div className="group">
          <h1 className="text-3xl">Blockchain Solidity Intern</h1>
          <h1 className="text-2xl">Koryntia · Part-time</h1>
          <h1 className="text-xl">Nov 2023 - Feb 2024 · 4 mos</h1>
          <h1 className="text-xl text-slate-500 group-hover:text-purple-500">
            London, England, United Kingdom · Remote
          </h1>
          <p className="text-xl">
            Assisted the development team in executing various tasks related to
            Solidity smart contracts as a Slidity Intern.
          </p>
          <hr className="w-80 h-0.5 my-4 bg-slate-500 border-0 rounded-sm group-hover:w-full group-hover:bg-purple-800"></hr>
        </div>
      </div>
    </div>
  );
};

export default Experience;
