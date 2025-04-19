"use client";

import { useState } from 'react';

export default function ConversorMoeda() {
  const cotacao = 5.15; // Cotação do dia pedido, mais ou menos umas 23h da noite
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');

  const handleRealChange = (e) => {
    const valor = e.target.value;
    setReal(valor);
    setDolar(valor ? (parseFloat(valor) / cotacao).toFixed(2) : '');
  };

  const handleDolarChange = (e) => {
    const valor = e.target.value;
    setDolar(valor);
    setReal(valor ? (parseFloat(valor) * cotacao).toFixed(2) : '');
  };

  return (
    <main className="min-h-screen p-8 bg-blue-50">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Conversor de Moeda</h1>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Reais (BRL)"
            value={real}
            onChange={handleRealChange}
            className="w-full p-2 rounded border border-gray-300"
          />
          <input
            type="number"
            placeholder="Dólares (USD)"
            value={dolar}
            onChange={handleDolarChange}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
      </div>
    </main>
  );
}
