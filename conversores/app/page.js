import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Atividade Conversores - Front End</h1>
      <ul className="mt-6 space-y-2">
        <li><Link href="/sobre" className="text-blue-600 underline">Sobre</Link></li>
        <li><Link href="/conversor-moeda" className="text-blue-600 underline">Converter BRL para USD</Link></li>
        <li><Link href="/conversor-temperatura" className="text-blue-600 underline">Converter Celsius para Fahrenheit</Link></li>
        <li><Link href="/conversor-distancia" className="text-blue-600 underline">Converter Distância 'Metro, Pés e Polegada'</Link></li>
      </ul>
    </main>
  );
}
