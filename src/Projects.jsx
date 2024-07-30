const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-slate-800 pb-10  px-4 xl:px-28 lg:px-20 sm:px-8"
    >
      <h1 className="text-6xl pt-16 text-white">Projects</h1>

      <div className=" md:grid grid-cols-2">
        <a
          href="https://github.com/zain171m/AASRAA-DAO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-10 py-10 mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-white hover:bg-purple-800">
            <h1 className="text-2xl py-4 text-white">AASRA DAO 💰</h1>
            <p className="text-sm py-4 text-white">
              A crowdfunding DAO allows user to request campaign for donations
              and incentivize donors with AASRAA token. AASRAA token primarily
              used to vote for approval or disapproval of campaigns.
            </p>
          </button>
        </a>
        <a
          href="https://github.com/zain171m/cryptocurrency-exchange-dApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-10 py-10  mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-white hover:bg-purple-800 ">
            <h1 className="text-2xl py-4 text-white">
              Cryptocurrency Exchange Dapp 📊📈
            </h1>
            <p className="text-sm py-4 text-white">
              This decentralized application (dapp) allows users to trade ERC20
              tokens. It is built on the Ethereum blockchain and uses smart
              contracts to facilitate trades.
            </p>
          </button>
        </a>
        <a
          href="https://github.com/zain171m/Blockchain-Learning-Hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-10 py-10  mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-white hover:bg-purple-800 ">
            <h1 className="text-2xl py-4 text-white">
              Blockchain learning Hub 💡
            </h1>
            <p className="text-sm py-4 text-white">
              Blockchain Learning Hub, your one-stop destination for blockchain
              research, articles, quizzes, and discussion forums. This project
              is part of my final project for CS50W.
            </p>
          </button>
        </a>
        <a
          href="https://github.com/zain171m/Adopt_Me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-10 py-10  mx-6 my-6 bg-slate-900 rounded-lg shadow-md hover:shadow-white hover:bg-purple-800 ">
            <h1 className="text-2xl py-4 text-white">Adopt Me 🐶🐱</h1>
            <p className="text-sm py-4 text-white">
              A simple react app for pet adoption with all react basic features,
              Pets API&apos;s and forms to search and adopt pets. This project
              is part of React by brian holt course.
            </p>
          </button>
        </a>
      </div>
      <a
        href="https://github.com/zain171m/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-auto align-center justify-center">
          <button className=" text-white rounded-md py-4 px-6 bg-purple-600 hover:bg-purple-700 ">
            More Projects
          </button>
        </div>
      </a>
    </div>
  );
};

export default Projects;
