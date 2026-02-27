import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row">

     
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">MySite</h5>
        <p className="small">
          Simple eCommerce website for shopping quality products. 
          Fast delivery and secure payments.
        </p>
      </div>

      
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-light">Home</a></li>
          <li><a href="#" className="text-decoration-none text-light">Shop</a></li>
          <li><a href="#" className="text-decoration-none text-light">About</a></li>
          <li><a href="#" className="text-decoration-none text-light">Contact</a></li>
        </ul>
      </div>

     
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">Account</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-light">Login</a></li>
          <li><a href="#" className="text-decoration-none text-light">Register</a></li>
        </ul>
      </div>

    </div>

 
    <div className="text-center border-top pt-3 mt-3 small">
      © 2026 MySite. All rights reserved.
    </div>
  </div>
</footer>
  )
}

export default Footer
