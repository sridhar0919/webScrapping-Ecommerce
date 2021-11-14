import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navibar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1 className="navbar-brand" href="#">
              Ecommerce
            </h1>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
