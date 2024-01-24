import React, { useState, FormEvent, useEffect } from 'react';
import { PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2';

function Login() {
    const [pixelStreaming, setPixelStreaming] = useState<PixelStreaming>();

    // State to manage form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'http://192.168.68.116:5050/users/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const result = await response.json();

            if (result.message === 'Login successful') {
                window.alert(result.message)
                const descriptor = {
                    PlayerCredentials: {
                        FirstName: result.firstName,
                        LastName: result.lastName
                    }
                };
                useEffect(() => {
                    pixelStreaming.emitUIInteraction(descriptor);
                },[descriptor]);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        console.log('Login button clicked!');
        console.log('email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="bg-black">
            <form onSubmit={handleLogin}>
                <label>
                    email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
