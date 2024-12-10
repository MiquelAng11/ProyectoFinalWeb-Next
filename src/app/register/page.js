"use client";
import { useState } from 'react';
import { registerUser } from '../../lib/api';
import { setToken } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const res = await registerUser({nombre, apellidos, email, password});
    if (res.ok) {
      const data = await res.json();
      setToken(data.token);
      router.push('/validation');
    } else {
      alert('Error en el registro');
    }
  }

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-2xl font-bold">Registro</h2>
        <input className="border p-2 w-full text-black" placeholder="Nombre" value={nombre} onChange={e=>setNombre(e.target.value)} required />
        <input className="border p-2 w-full text-black" placeholder="Apellidos" value={apellidos} onChange={e=>setApellidos(e.target.value)} required />
        <input className="border p-2 w-full text-black" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="border p-2 w-full text-black" placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <input className="border p-2 w-full text-black" placeholder="Confirmar Contraseña" type="password" value={confPassword} onChange={e=>setConfPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Registrarse</button>
      </form>
    </div>
  );
}
