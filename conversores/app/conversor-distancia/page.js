"use client";

import { useState } from 'react';

export default function ConversorDistancia() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');

  const handleMetrosChange = (e) => {
    const valor = e.target.value;
    setMetros(valor);
    const m = parseFloat(valor);
    if (!isNaN(m)) {
      setPes((m * 3.28084).toFixed(2));
      setPolegadas((m * 39.3701).toFixed(2));
    } else {
      setPes('');
      setPolegadas('');
    }
  };

  const handlePesChange = (e) => {
    const valor = e.target.value;
    setPes(valor);
    const p = parseFloat(valor);
    if (!isNaN(p)) {
      const m = p / 3.28084;
      setMetros(m.toFixed(2));
      setPolegadas((m * 39.3701).toFixed(2));
    } else {
      setMetros('');
      setPolegadas('');
    }
  };

  const handlePolegadasChange = (e) => {
    const valor = e.target.value;
    setPolegadas(valor);
    const pol = parseFloat(valor);
    if (!isNaN(pol)) {
      const m = pol / 39.3701;
      setMetros(m.toFixed(2));
      setPes((m * 3.28084).toFixed(2));
    } else {
      setMetros('');
      setPes('');
    }
  };

  return (
    <main className="min-h-screen p-8 bg-green-50">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-black">Conversor de Distância</h1>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Metros"
            value={metros}
            onChange={handleMetrosChange}
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="number"
            placeholder="Pés"
            value={pes}
            onChange={handlePesChange}
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="number"
            placeholder="Polegadas"
            value={polegadas}
            onChange={handlePolegadasChange}
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
        </div>
      </div>
    </main>
  );
}
