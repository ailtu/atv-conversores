import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Atividade Conversores - Front End</h1>
      <p className="mt-4">escolha alguma função:</p>
      <ul className="mt-6 space-y-2">
        <li><Link href="/sobre" className="text-blue-600 underline">tela de sobre</Link></li>
        <li><Link href="/conversor-moeda" className="text-blue-600 underline"> Moeda</Link></li>
        <li><Link href="/conversor-temperatura" className="text-blue-600 underline">temperatura</Link></li>
        <li><Link href="/conversor-distancia" className="text-blue-600 underline">distanciancia</Link></li>
      </ul>
    </main>
  );
}

