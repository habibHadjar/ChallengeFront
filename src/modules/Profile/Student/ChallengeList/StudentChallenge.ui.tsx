import React from "react";
import { TStudentChallengeUi } from "./StudentChallenge.types";

const StudentChallenge: TStudentChallengeUi = ({}) => {
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

      {/* Student challenge list
                      <div
                        className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
                        style={{ maxHeight: "calc(100% - 5rem)" }}
                      >
                        <div className="card w-75 w-lg-100 m-3 ">
                          <div className="card-header">Liste des challenges</div>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="list-group">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                      <h5>Nom du Challenge 1</h5>
                                      <p>Score: 2/20</p>
                                    </div>
                                    <button className="btn btn-successr">Continuer</button>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                      <h5>Nom du Challenge 2</h5>
                                      <p>Score: 8/20</p>
                                    </div>
                                    <button className="btn btn-success">Continuer</button>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                      <h5>Nom du Challenge 3</h5>
                                      <p>Score: 10/20</p>
                                    </div>
                                    <button className="btn btn-success">Continuer</button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          

                          <div className="card-footer"></div>
                        </div>
                      </div>

                    */}
    </>
  );
};

export default StudentChallenge;
