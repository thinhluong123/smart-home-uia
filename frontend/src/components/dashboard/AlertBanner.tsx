import './AlertBanner.css'
export default function AlertBanner({children}: {children: React.ReactNode}) {
  return (
    <div className="alert-banner" id="alert-banner">
      <div className="alert-dot"></div>
      <i
        className="fa-solid fa-triangle-exclamation"
        style={{ flexShrink: 0, fontSize: '13px' }}
      ></i>
      <span className="alert-text">{children}</span>
      <span className="alert-time" id="alert-time">09:42</span>
      <button className="alert-close" id="alert-close">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}