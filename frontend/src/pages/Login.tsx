import './Login.css'
import { useAuth } from '../services/AuthProvider'
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GoogleButton from '../components/ui/GoogleButton';
import { useNoti } from '../services/NotiProvider';
const STAT_ITEMS = [
  {
    num: "40K+",
    label: "Active Users"
  },
  {
    num: "200+",
    label: "Devices"
  },
  {
    num: "99.9%",
    label: "Uptime"
  }
];
const BADGE_ITEMS = [
  {
    title: "OAuth 2.0",
    sub: "Industry Standard"
  },
  {
    title: "End-to-End",
    sub: "Encrypted"
  },
  { 
    title: "GDPR",
    sub: "Compliant"
  } 
];
export default function Login() {
  const { user, handleLogin } = useAuth();
  const { setNotification } = useNoti();
  const [checked, setChecked] = useState<boolean>(false);
  const [visibleError, setVisibleError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
const handleLoginClick = async () => {
  if (checked) {
    setIsLoading(true);
    setNotification('Redirecting to Google for authentication...');
    try {
      await handleLogin();
    } catch (error) {
      console.error("Login failed", error);
      setIsLoading(false);
      setNotification('Login failed. Please try again.');
    }
  } else {
    setVisibleError(true);
  }
}
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  return (
    <div className="page-wrapper">
      <aside className="left-panel">
        <a href="#" className="logo anim-slide-left">
          <div className="logo-mark">S</div>
          <div className="logo-text">
            Smart Home UIA
            <span>Intelligent Living</span>
          </div>
        </a>

        <div className="panel-hero">
          <div className="panel-tag anim-slide-left delay-1">
            New · 2026 Platform
          </div>

          <h1 className="panel-heading anim-slide-left delay-2">
            Control every<br />corner of your<br /><em>smart home.</em>
          </h1>

          <p className="panel-desc anim-slide-left delay-3">
            One unified interface to manage lighting, climate, security, and
            energy — all in real time, from anywhere in the world.
          </p>

          <div className="stats-row anim-slide-left delay-4">
            {STAT_ITEMS.map((item) => (
              <div className="stat-box" key={item.label}>
                <span className="stat-num">{item.num}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="right-panel">
        <p className="panel-nav">
          No account? <Link to="/register">Create one</Link>
        </p>

        <div className="form-card">
          <p className="form-eyebrow anim-slide-up">Welcome Back</p>
          <h2 className="form-title anim-slide-up delay-1">
            Sign in to<br />your dashboard.
          </h2>
          <p className="form-subtitle anim-slide-up delay-2">
            Use your Google account to access Smart Home UIA. No password
            required.
          </p>

          <GoogleButton isLoading={isLoading} onClick={handleLoginClick} />

          <div className="terms-block anim-slide-up delay-4">
            <input type="checkbox" id="terms-cb" className="custom-checkbox" checked={checked} onChange={(e) => {setChecked(e.target.checked); setVisibleError(false);}} />
            <div>
              <label htmlFor="terms-cb" className="terms-text">
                By continuing, I confirm that I have read and agree to the
                <a href="#">Terms of Service</a> and
                <a href="#"> Privacy Policy</a> of Smart Home UIA.
              </label>
              {visibleError && (
                <div id="terms-error-msg" className="terms-error">
                  Please accept the Terms of Service to continue.
                </div>
              )}
            </div>
          </div>

          <div className="divider anim-slide-up delay-5">
            <div className="divider-line"></div>
            <span className="divider-text">Secured by</span>
            <div className="divider-line"></div>
          </div>

          <div className="security-row anim-slide-up delay-5">
            {BADGE_ITEMS.map((item) => (
              <div className="badge" key={item.title}>
                <span className="badge-title">{item.title}</span>
                <span className="badge-sub">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}