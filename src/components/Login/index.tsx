import React, { useState, FormEvent } from 'react';

function Login() {
  // State to manage form input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Add logic here to handle login, such as making an API request
    console.log('Login button clicked!');
    console.log('Username:', username);
    console.log('Password:', password);
    const descriptor = {
		LoadLevel: "/Game/Maps/Level_2",
		PlayerCharacter: {
			Name: "Shinobi",
			Skin: "Dynasty",
		},
	};
	this.stream.emitUIInteraction(descriptor);
  };

  return (
    <div className='bg-black'>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
