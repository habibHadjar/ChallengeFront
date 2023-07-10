import React from "react";
import { TServerUi } from "./Server.types";
import { Link } from "react-router-dom";

const Server: TServerUi = ({}) => {
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

      {/* Student server */}
                    <div
                      className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
                      style={{ maxHeight: "calc(100% - 5rem)" }}
                    >
                      <div className="card w-75 w-lg-100 m-3 ">
                        <div className="card-header">Configuration du serveur</div>
                        <div className="card-body">
                          <div className="mb-3">
                            <form>
                              <div className="form-group">
                                <label htmlFor="sshKeyInput" className="form-label">
                                  Clé publique SSH
                                </label>
                                <textarea
                                  className="form-control"
                                  id="sshKeyInput"
                                  placeholder="Entrez votre clé publique SSH"
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <label htmlFor="usernameInput" className="form-label">
                                  Nom d'utilisateur
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="usernameInput"
                                  placeholder="Entrez votre nom d'utilisateur"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="ipAddressInput" className="form-label">
                                  Adresse IP
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ipAddressInput"
                                  placeholder="Entrez votre adresse IP"
                                />
                              </div>
                            </form>
                          </div>
                          <div id="inputSurname" className="form-text"></div>
                        </div>

                        <div
                          className="card-footer"
                          style={{ display: "flex", justifyContent: "space-between" }}
                        >
                          <Link to={`/Student/ChallengeList`} className="btn btn-secondary mr-auto">Retour</Link>

                        
                          <button type="button" className="btn btn-primary mx-auto">
                            Tester la connexion
                          </button>

                          <Link to={`/Student/InstanceDetails`} className="btn btn-primary ml-auto">Suite</Link>

                        </div>
                      </div>
                    </div>
                   

    </>
  );
};

export default Server;
