import React from "react";
import { TLevelUi } from "./Level.types";
import { Link } from "react-router-dom";

const Level: TLevelUi = ({}) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary" style={{ height: "5rem" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Challenge
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link to={`/`} className="nav-link active" aria-current="page">Déconnexion</Link>
            </li>
          </ul>
        </div>
      </nav>

       {/* Student challenge level  */}
                <div
                  className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
                  style={{ maxHeight: "calc(100% - 5rem)" }}
                >
                  <div className="card w-75 w-lg-100 m-3 ">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col-auto">

                        <Link to={`/Student/Start`} className="btn btn-link border">&lt;</Link>
  
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
                      <div
                        className="card-body text-right"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <h1>Score: 0/10</h1>
                      </div>
                      <div className="card-body border mt-3">
                        <p>Lancement du challenge (0 point)</p>
                        <div className="card-body bg-warning text-dark mt-3">
                          <p>Error</p>
                        </div>
                        <div className="card-body bg-warning text-dark mt-3">
                          <p>Timed out while waiting for handshake</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            

    </>
  );
};

export default Level;
