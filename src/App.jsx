import React, { useEffect, useState } from "react";

function App() {
  const [employee, setEmployee] = useState({});
  const [empList, setEmpList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("EmpData") || "[]");
    setEmpList(oldData);
    if (!sessionStorage.getItem("username")) {
      sessionStorage.setItem("username", "Shubham");
    }
    const user = sessionStorage.getItem("username");
    setUsername(user);
  }, []);


  const handleEvent = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit && employee.id) {
      const updatedData = empList.map((emp) =>
        emp.id === employee.id ? employee : emp
      );
      setEmpList(updatedData);
      localStorage.setItem("EmpData", JSON.stringify(updatedData));
      setIsEdit(false);
    } else {
      const newData = [...empList, { ...employee, id: Date.now() }];
      setEmpList(newData);
      localStorage.setItem("EmpData", JSON.stringify(newData));
    }

    setEmployee({});
  };

  const handleDelete = (idx) => {
    const newData = empList.filter((e) => e.id !== idx);
    setEmpList(newData);
    localStorage.setItem("EmpData", JSON.stringify(newData));
  };

  const handleEdit = (idx) => {
    const data = empList.find((e) => e.id === idx);
    setEmployee(data);
    setIsEdit(true);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              height="40"
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/employee-management-4-485021.png?f=webp&w=512"
              alt="logo"
              className="me-2"
            />
            <h4 className="m-0 text-primary">Employee Management System</h4>
          </div>
          <div className="user-badge">
            <img
              className="rounded-circle me-2"
              width={35}
              height={35}
              src="https://github.com/mdo.png"
              alt="user"
            />
            <span>Hello, {username}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-fluid py-3">
        <div className="row g-4">
          {/* Form Section */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4 text-primary">
                  {isEdit ? "Edit Employee" : "Add New Employee"}
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      value={employee.name || ""}
                      onChange={handleEvent}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="position" className="form-label">
                      Position <span className="text-danger">*</span>
                    </label>
                    <input
                      value={employee.position || ""}
                      onChange={handleEvent}
                      type="text"
                      className="form-control"
                      id="position"
                      name="position"
                      placeholder="Senior Software Engineer"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="salary" className="form-label">
                      Salary (₹) <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input
                        value={employee.salary || ""}
                        onChange={handleEvent}
                        type="number"
                        className="form-control"
                        id="salary"
                        name="salary"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      value={employee.email || ""}
                      onChange={handleEvent}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-100 btn btn-${isEdit ? "warning" : "primary"} btn-lg`}
                  >
                    {isEdit ? "Update Employee" : "Add Employee"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="col-12 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4 text-primary">Employee Directory</h4>
                <div className="table-responsive" style={{ maxHeight: "500px" }}>
                  <table className="table table-hover align-middle">
                    <thead className="table-light sticky-top">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Email</th>
                        <th scope="col" className="text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {empList.length > 0 ? (
                        empList.map((e, idx) => (
                          <tr key={e.id}>
                            <th scope="row">{idx + 1}</th>
                            <td>{e.name}</td>
                            <td>
                              <span className="badge bg-info text-dark">{e.position}</span>
                            </td>
                            <td>₹{e.salary.toLocaleString()}</td>
                            <td>
                              <a href={`mailto:${e.email}`}>{e.email}</a>
                            </td>
                            <td className="text-center">
                              <button
                                onClick={() => handleEdit(e.id)}
                                className="btn btn-sm btn-outline-warning me-2"
                                title="Edit"
                              >
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button
                                onClick={() => handleDelete(e.id)}
                                className="btn btn-sm btn-outline-danger"
                                title="Delete"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-4">
                            <div className="text-muted">
                              <i className="bi bi-people display-6"></i>
                              <p className="mt-2">No employees found</p>
                              <small>Add your first employee using the form</small>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-4 py-3 border-top text-center text-muted">
        <small>© {new Date().getFullYear()} Employee Management System</small>
      </footer>

      {/* Add Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      />

      {/* Custom CSS */}
      <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .app-header {
          background-color: #f8f9fa;
          padding: 1rem 0;
          border-bottom: 1px solid #dee2e6;
        }
        .user-badge {
          display: flex;
          align-items: center;
          background-color: #e7f1ff;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          color: #0d6efd;
          font-weight: 500;
        }
        .table-responsive::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .table-responsive::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
        }
        .table-responsive::-webkit-scrollbar-track {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
}

export default App;
