import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
function Navbar() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`collapse navbar-collapse ${show ? 'show' : ''}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only"></span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      API
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/tools"
                    >
                      Components
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
