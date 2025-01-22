import React, { useState } from "react";

export default function Login() {
  const [count, setCount] = React.useState();
  React.useEffect(() => {
    async function fetchData() {
      console.log("Fetching...");
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setCount(data.count);
    }
    fetchData();
  }, []);
  return (
    <div className="login-form container mt-5">
      <h1>{count}</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <h3 className="mb-3 fw-bold">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="secret@123"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
