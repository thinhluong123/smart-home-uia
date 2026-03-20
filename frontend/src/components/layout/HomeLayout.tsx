import './HomeLayout.css'
import { useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';

export default function Dashboard( {children, headerName}: {children: React.ReactNode; headerName?: string} ) {
  const [activeSideBar, setActiveSideBar] = useState<boolean>(true);
  return (
    <div className="home-page">
      <SideBar active={activeSideBar} setActive={setActiveSideBar} />
      <div className="page-shell">
        <Header page={headerName || 'Dashboard'} />
        {children}
      </div>
    </div>
  );
}