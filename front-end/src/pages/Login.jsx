import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contextApi";
export default function Login() {
  const navigate = useNavigate();
  // const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const { setUser, user } = useUser();
  function login(formData) {
    setLoading(true);

    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUser(data.user);
        navigate("/");
      });
  }
  React.useEffect(() => {
    async function checkSession() {
      const response = await fetch("http://localhost:5000/session", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (data.user) {
        console.log("Logged in");
        setUser(data.user);
        navigate("/");
      }
    }
    if (!user) {
      checkSession();
    }
  }, [user, setUser]);

  return (
    <div className="login-form container mt-5">
      {/* <h1>{user.email}</h1> */}{" "}
      {loading && (
        <div className="alert alert-success w-50" role="alert">
          Logging Out...
        </div>
      )}
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <h3 className="mb-3 fw-bold">Login</h3>
          <form action={login}>
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
                required
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
                required
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
