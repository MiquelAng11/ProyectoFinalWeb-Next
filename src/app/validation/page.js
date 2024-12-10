"use client";
import { useState } from 'react';
import { validateUser } from '../../lib/api';
import { getToken } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function Validation() {
  const [code, setCode] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = getToken();
    if (!token) {
      alert('No hay token. Regístrate o inicia sesión primero.');
      return;
    }
    const res = await validateUser(code, token);
    if (res.ok) {
      alert('Validación correcta');
      router.push('/');
    } else {
      alert('Código incorrecto');
    }
  }

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-2xl font-bold">Validar Cuenta</h2>
        <input className="border p-2 w-full text-black" placeholder="Código (6 dígitos)" value={code} onChange={e=>setCode(e.target.value)} required />
        <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">Validar</button>
      </form>
    </div>
  );
}
