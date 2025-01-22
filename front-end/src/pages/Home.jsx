import React from "react";

export default function Home() {
  const name = "Zehran";
  const date = "27/12/02";
  const title = "You Must Get a Rival at Least Once in Your Life.";

  const [user, setUser] = React.useState(null);

  return (
    <div className="home container mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-8 p-0">
          <div className="card shadow">
            <div className="img-container">
              <img
                src="https://images.unsplash.com/photo-1605205805854-e233096145b8?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top"
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
            <a href="" className="mx-auto">
              <button className="btn btn-primary fw-semibold shadow">
                Create Blog
              </button>
            </a>
          )}
          {!user && (
            <a href="" className="mx-auto">
              <button className="btn btn-primary fw-semibold shadow">
                Log in
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
