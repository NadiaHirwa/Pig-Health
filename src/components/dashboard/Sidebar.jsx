import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUsers, 
  FaShoppingCart, 
  FaDatabase, 
  FaMicrochip, 
  FaEnvelope, 
  FaCog 
} from 'react-icons/fa';

const menuItems = [
  { path: '/admin', icon: <FaHome />, label: 'Dashboard' },
  { path: '/admin/users', icon: <FaUsers />, label: 'User Management' },
  { path: '/admin/marketplace', icon: <FaShoppingCart />, label: 'Marketplace' },
  { path: '/admin/health-db', icon: <FaDatabase />, label: 'Pig Health DB' },
  { path: '/admin/devices', icon: <FaMicrochip />, label: 'Devices (IoT)' },
  { path: '/admin/contact', icon: <FaEnvelope />, label: 'Contact Requests' },
  { path: '/admin/settings', icon: <FaCog />, label: 'Settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside style={{
      width: '250px',
      background: '#ffffff',
      boxShadow: '2px 0 8px rgba(0,0,0,0.03)',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      padding: '24px 0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo/Brand */}
      <div style={{
        padding: '0 24px',
        marginBottom: '32px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#4f8cff',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <FaHome />
          <span>Admin Panel</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 24px',
                color: isActive ? '#4f8cff' : '#666',
                background: isActive ? '#f0f5ff' : 'transparent',
                borderLeft: isActive ? '3px solid #4f8cff' : '3px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.2s',
                marginBottom: '4px'
              }}
            >
              <span style={{ 
                marginRight: '12px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center'
              }}>
                {item.icon}
              </span>
              <span style={{
                fontSize: '14px',
                fontWeight: isActive ? '600' : '400'
              }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div style={{
        padding: '24px',
        borderTop: '1px solid #e5e7eb',
        marginTop: 'auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#f0f5ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4f8cff'
          }}>
            <FaUsers />
          </div>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              Admin User
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              admin@example.com
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 