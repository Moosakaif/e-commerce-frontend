'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ReportPage() {
  const { id } = useParams();
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    // Simulate fetching report by ID (we'll connect real API later)
    const mockReport = {
      vin: id,
      make: 'Toyota',
      model: 'Camry',
      year: '2018',
      mileage: '67,120 miles',
      titleStatus: 'Clean',
      accidentHistory: 'No reported accidents',
      serviceRecords: 5,
    };

    setTimeout(() => {
      setReport(mockReport);
    }, 500);
  }, [id]);

  if (!report) {
    return <div className="text-center py-10 text-gray-500">Loading report...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">Vehicle History Report</h1>

      <div className="grid grid-cols-2 gap-6 text-gray-800 text-lg">
        <p><strong>VIN:</strong> {report.vin}</p>
        <p><strong>Year:</strong> {report.year}</p>
        <p><strong>Make:</strong> {report.make}</p>
        <p><strong>Model:</strong> {report.model}</p>
        <p><strong>Mileage:</strong> {report.mileage}</p>
        <p><strong>Title Status:</strong> {report.titleStatus}</p>
        <p><strong>Accident History:</strong> {report.accidentHistory}</p>
        <p><strong>Service Records:</strong> {report.serviceRecords}</p>
      </div>

      <div className="text-center mt-8">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => alert('Download triggered (will add PDF later)')}
        >
          📄 Download Full Report (PDF)
        </button>
      </div>
    </div>
  );
}
