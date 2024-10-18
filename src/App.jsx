import React, { useState } from 'react';
import logoImage from './images.jpeg'
import './App.css'





function App() {

    // State variables to hold input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    // Login function to handle form submission
    const handleLogin = (event) => {
      event.preventDefault(); // Prevent page reload
  
      // Simple validation
      if (!username || !password) {
        setError('Please fill out both fields');
        return;
      }
  
      // Mock authentication logic (this is where you'd make your API call)
      if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        setError('');
      } else {
        setError('Invalid username or password');
      }
    };


  return (
    <>
  <body className="flex items-center justify-center">
        <div className="flex w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/2 p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-center">LOGIN</h2>
            <p className="mb-6 text-gray-700 text-center">Sign in to start your session</p>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form className="w-full" onSubmit={handleLogin}>
              <div className="mb-4 w-full">
                <div className="flex items-center bg-gray-200 rounded-md p-2">
                  <i className="fas fa-user text-gray-500 mr-2"></i>
                  <input
                    className="bg-transparent outline-none w-full"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6 w-full">
                <div className="flex items-center bg-gray-200 rounded-md p-2">
                  <i className="fas fa-lock text-gray-500 mr-2"></i>
                  <input
                    className="bg-transparent outline-none w-full"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="w-20 bg-blue-500 text-white py-2 rounded-md mb-4 hover-pop"
                type="submit"
              >
                SIGN IN
              </button>
            </form>

            <p className="text-gray-700 mb-4 text-center">Use another service to login in.</p>
            <div className="flex space-x-4">
              <button className="bg-purple-800 text-white py-2 px-4 rounded-md hover-pop">
                Microsoft
              </button>
              <button className="bg-purple-800 text-white py-2 px-4 rounded-md hover-pop">
                Facebook
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <img
              alt="NCC Limited logo with a colorful circular design"
              className="rounded-lg"
              height="300"
              src={logoImage}
              width="300"
            />
          </div>
        </div>
      </body>
  
    </>
  )
}

export default App
