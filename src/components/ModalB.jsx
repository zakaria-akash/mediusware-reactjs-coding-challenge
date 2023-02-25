import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ModalB = () => {
  const [usContacts, setUsContacts] = useState([]);

  useEffect(() => {
    fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/"
    )
      .then((res) => res.json())
      .then((items) => setUsContacts(items));
  }, []);
  return (
    <Fragment>
      <div className="modal-content">
        <div className="modal-header text-center">
          <h5 className="modal-title w-100" id="staticBackdropLabel">
            US Contacts
          </h5>
          <Link to="/problem-2/">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </Link>
        </div>
        <div className="modal-body">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  ID
                </th>
                <th className="text-center" scope="col">
                  Phone
                </th>
                <th className="text-center" scope="col">
                  Country
                </th>
              </tr>
            </thead>
            <tbody>
              {usContacts.results &&
                usContacts.results.map((data) => {
                  return (
                    <tr key={data.id}>
                      <th className="text-center" scope="col">
                        {data.id}
                      </th>
                      <th className="text-center" scope="col">
                        {data.phone}
                      </th>
                      <th className="text-center" scope="col">
                        {data.country.name}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <Link to="/problem-2/">
            <button
              type="button"
              className="btn btn-lg btn-outline-warning"
              data-bs-dismiss="modal"
            >
              Back
            </button>
          </Link>
          <Link to="/">
            <button
              className="btn btn-lg btn-outline-primary"
              data-bs-dismiss="modal"
              type="button"
            >
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalB;
