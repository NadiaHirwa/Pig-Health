import React from 'react';

const activities = [
  { label: 'Farmer registered', value: 4238 },
  { label: 'Message from Farmer', value: 1005 },
  { label: 'Vet approved', value: 914 },
  { label: 'Pig alert', value: 281 },
];

const RecentActivity = () => (
  <div style={{ 
    background: '#ffffff', 
    borderRadius: '12px', 
    padding: '24px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
    border: '1px solid #e5e7eb',
    minHeight: '300px'
  }}>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '20px',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '10px'
    }}>
      <div style={{ 
        fontWeight: '600',
        fontSize: '18px',
        color: '#1a1a1a'
      }}>Recent Activity</div>
      <a href="#" style={{ 
        color: '#4f8cff', 
        fontSize: '14px', 
        textDecoration: 'none' 
      }}>View details</a>
    </div>
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {activities.map((item, idx) => (
        <div 
          key={item.label} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}
        >
          <span style={{ 
            color: '#1a1a1a',
            fontSize: '16px'
          }}>{item.label}</span>
          <span style={{ 
            fontWeight: '600',
            color: '#4f8cff',
            fontSize: '16px'
          }}>{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity; 