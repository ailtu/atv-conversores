"use client";

import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const valor = e.target.value;
    setCelsius(valor);
    setFahrenheit(valor ? ((parseFloat(valor) * 9) / 5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const valor = e.target.value;
    setFahrenheit(valor);
    setCelsius(valor ? (((parseFloat(valor) - 32) * 5) / 9).toFixed(2) : '');
  };

  return (
    <main className="min-h-screen p-8 bg-red-50">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Conversor de Temperatura</h1>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Celsius (°C)"
            value={celsius}
            onChange={handleCelsiusChange}
            className="w-full p-2 rounded border border-gray-300"
          />
          <input
            type="number"
            placeholder="Fahrenheit (°F)"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
      </div>
    </main>
  );
}
