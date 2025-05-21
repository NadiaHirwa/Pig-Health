import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaPiggyBank, 
  FaUserFriends, 
  FaCalendarAlt, 
  FaComments, 
  FaSyringe, 
  FaFileMedical, 
  FaChartBar, 
  FaUserCog, 
  FaCog,
  FaBell,
  FaClipboardList,
  FaPrescriptionBottleAlt,
  FaNotesMedical
} from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: 'Dashboard', path: '/vet' },
    { icon: <FaPiggyBank />, label: 'Pigs Under Care', path: '/vet/pigs' },
    { icon: <FaUserFriends />, label: 'Farmers', path: '/vet/farmers' },
    { icon: <FaCalendarAlt />, label: 'Appointments', path: '/vet/appointments' },
    { icon: <FaBell />, label: 'Vet Requests', path: '/vet/requests' },
    { icon: <FaComments />, label: 'Chat', path: '/vet/chat' },
    { icon: <FaSyringe />, label: 'Vaccinations', path: '/vet/vaccinations' },
    { icon: <FaPrescriptionBottleAlt />, label: 'Treatments', path: '/vet/treatments' },
    { icon: <FaNotesMedical />, label: 'Visit Notes', path: '/vet/visit-notes' },
    { icon: <FaFileMedical />, label: 'Health Records', path: '/vet/health-records' },
    { icon: <FaClipboardList />, label: 'Reports', path: '/vet/reports' },
    { icon: <FaUserCog />, label: 'Profile', path: '/vet/profile' },
    { icon: <FaCog />, label: 'Settings', path: '/vet/settings' },
  ];

  return (
    <aside style={{
      width: '250px',
      background: '#ffffff',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      boxShadow: '2px 0 4px rgba(0,0,0,0.05)',
      padding: '24px 0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ padding: '0 24px', marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          color: '#1a1a1a',
          margin: 0
        }}>
          Smart Pig Vet
        </h1>
      </div>
      
      <nav style={{ flex: 1 }}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'all 0.2s',
              ':hover': {
                background: '#f3f4f6',
                color: '#1a1a1a'
              }
            }}
          >
            <span style={{ marginRight: '12px', fontSize: '18px' }}>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 