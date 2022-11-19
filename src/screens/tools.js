import React from 'react';
import img7 from '../../src/Pictures/img7.png';
import img8 from '../../src/Pictures/img8.png';
import { NavLink } from 'react-router-dom';
function onClickButton(event) {
  event.preventDefault();
}

function tools({ title, imgsrc }) {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={img7} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/checklist"
                  >
                    <h5 className="card-title">Checklist</h5>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={img8} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/notes"
                  >
                    <h5 className="card-title">Notes</h5>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tools;
