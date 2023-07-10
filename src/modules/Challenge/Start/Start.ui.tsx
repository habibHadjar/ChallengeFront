import React from "react";
import { TStartUi } from "./Start.types";

const Start: TStartUi = ({}) => {
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

        {/* Student start challenge*/}
                  <div
                    className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
                    style={{ maxHeight: "calc(100% - 5rem)" }}
                  >
                    <div className="card w-75 w-lg-100 m-3 ">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <button className="btn btn-link border">&lt;</button>
                          </div>
                          <div className="col text-center">
                            <span>Kevin, êtes-vous prêt ?</span>
                          </div>
                          <div className="col-auto ml-auto" style={{ paddingRight: 10 }}>
                            <div className="text-right">
                              <span>Score: 0/20</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body ">
                        <div className="mb-3 col d-flex justify-content-center">
                          <button type="submit" className="btn btn-primary btn-block w-100">
                            Lancer le challenge
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
    </>
  );
};

export default Start;
