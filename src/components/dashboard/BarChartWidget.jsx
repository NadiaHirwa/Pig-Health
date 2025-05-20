import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feeds', value: 150 },
  { name: 'Drugs', value: 100 },
  { name: 'Equipment', value: 50 },
  { name: 'Devices', value: 180 },
];

const BarChartWidget = () => (
  <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
    <div style={{ fontWeight: 600, marginBottom: 16 }}>Marketplace Sales</div>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4f8cff" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartWidget; 