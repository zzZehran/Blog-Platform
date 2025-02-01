import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contextApi";

export default function Home() {
  // const name = "Zehran";
  // const date = "27/12/02";
  const title = "You Must Get a Rival at Least Once in Your Life.";

  const [loading, setLoading] = React.useState(false);
  const { user, setUser } = useUser();
  console.log("Rerendering, the user is: ", user);

  function logout() {
    setLoading(true);
    fetch("http://localhost:5000/logout", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          setUser(null);
          document.cookie =
            "connect.sid=; Max-Age=0; path=/; domain=localhost; SameSite=None; Secure";
        }
      })
      .catch((error) => {
        console.error("Logout failed", error);
        setLoading(false);
      });
  }
  console.log("Fn log user: ", user);

  return (
    <div className="home container mt-5">
      {loading && (
        <div className="alert alert-success w-50" role="alert">
          Logging Out...
        </div>
      )}

      <div className="row d-flex justify-content-between">
        <div className="col-8 p-0">
          <div className="card shadow">
            <div className="img-container">
              <img
                src="https://images.unsplash.com/photo-1605205805854-e233096145b8?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="..."
              />
            </div>

            <div className="card-body px-4 py-4">
              <h5 className="card-title fw-bold">{title}</h5>
              <p className="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <a href="#" className="ms-1 text-decoration-none">
                  Read more...
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-column">
          <h4 className="text-center fw-bold mb-4">
            Start Your Blogging Journey Today!
          </h4>
          {user && (
            <>
              <a href="" className="mx-auto">
                <button className="btn btn-primary fw-semibold shadow">
                  Create Blog
                </button>
              </a>
              <a onClick={logout} className="mx-auto mt-3">
                <button className="btn btn-primary fw-semibold shadow">
                  Log Out
                </button>
              </a>
            </>
          )}
          {!user && (
            <Link to="/login" className="mx-auto">
              <button className="btn btn-primary fw-semibold shadow">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
