          import React from "react";
          import { TAdminUi } from "./Admin.types";

          const Student: TAdminUi = ({}) => {
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

                {/*Admin card login */}
                
                <div className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start" style={{ maxHeight: "calc(100% - 5rem)" }}>
                    <div className="card w-75 w-lg-100 m-3 ">
                        <div className="card-header">Login</div>
                          <div className="card-body">
                            <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">
                              Email address
                              </label>
                              <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="name@example.com"
                              />
                            </div>

                            <label htmlFor="inputPassword5" className="form-label">
                            Password
                            </label>
                            <input
                            type="password"
                            id="inputPassword5"
                            className="form-control"
                            aria-labelledby="passwordHelpBlock"
                            />
                            <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and
                            numbers, and must not contain spaces, special characters, or
                            emoji.
                            </div>
                          </div>

                            <div className="card-footer">
                              <button type="button" className="btn btn-primary">Connexion</button>
                            </div>
                                      

                    </div>
                  </div> 

              </>
            );
          };

          export default Student;
