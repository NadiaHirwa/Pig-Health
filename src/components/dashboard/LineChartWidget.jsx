import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1 Dec', value: 40 },
  { name: '8 Dec', value: 120 },
  { name: '16 Dec', value: 60 },
  { name: '24 Dec', value: 146 },
  { name: '31 Dec', value: 130 },
];

const LineChartWidget = () => (
  <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
    <div style={{ fontWeight: 600, marginBottom: 16 }}>Monthly Growth of Farmers & Vets</div>
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#4f8cff" strokeWidth={3} dot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartWidget; 