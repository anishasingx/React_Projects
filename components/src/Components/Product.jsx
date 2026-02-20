import React from 'react'

const Product = (props) => {
  return (
    <div className="col-8 col-sm-6 col-md-4" >
    <div className="card shadow-sm">
    <img src={props.item.image} 
    className="card-img-top p-3" 
    alt="Product Image"
    style={{height:`150px`, objectFit:`contain`}}/>

    <div className="card-body d-flex flex-column ">
      <h5 className="card-title two-line-text" style={{height:`50px`}}>
        {props.item.title} 
      </h5>

      <p className="card-text text-muted small three-line-text ">
        {props.item.description} 
      </p>

      <div className="mb-2">
        <span className="badge bg-primary">{props.item.category} </span>
      </div>

      <div className="mb-2">
        ⭐{props.item.rating.rate}  | {props.item.rating.count}  reviews
      </div>

      <h4 className="text-success mb-3">${props.item.price} </h4>

      <button className="btn btn-dark mt-auto w-100">
        Add to Cart
      </button>
    </div>
   </div>
   </div>
  )

}

export default Product
