const Experience = () => {
  return (
    <div>
      <div className="bg-slate-900 -mt-7 px-4 xl:px-28 lg:px-20 sm:px-8 xl:mt-0 text-white">
        <h1 className="text-5xl sm:text-6xl pt-14 text-white">Experience</h1>
        <div className="flex flex-row flex-wrap justify-center xl:justify-start py-10 gap-4">
          <div className="pb-8">
            <img
              src="https://www.eu-startups.com/wp-content/uploads/2024/03/koryntia_finance_logo.jpg"
              alt="Logo"
              className="h-32 rounded-full border-2"
            />
          </div>
          <div className="group">
            <h1 className="sm:text-3xl text-2xl">Blockchain Solidity Intern</h1>
            <h1 className="sm:text-2xl text-xl">Koryntia · Part-time</h1>
            <h1 className="sm:text-2xl text-xl">Nov 2023 - Feb 2024 · 4 mos</h1>
            <h1 className="sm:text-xl text-lg text-slate-500 group-hover:text-purple-500">
              London, England, United Kingdom · Remote
            </h1>
            <p className="sm:text-xl text-lg">
              Assisted the development team in executing various tasks related
              to Solidity smart contracts as a Slidity Intern.
            </p>
            <hr className="w-60 sm:w-80 h-0.5 my-4 bg-slate-500 border-0 rounded-sm group-hover:w-full group-hover:bg-purple-800"></hr>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center xl:justify-start py-10 gap-4">
          <div className="pb-8">
            <img
              src="https://avatars.githubusercontent.com/u/163145447?s=200&v=4"
              alt="Logo"
              className="h-32 rounded-full border-2"
            />
          </div>
          <div className="group">
            <h1 className="sm:text-3xl text-2xl">Blockchain Apprentice</h1>
            <h1 className="sm:text-2xl text-xl">
              Stability Nexus · Apprenticeship
            </h1>
            <h1 className="sm:text-2xl text-xl">Oct 2024 - Present · 4 mos</h1>
            <h1 className="sm:text-xl text-lg text-slate-500 group-hover:text-purple-500">
              Australia · Remote
            </h1>
            <p className="sm:text-xl text-lg">
              Developed Bene: Fundraising Platform, a DApp and various other
              Blockchain source projects as Apprentice.
            </p>
            <hr className="w-60 sm:w-80 h-0.5 my-4 bg-slate-500 border-0 rounded-sm group-hover:w-full group-hover:bg-purple-800"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
