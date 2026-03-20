import './ToastNoti.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useNoti } from '../../services/NotiProvider';

export default function ToastNoti() {
  const { notification, setNotification } = useNoti();
  
  const [displayMsg, setDisplayMsg] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (notification) {
      setIsVisible((currentlyVisible) => {
        if (currentlyVisible) return false; 
        setDisplayMsg(notification);
        return true;
      });
    }
  }, [notification]);

  useEffect(() => {
    if (isVisible) {
      startTimer();
    } else {
      stopTimer();
    }
    
    return () => stopTimer();
  }, [isVisible, startTimer, stopTimer]);

  const handleTransitionEnd = () => {
    if (!isVisible) {
      if (notification && displayMsg !== notification) {
        setDisplayMsg(notification);
        setIsVisible(true);
      } else {
        setNotification(null);
        setDisplayMsg('');
      }
    }
  };

  return (
    <div 
      className={`toast ${isVisible ? 'show' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      onMouseEnter={stopTimer} 
      onMouseLeave={startTimer}
    >
      {displayMsg}
    </div>
  );
}