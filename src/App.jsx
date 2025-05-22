import React from "react";

function App() {
  return (
    <>
      <header className="py-3 mb-3 border-bottom">
        <div className="container d-flex justify-content-between">
          <div id="logo">
            <img
              height={"30px"}
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/employee-management-4-485021.png?f=webp&w=512"
              alt="logo"
            />
          </div>
          <h5>EMP System</h5>
          <span className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
            {" "}
            <img
              className="rounded-circle me-1"
              width={30}
              height={30}
              src="https://github.com/mdo.png"
              alt
            />
            <span className="vr mx-2" />
            Hello, Shubham
          </span>
        </div>
      </header>

      {/* Body */}
      <div className="container-fluid pb-3">
        {" "}
        <div
          className="d-grid gap-3"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          {/* Form */}
          <div className="bg-body-tertiary border rounded-3">
            <form action="" method="post">
              <div className="p-3">
                {" "}
                <h4 className="mb-3">Employee Details</h4>{" "}
                <form className="needs-validation" noValidate>
                  {" "}
                  <div className="row g-3">
                    {" "}
                    <div className="col-sm-6">
                      {" "}
                      <label htmlFor="firstName" className="form-label">
                        First name<span className="text-danger">*</span>
                      </label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="e.g., John Doe"
                        required
                      />{" "}
                      <div className="invalid-feedback">
                        Valid name is required.
                      </div>{" "}
                    </div>{" "}
                    <div className="col-12">
                      {" "}
                      <label htmlFor="username" className="form-label">
                        Position<span className="text-danger">*</span>
                      </label>{" "}
                      <div className="input-group has-validation">
                        {" "}
                        <input
                          className="form-control"
                          type="text"
                          placeholder="e.g., Senior Software Engineer"
                          name="position"
                          value=""
                          onChange=""
                          required
                        />{" "}
                        <div className="invalid-feedback">
                          Your Position is required.
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-12">
                      {" "}
                      <label htmlFor="email" className="form-label">
                        Email<span className="text-danger">*</span>
                      </label>{" "}
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="e.g., john.doe@example.com"
                      />{" "}
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="my-3"></div> <hr className="my-4" />{" "}
                  <button
                    className="w-100 btn btn-primary btn-lg"
                    type="submit"
                  >
                    Add
                  </button>{" "}
                </form>{" "}
              </div>
            </form>
          </div>{" "}
          {/* Table */}
          <div className="bg-body-tertiary border rounded-3"></div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default App;
