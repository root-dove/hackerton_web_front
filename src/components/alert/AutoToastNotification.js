import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const notifications = [
  { type: 'info', message: "정보 알림입니다!" },
  { type: 'warning', message: "경고 알림입니다!" },
  { type: 'error', message: "오류 알림입니다!" },
  { type: 'success', message: "성공 알림입니다!" }
];

const AutoToastNotification = () => {
  useEffect(() => {
    let index = 0;
    const showNotification = () => {
      const { type, message } = notifications[index];
      switch (type) {
        case 'info':
          toast.info(message);
          break;
        case 'warning':
          toast.warn(message);
          break;
        case 'error':
          toast.error(message);
          break;
        case 'success':
          toast.success(message);
          break;
        default:
          toast.info(message);
      }
      index = (index + 1) % notifications.length; 
    };

    const intervalId = setInterval(showNotification, 100000);

    return () => clearInterval(intervalId);
  }, []);

  return null; 
};

export default AutoToastNotification;
