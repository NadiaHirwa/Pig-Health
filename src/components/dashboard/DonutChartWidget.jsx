import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Flue', value: 60, color: '#4f8cff' },
  { name: 'Infection', value: 30, color: '#ffb347' },
  { name: 'Skin', value: 10, color: '#ff6961' },
];

const DonutChartWidget = () => (
  <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.03)', textAlign: 'center' }}>
    <div style={{ fontWeight: 600, marginBottom: 16 }}>Most Common Diseases</div>
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
    <div style={{ position: 'relative', top: '-140px', fontSize: 32, fontWeight: 700, color: '#4f8cff' }}>60%</div>
  </div>
);

export default DonutChartWidget; 