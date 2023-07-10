import React from "react";
import { TInstanceUi } from "./Instance.types";

const Instance: TInstanceUi = ({}) => {
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

      {/* Student instance*/}
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
                  <label htmlFor="ipInput">IP de l'instance</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ipInput"
                    placeholder="Entrez l'IP de l'instance"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="portInput">Port</label>
                  <input
                    type="text"
                    className="form-control"
                    id="portInput"
                    placeholder="Entrez le port"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="usernameInput">Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    placeholder="Entrez le nom d'utilisateur"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Entrez le mot de passe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="databaseInput">
                    Nom de la base de données
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="databaseInput"
                    placeholder="Entrez le nom de la base de données"
                  />
                </div>
              </form>
            </div>
          </div>

          <div
            className="card-footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button type="button" className="btn btn-secondary mr-auto">
              &lt; Retour
            </button>
            <button type="button" className="btn btn-primary mx-auto">
              Tester la connexion
            </button>
            <button type="submit" className="btn btn-primary ml-auto">
              Suite &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instance;
