import React from 'react'

const Shop = () => {
  return (
   <div classNameName='row justify-content-center m-6px'>
      <div className="col-md-4 col-lg-3">
        <div className="card shadow-sm">
          <div className="p-3 text-center">
            <img
            src='https://picsum.photos/seed/picsum/200/300'
            style={{height:"180px", objectFit:"contain"}}
              className="img-fluid"
              alt="product" />
          </div>

          <div className="card-body d-flex flex-column">
            <h6 className="card-title"></h6>
            <p className="text-muted small mb-2" ></p>
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <span className="fw-bold" ></span>
              <button className="btn btn-sm btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
