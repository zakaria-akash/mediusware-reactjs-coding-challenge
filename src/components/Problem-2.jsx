import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalA from "./ModalA";
import ModalB from "./ModalB";

const Problem2 = () => {
  return (
    <Fragment>
      <div
        className="modal fade"
        id="mod1"
        tabIndex="-1"
        aria-labelledby="mod1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <ModalA />
        </div>
      </div>
      <div
        className="modal fade"
        id="mod2"
        tabIndex="-1"
        aria-labelledby="mod2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <ModalB />
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/problem-2/all-contacts">
              <button
                data-bs-toggle="modal"
                data-bs-target="#mod1"
                className="btn btn-lg btn-outline-primary"
                type="button"
              >
                All Contacts
              </button>
            </Link>

            <Link to="/problem-2/us-contacts">
              <button
                data-bs-toggle="modal"
                data-bs-target="#mod2"
                className="btn btn-lg btn-outline-warning"
                type="button"
              >
                US Contacts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Problem2;
