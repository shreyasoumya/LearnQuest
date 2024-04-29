import React from 'react';
import profilePic from './assets/profilePic.png';

function Card() {
  const handleClick = () => {
    // Navigate to the Editor page
    window.location.href = '/editor';
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-20 m-10 text-center max-w-400 inline-flex justify-center items-center">
      <img className="max-w-60 h-auto rounded-full mb-10 mr-20" src={profilePic} alt="Your Image"></img>
      <div>
        <h2 className="font-sans font-medium m-0 text-gray-800">Teacher</h2>
        <p className="font-sans text-gray-600">Teacher's previous works and interests</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleClick}>
          Connect
        </button>
      </div>
    </div>
  );
}

export default Card;
