import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="p-5 mb-5 bg-light rounded-3 text-center">
        <h1 className="display-5 fw-bold">Welcome to MySite</h1>
        <p className="lead">Shop the latest products at the best prices.</p>
        <a href="#" className="btn btn-primary btn-lg">
          Start Shopping
        </a>
      </div>

      <h2 className="mb-4 text-center">Featured Products</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm" >
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              style={{height:'200px'}}
              alt="product"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Product One</h5>
              <p className="card-text text-muted">₹999</p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="card-img-top"
              style={{height:'200px'}}
              alt="product"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Product Two</h5>
              <p className="card-text text-muted">₹1299</p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              style={{height:'200px'}}
              className="card-img-top"
              alt="product"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Product Three</h5>
              <p className="card-text text-muted">₹799</p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3>Why Shop With Us?</h3>
        <p className="text-muted">
          High quality products, fast delivery, and great support.
        </p>
      </div>
    </div>
  );
};

export default Home;
