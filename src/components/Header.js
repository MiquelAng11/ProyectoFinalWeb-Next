"use client";
import Link from 'next/link';
import { clearToken, getToken } from '../lib/auth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setToken(getToken());
  }, [pathname]);

  function handleLogout() {
    clearToken();
    setToken(null);
    router.push('/');
  }

  return (
    <header className="flex items-center justify-between p-4 bg-gray-300 text-black">
      <div className="text-xl font-bold">ProjectManager</div>
      <div>
        {!token ? (
          <>
            <Link className="mr-4" href="/login">Login</Link>
            <Link href="/register">Registro</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Cerrar Sesión</button>
        )}
      </div>
    </header>
  );
}
