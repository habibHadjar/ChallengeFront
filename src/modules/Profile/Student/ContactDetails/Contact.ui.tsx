import React from "react";
import { TContactUi } from "./Contact.types";

const Contact: TContactUi = ({}) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary" style={{ height: "5rem" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Challenge
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </nav>

       {/* Student coordonnées*/}
        <div
                        className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
                        style={{ maxHeight: "calc(100% - 5rem)" }}
                      >
                        <div className="card w-75 w-lg-100 m-3 ">
                          <div className="card-header">Login</div>
                          <div className="card-body">
                            <div className="mb-3">
                              <label htmlFor="InputName" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="Inputname"
                                placeholder="Name"
                              />
                            </div>

                            <label htmlFor="inputSurname" className="form-label">
                              Surname
                            </label>
                            <input
                              type="text"
                              id="inputSurname"
                              className="form-control"
                              placeholder="Surname"
                            />
                            <div id="inputSurname" className="form-text">
                            </div>
                          </div>

                          <div className="card-footer">
                          <button type="button" className="btn btn-primary">Suite</button>
                          </div>
                          

                        </div>
                      </div> 
    </>
  );
};

export default Contact;
