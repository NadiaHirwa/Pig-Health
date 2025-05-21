import React from 'react';
import { FaSearch, FaFilter, FaPlus } from 'react-icons/fa';

const PigsManagement = () => {
  const pigs = [
    {
      id: 'PIG-001',
      name: 'Porky',
      age: '2 years',
      breed: 'Yorkshire',
      farmer: 'John Smith',
      healthStatus: 'Healthy',
      lastCheckup: '2024-03-15'
    },
    {
      id: 'PIG-002',
      name: 'Babe',
      age: '1 year',
      breed: 'Duroc',
      farmer: 'Sarah Johnson',
      healthStatus: 'Under Treatment',
      lastCheckup: '2024-03-10'
    },
    {
      id: 'PIG-003',
      name: 'Wilbur',
      age: '3 years',
      breed: 'Hampshire',
      farmer: 'Mike Brown',
      healthStatus: 'Healthy',
      lastCheckup: '2024-03-12'
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          color: '#1a1a1a'
        }}>
          Pigs Management
        </h1>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#4f8cff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <FaPlus /> Add New Pig
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            borderRadius: '8px',
            padding: '8px 16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid #e5e7eb'
          }}>
            <FaSearch style={{ 
              color: '#9ca3af',
              marginRight: '12px',
              fontSize: '16px'
            }} />
            <input
              type="text"
              placeholder="Search pigs..."
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '14px',
                color: '#1f2937',
                background: 'transparent'
              }}
            />
          </div>
        </div>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#ffffff',
          color: '#4b5563',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <FaFilter /> Filter
        </button>
      </div>

      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        overflow: 'hidden'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              background: '#f9fafb',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>ID</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Name</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Age</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Breed</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Farmer</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Health Status</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Last Checkup</th>
            </tr>
          </thead>
          <tbody>
            {pigs.map((pig) => (
              <tr key={pig.id} style={{
                borderBottom: '1px solid #e5e7eb',
                ':hover': {
                  background: '#f9fafb'
                }
              }}>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1f2937' }}>{pig.id}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1f2937' }}>{pig.name}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1f2937' }}>{pig.age}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1f2937' }}>{pig.breed}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1f2937' }}>{pig.farmer}</td>
                <td style={{ padding: '12px 16px', fontSize: '14px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: pig.healthStatus === 'Healthy' ? '#dcfce7' : '#fee2e2',
                    color: pig.healthStatus === 'Healthy' ? '#166534' : '#991b1b',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {pig.healthStatus}
                  </span>
                </td>
                <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1f2937' }}>{pig.lastCheckup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PigsManagement; 