import React from "react";
import { TAdminStudentListUi } from "./AdminStudentList.types";
import { Link } from "react-router-dom";

const AdminStudentList: TAdminStudentListUi = ({}) => {
  return (
    <>

<nav className="navbar bg-body-tertiary" style={{ height: "5rem" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Challenge
          </a>
          <ul className="navbar-nav d-flex flex-row ml-auto ">
            <li className="nav-item mx-3">
              <Link to={`/Admin/ChallengeList`} className="nav-link active" aria-current="page">Liste de challenges</Link>
            </li>
            
            <li className="nav-item">
              <Link to={`/Admin`} className="nav-link active" aria-current="page">Déconnexion</Link>
            </li>
          </ul>
        </div>
      </nav>
    

      {/* Admin challenge list*/}
      <div
        className="container bg-danger h-100 overflow-y-auto p-0 d-flex justify-content-center align-items-start"
        style={{ maxHeight: "calc(100% - 5rem)" }}
      >
        <div className="card w-75 w-lg-100 m-3 ">
          <div className="card-header">Liste d'étudiants</div>
          <div className="card-body">
            <div className="mb-3">
              <div className="accordion" id="studentAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="student1Header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#student1Challenges"
                      aria-expanded="true"
                      aria-controls="student1Challenges"
                    >
                      Étudiant 1
                    </button>
                  </h2>
                  <div
                    id="student1Challenges"
                    className="accordion-collapse collapse show"
                    aria-labelledby="student1Header"
                    data-bs-parent="#studentAccordion"
                  >
                    <div className="accordion-body">
                      <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <h6>Nom du Challenge 1</h6>
                            <p>Score: 2/20</p>
                          </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <h6>Nom du Challenge 2</h6>
                            <p>Score: 8/20</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminStudentList;
