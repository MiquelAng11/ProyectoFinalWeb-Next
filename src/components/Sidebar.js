import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 text-black">
      <ul className="space-y-2">
        <li><Link href="/clients">Clientes</Link></li>
        <li><Link href="/projects">Proyectos</Link></li>
        <li><Link href="/deliverynote">Albaranes</Link></li>
      </ul>
    </aside>
  );
}
