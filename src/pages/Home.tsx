import React from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  const Card = () => (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Sample"
      />
      <div className="p-4">
        <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
          Tailwind CSS Card
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          This is a simple card component styled with Tailwind CSS.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Action
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-light">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to Home</h1>
      </div>
      {/* <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Sample"
        />
        <div className="p-4">
          <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
            Tailwind CSS Card
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            This is a simple card component styled with Tailwind CSS.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Action
          </button>
        </div>
      </div> */}
      <Card />
    </div>
  );
};

export default Home;
