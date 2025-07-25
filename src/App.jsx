import React, { useState, useCallback, useRef } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  

  const passgen = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*';

    let pass = '';
    for (let i = 0; i < length; i++) {
      const char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

 


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-gray-800 text-white'>
      <h1 className='text-3xl font-bold text-center mb-4'>Password Generator</h1>

      <div className='flex items-center mb-4'>
        <input
          type='text'
          value={password}
          readOnly
          className='w-full px-3 py-2 rounded bg-gray-700 text-white'
        />
      </div>

      <div className='flex flex-col gap-4'>
        {/* Length slider */}
        <div className='flex items-center justify-between'>
          <label htmlFor='lengthRange'>Length: {length}</label>
          <input
            id='lengthRange'
            type='range'
            min='4'
            max='32'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='w-1/2'
          />
        </div>

        {/* Include numbers */}
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='numbers'
            checked={numAllow}
            onChange={(e) => setNumAllow(e.target.checked)}
          />
          <label htmlFor='numbers'>Include Numbers</label>
        </div>

        {/* Include symbols */}
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='symbols'
            checked={charAllow}
            onChange={(e) => setCharAllow(e.target.checked)}
          />
          <label htmlFor='symbols'>Include Symbols</label>
        </div>

        {/* Generate button */}
        <button
          onClick={passgen}
          className='px-6 py-2 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg'
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
