import React, { createContext, useState, useContext, useEffect } from 'react';
import Notification from './Notification';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [showNotification, setShowNotification] = useState(false);

  const triggerNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerNotification('자동으로 표시된 알림입니다!', 'error');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      {showNotification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setShowNotification(false)}
        />
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
export default NotificationProvider;