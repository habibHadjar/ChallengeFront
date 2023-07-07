import React from "react";
import { TStudentUi } from "./Student.types";

const Student: TStudentUi = ({}) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ height: "5rem" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
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
        </div>
      </nav>

      {/*Admin card login <div
              className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
              style={{ maxHeight: "calc(100% - 5rem)" }}
            >
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
            </div> */}

      {/* Student card login <div
              className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
              style={{ maxHeight: "calc(100% - 5rem)" }}
            >
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

                </div>

                <div className="card-footer">
                <button type="button" className="btn btn-primary">Connexion</button>
                </div>
                

              </div>
            </div> */}

      {/* Student coordonnées <div
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
            </div> */}

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

      {/* Student card login <div
              className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
              style={{ maxHeight: "calc(100% - 5rem)" }}
            >
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

                </div>

                <div className="card-footer">
                <button type="button" className="btn btn-primary">Connexion</button>
                </div>
                

              </div>
            </div> */}

      {/* Student server
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
          */}

      {/* Student instance
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
          */}

      {/* Student instance
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
                    <span>Score: 100</span>
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
      */}

      {/* Student start challenge
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
      */}

      {/* Student challenge level
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
    */}
    </>
  );
};

export default Student;
