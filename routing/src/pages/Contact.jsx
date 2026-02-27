import React from 'react'

const Contact = () => {
  return (
   <div className="container my-5">

  {/* <!-- Banner --> */}
  <div className="mb-5">
    <img src="https://picsum.photos/1200/350" className="img-fluid rounded shadow-sm w-100" alt="contact banner" />
  </div>

  {/* <!-- Title --> */}
  <div className="text-center mb-5">
    <h1 className="fw-bold">Contact Us</h1>
    <p className="text-muted">We’d love to hear from you. Reach out anytime.</p>
  </div>

  <div className="row g-5">

    {/* <!-- Contact Form --> */}
    <div className="col-lg-7">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h4 className="mb-3">Send Message</h4>

          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your email" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea rows="5" className="form-control" placeholder="Write your message"></textarea>
            </div>

            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    {/* <!-- Contact Info --> */}
    <div className="col-lg-5">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-body p-4 text-center">

          <img src="https://randomuser.me/api/portraits/men/32.jpg"
               className="rounded-circle mb-3" width="120" height="120" alt="contact person" />

          <h5 className="fw-bold">Support Manager</h5>
          <p className="text-muted mb-3">Customer Support</p>

          <p className="mb-1"><strong>Email:</strong> support@mysite.com</p>
          <p className="mb-1"><strong>Phone:</strong> +91 98765 43210</p>
          <p className="text-muted small">We usually reply within 24 hours</p>

        </div>
      </div>
    </div>

  </div>

</div>
  )
}

export default Contact
