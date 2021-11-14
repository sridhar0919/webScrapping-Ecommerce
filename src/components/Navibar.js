import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navibar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container-fluid">
            <h1 className="navbar-brand text-light" href="#">
              Ecommerce
            </h1>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <h5 className="text-center mt-4">Showing results for mobiles</h5>
    </div>
  );
}
