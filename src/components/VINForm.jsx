'use client';
import { useState } from 'react';

export default function VINForm() {
  const [vin, setVin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (vin.length !== 17) {
      setError('VIN must be 17 characters long');
      return;
    }

    setError('');
    setLoading(true);

    // TODO: Call backend or redirect to payment
    setTimeout(() => {
      alert(`VIN submitted: ${vin}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center">Check Your Vehicle History</h2>

      <input
        type="text"
        placeholder="Enter your 17-digit VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value.toUpperCase())}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? 'Checking...' : 'Submit VIN'}
      </button>
    </form>
  );
}
