"use client";
import { useState } from 'react';
import { loginUser } from '../../lib/api';
import { setToken } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await loginUser(email, password);
    if (res.ok) {
      const data = await res.json();
      setToken(data.token);
      router.push('/');
    } else {
      alert('Error de login');
    }
  }

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          className="border p-2 w-full text-black"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full text-black"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
