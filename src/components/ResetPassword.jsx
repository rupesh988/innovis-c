import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-between p-4 bg-white absolute left-6 top-1 hover:translate-x-5 duration-500 ease-in-out">
            <h1 className="text-black text-4xl font-bold  ">
            Innovis
            </h1>
            </div>
            <div className="bg-white p-8 rounded-lg  w-96">
                <h2 className="text-2xl font-bold font-mono text-center mb-6">Reset Password</h2>
                <div className="mb-4 mt-4">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email'
                        className="mt-1 block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>

                <button onClick={handleLogin} className="w-full bg-black text-white text-lg p-2 rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-500  ">
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default Login;
