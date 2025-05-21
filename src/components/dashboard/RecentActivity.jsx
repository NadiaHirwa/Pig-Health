import React from 'react';
import { FaCalendarAlt, FaSyringe, FaFileMedical, FaComments } from 'react-icons/fa';

const RecentActivity = () => {
  const activities = [
    {
      icon: <FaCalendarAlt />,
      title: 'New Appointment Request',
      description: 'Farmer John requested a health check for Pig #123',
      time: '2 hours ago',
      type: 'appointment'
    },
    {
      icon: <FaSyringe />,
      title: 'Vaccination Due',
      description: 'Pig #456 is due for swine flu vaccination',
      time: '3 hours ago',
      type: 'vaccination'
    },
    {
      icon: <FaFileMedical />,
      title: 'Health Record Updated',
      description: 'Updated treatment plan for Pig #789',
      time: '5 hours ago',
      type: 'health'
    },
    {
      icon: <FaComments />,
      title: 'New Message',
      description: 'Farmer Sarah sent a message about Pig #234',
      time: '6 hours ago',
      type: 'message'
    }
  ];

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#1a1a1a'
      }}>
        Recent Activity
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {activities.map((activity, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '12px',
              borderRadius: '8px',
              background: '#f9fafb',
              transition: 'all 0.2s',
              cursor: 'pointer',
              ':hover': {
                background: '#f3f4f6'
              }
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4b5563'
            }}>
              {activity.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '4px'
              }}>
                {activity.title}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#6b7280',
                marginBottom: '4px'
              }}>
                {activity.description}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#9ca3af'
              }}>
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity; 