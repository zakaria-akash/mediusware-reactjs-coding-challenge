import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [inputDataActive, setInputDataActive] = useState([]);
  const [inputDataCompleted, setInputDataCompleted] = useState([]);
  const [inputDataOthers, setInputDataOthers] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);

  const handleClickAll = () => {
    setShow("all");

    setDataToShow(inputDataActive.concat(inputDataCompleted, inputDataOthers));
  };

  const handleClickActive = () => {
    setShow("active");

    setDataToShow(inputDataActive);
  };

  const handleClickCompleted = () => {
    setShow("completed");

    setDataToShow(inputDataCompleted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const status = e.target.status.value;

    const userData = {
      id: Date.now().toString(36) + Math.random().toString(16).slice(2),
      name: name,
      status: status,
    };

    if (userData.status === "active") {
      setInputDataActive((prevData) => [...prevData, userData]);
    } else if (userData.status === "completed") {
      setInputDataCompleted((prevData) => [...prevData, userData]);
    } else {
      setInputDataOthers((prevData) => [...prevData, userData]);
    }

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={handleClickAll}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={handleClickActive}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={handleClickCompleted}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {dataToShow.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="col">{data.name}</th>
                    <th scope="col">{data.status}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
