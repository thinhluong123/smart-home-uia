import './Header.css'
import { useState, useEffect } from 'react';
export default function Header( {page}: {page: string} ) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="topbar">
      <span className="topbar-title">{page}</span>
      <span className="topbar-sub">— Overview</span>
      <div className="topbar-spacer"></div>
      <div className="topbar-clock" id="nav-clock">
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  )
}