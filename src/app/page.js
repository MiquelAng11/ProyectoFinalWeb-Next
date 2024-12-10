"use client";
import { useEffect, useState } from 'react';
import { getToken } from '../lib/auth';

export default function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getToken());
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bienvenido a ProjectManager</h1>
      {token ? (
        <p>Estás logueado. Ve a la sección de clientes.</p>
      ) : (
        <p>Por favor, inicia sesión o regístrate para empezar.</p>
      )}
    </div>
  );
}
