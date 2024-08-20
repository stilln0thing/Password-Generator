import { useCallback, useState } from 'react';

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('abg');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*()';
    }

    for (let i = 0; i < Length; i++) { 
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [Length, numberAllowed, charAllowed, setPassword]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className="w-full max-w-md shadow-md rounded-lg p-4 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-orange-500 bg-gray-900"
            placeholder="password"
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6} 
              max={100}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className='text-white'>Length: {Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className='text-white' >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className='text-white' >Chars</label>
          </div>
        </div>
        <button
          onClick={passwordGenerator}
          className="w-full py-2 bg-orange-500 text-white rounded-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
