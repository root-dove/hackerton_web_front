import React from 'react';

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  const getClassName = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded ${getClassName()} shadow-lg`} onClick={onClose}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
