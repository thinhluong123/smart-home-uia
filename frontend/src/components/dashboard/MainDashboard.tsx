// Unfinished for now
import './MainDashboard.css'
export default function MainDashboard() {
  return (
    <div className="main-content">
      <section>
        <div className="section-head">
          <div className="section-title">Live Sensors</div>
          <span className="live-dot">Live</span>
        </div>

        <div className="sensor-grid">
          <div className="sensor-card alert-state" id="sensor-temp">
            <div className="sensor-top">
              <div className="sensor-icon">
                <i className="fa-solid fa-temperature-half"></i>
              </div>
              <span className="sensor-name">Temperature</span>
            </div>
            <div className="sensor-value-row">
              <span className="sensor-value">27.4</span>
              <span className="sensor-unit">°C</span>
            </div>
            <div className="sensor-footer">
              <span className="sensor-status alert">ALERT</span>
              <div className="sensor-sparkline">
                <div className="spark-bar" style={{ height: '40%' }}></div>
                <div className="spark-bar" style={{ height: '52%' }}></div>
                <div className="spark-bar" style={{ height: '48%' }}></div>
                <div className="spark-bar" style={{ height: '65%' }}></div>
                <div className="spark-bar" style={{ height: '58%' }}></div>
                <div className="spark-bar" style={{ height: '72%' }}></div>
                <div className="spark-bar" style={{ height: '78%' }}></div>
                <div className="spark-bar" style={{ height: '90%' }}></div>
              </div>
            </div>
          </div>

          <div className="sensor-card warn-state" id="sensor-humidity">
            <div className="sensor-top">
              <div className="sensor-icon">
                <i className="fa-solid fa-droplet"></i>
              </div>
              <span className="sensor-name">Humidity</span>
            </div>
            <div className="sensor-value-row">
              <span className="sensor-value">62.1</span>
              <span className="sensor-unit">%</span>
            </div>
            <div className="sensor-footer">
              <span className="sensor-status warning">WARNING</span>
              <div className="sensor-sparkline">
                <div className="spark-bar" style={{ height: '48%' }}></div>
                <div className="spark-bar" style={{ height: '53%' }}></div>
                <div className="spark-bar" style={{ height: '49%' }}></div>
                <div className="spark-bar" style={{ height: '58%' }}></div>
                <div className="spark-bar" style={{ height: '56%' }}></div>
                <div className="spark-bar" style={{ height: '62%' }}></div>
                <div className="spark-bar" style={{ height: '66%' }}></div>
                <div className="spark-bar" style={{ height: '70%' }}></div>
              </div>
            </div>
          </div>

          <div className="sensor-card" id="sensor-light">
            <div className="sensor-top">
              <div className="sensor-icon"><i className="fa-solid fa-sun"></i></div>
              <span className="sensor-name">Light Level</span>
            </div>
            <div className="sensor-value-row">
              <span className="sensor-value">480</span>
              <span className="sensor-unit">lux</span>
            </div>
            <div className="sensor-footer">
              <span className="sensor-status normal">NORMAL</span>
              <div className="sensor-sparkline">
                <div className="spark-bar" style={{ height: '28%' }}></div>
                <div className="spark-bar" style={{ height: '38%' }}></div>
                <div className="spark-bar" style={{ height: '52%' }}></div>
                <div className="spark-bar" style={{ height: '46%' }}></div>
                <div className="spark-bar" style={{ height: '44%' }}></div>
                <div className="spark-bar" style={{ height: '48%' }}></div>
                <div className="spark-bar" style={{ height: '50%' }}></div>
                <div className="spark-bar" style={{ height: '48%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mid-row">
        <div className="device-panel">
          <div className="section-head">
            <div className="section-title">Device Status</div>
            <span className="section-meta" id="devices-online">5/6 Online</span>
          </div>

          <div className="device-list">
            <div className="device-item on">
              <div className="device-icon-box">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="device-info">
                <div className="device-name">
                  Living Room Light
                  <span className="device-badge on-badge">ON</span>
                </div>
                <div className="device-sub">Living Room · Smart Bulb</div>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="device-toggle"
                  data-id="d1"
                  checked
                />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>

            <div className="device-item">
              <div className="device-icon-box">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="device-info">
                <div className="device-name">
                  Bedroom Light
                  <span className="device-badge off-badge">OFF</span>
                </div>
                <div className="device-sub">Bedroom · Smart Bulb</div>
              </div>
              <label className="toggle">
                <input type="checkbox" className="device-toggle" data-id="d2" />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>

            <div className="device-item on">
              <div className="device-icon-box">
                <i className="fa-solid fa-fan"></i>
              </div>
              <div className="device-info">
                <div className="device-name">
                  Ceiling Fan <span className="device-badge on-badge">ON</span>
                </div>
                <div className="device-sub">Living Room · 3-speed</div>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="device-toggle"
                  data-id="d3"
                  checked
                />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>

            <div className="device-item">
              <div className="device-icon-box">
                <i className="fa-solid fa-door-closed"></i>
              </div>
              <div className="device-info">
                <div className="device-name">
                  Front Door
                  <span className="device-badge off-badge">UNLOCKED</span>
                </div>
                <div className="device-sub">Entrance · Smart Lock</div>
              </div>
              <label className="toggle">
                <input type="checkbox" className="device-toggle" data-id="d4" />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>

            <div className="device-item">
              <div className="device-icon-box">
                <i className="fa-solid fa-snowflake"></i>
              </div>
              <div className="device-info">
                <div className="device-name">
                  AC Unit <span className="device-badge off-badge">OFF</span>
                </div>
                <div className="device-sub">Bedroom · 18000 BTU</div>
              </div>
              <label className="toggle">
                <input type="checkbox" className="device-toggle" data-id="d5" />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>

            <div className="device-item on">
              <div className="device-icon-box">
                <i className="fa-solid fa-video"></i>
              </div>
              <div className="device-info">
                <div className="device-name">
                  Security Camera
                  <span className="device-badge on-badge">ON</span>
                </div>
                <div className="device-sub">Garden · 1080p Live</div>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="device-toggle"
                  data-id="d6"
                  checked
                />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="notif-panel">
          <div className="section-head">
            <div className="section-title">Recent Alerts</div>
            <span className="section-meta">Last 24 hours</span>
          </div>

          <div className="notif-list">
            <div className="notif-item">
              <div className="notif-dot alert"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Temperature exceeded threshold (34°C) in Living Room
                </div>
                <div className="notif-time">2 min ago</div>
              </div>
              <div className="notif-type-tag tag-alert">Alert</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot system"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Yolo:Bit connection re-established successfully
                </div>
                <div className="notif-time">14 min ago</div>
              </div>
              <div className="notif-type-tag tag-system">System</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot warning"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Humidity rising rapidly — now at 62%, trend upward
                </div>
                <div className="notif-time">28 min ago</div>
              </div>
              <div className="notif-type-tag tag-warning">Warning</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot alert"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Motion detected at Front Door sensor (Zone 1)
                </div>
                <div className="notif-time">45 min ago</div>
              </div>
              <div className="notif-type-tag tag-alert">Alert</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot success"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Auto-mode lights OFF at 23:00 completed
                </div>
                <div className="notif-time">1 hr ago</div>
              </div>
              <div className="notif-type-tag tag-success">OK</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot system"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Firmware update available for Yolo:Bit v2.4.1
                </div>
                <div className="notif-time">3 hr ago</div>
              </div>
              <div className="notif-type-tag tag-system">System</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot warning"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Living Room Light has been ON for over 6 hours
                </div>
                <div className="notif-time">4 hr ago</div>
              </div>
              <div className="notif-type-tag tag-warning">Warning</div>
            </div>

            <div className="notif-item">
              <div className="notif-dot success"></div>
              <div className="notif-body">
                <div className="notif-msg">
                  Daily energy report generated and saved
                </div>
                <div className="notif-time">6 hr ago</div>
              </div>
              <div className="notif-type-tag tag-success">OK</div>
            </div>
          </div>

          <a href="notifications.html" className="btn-view-all">
            <i
              className="fa-solid fa-list"
              style={{ marginRight: '5px', fontSize: '9px' }}
            ></i>
            View All Notifications
          </a>
        </div>
      </div>

      <section>
        <div className="section-head">
          <div className="section-title">Quick Actions</div>
          <span className="section-meta">Tap to toggle</span>
        </div>

        <div className="quick-actions-grid">
          <button className="qa-btn danger-qa" data-qa="all-lights-off">
            <div className="qa-icon-box">
              <i className="fa-solid fa-power-off"></i>
            </div>
            <span className="qa-label">All Lights Off</span>
            <span className="qa-state">INSTANT</span>
          </button>

          <button className="qa-btn" data-qa="lock-door">
            <div className="qa-icon-box"><i className="fa-solid fa-lock"></i></div>
            <span className="qa-label">Lock Front Door</span>
            <span className="qa-state">UNLOCKED</span>
          </button>

          <button className="qa-btn active-qa" data-qa="auto-mode">
            <div className="qa-icon-box"><i className="fa-solid fa-gears"></i></div>
            <span className="qa-label">Auto Mode</span>
            <span className="qa-state on">ON</span>
          </button>

          <button className="qa-btn" data-qa="night-mode">
            <div className="qa-icon-box"><i className="fa-solid fa-moon"></i></div>
            <span className="qa-label">Night Mode</span>
            <span className="qa-state">OFF</span>
          </button>

          <button className="qa-btn" data-qa="eco-mode">
            <div className="qa-icon-box"><i className="fa-solid fa-leaf"></i></div>
            <span className="qa-label">Eco Mode</span>
            <span className="qa-state">OFF</span>
          </button>
        </div>
      </section>
    </div>
  )
}