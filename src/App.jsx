import { useState } from 'react';

function App() {
  const [count, setCount] = useState('');
  const [result, setResult] = useState([]);

  const ShowResult = () => {
    let num = parseInt(count);
    if (isNaN(num) || num <= 0) {
      setResult([]);
      return;
    }

    let output = [];

    // Generate the increasing pattern
    for (let i = 1; i <= num; i++) {
      output.push('*'.repeat(i));
    }

    // Generate the decreasing pattern
    for (let i = num - 1; i >= 1; i--) {
      output.push('*'.repeat(i));
    }

    setResult(output);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-md ">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-black">Input :</h1>
          <input 
            type="number" 
            min="1" 
            max=""
            className="bg-gray-100 p-2 border border-gray-400 rounded-lg"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={ShowResult}
          >
            Submit
          </button>
        </div>

        <div className="mt-5 text-xl">
          {result.map((line, index) => (
            <div key={index} className=' items-center'>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
