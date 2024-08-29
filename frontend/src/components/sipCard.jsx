import React from 'react';

function App() {
  return (
    <div className='p-7 flex flex-col items-center'>
      <h1 className="text-3xl font-bold mb-8 text-center">Introducing Social Impact Plan</h1>
      <div className="bg-blue-100 p-8 rounded-md shadow-md w-full max-w-7xl flex flex-col md:flex-row justify-between items-center">
        
        <div className="w-full md:w-3/5">
        
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Create More Impact with SIP</h2>
            
          </div>
          <p className="mb-6 text-lg">You hold the power to empower change, amplify impact, and create potential - all with a single tap of a button.</p>
        </div>

        <div className="w-full md:w-2/5 grid grid-cols-1 gap-4 mb-8 md:mb-0">
          <img src="https://media.istockphoto.com/id/143176152/photo/real-people-from-rural-india-happy-parents-with-their-children.jpg?s=612x612&w=0&k=20&c=nu3rccbRGJrIeYSJ2IJ_v1paSyzPW8x1cUJd_6lHeiQ=" alt="Dog" className="rounded-md" />
        </div>
      
      </div>
      <div className="mt-8 flex flex-col items-center w-full max-w-7xl">
        <p className="font-bold text-lg text-center">Starting at only ₹100/month</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full max-w-xs">Donate monthly →</button>
      </div>
    </div>
  );
}

export default App;
