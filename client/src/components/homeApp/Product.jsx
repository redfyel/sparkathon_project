import React from "react";
import "../grocery/Product.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Product(props) {
  
  let prodObj = props.prodObj;

  let navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('homeApp/knowmore');
  };


  return (
    <div className="card shadow-sm border-0 overflow-hidden rounded-lg h-100 bg-white">
      <img
        src={
          prodObj.img ||
          "https://via.placeholder.com/300x200?text=Product+Image"
        }
        className="card-img-top img-fluid cover-image"
        alt={prodObj.name || "Product"}
      />
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="card-title text-primary mb-0">{prodObj.name}</h3>
        </div>
        <p className="card-text mb-2 fs-5">{prodObj.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text text-danger fs-5 fw-bold mb-0">
            ${prodObj.price}
          </p>
          <button
          className="btn btn-outline-primary px-4 py-2 fs-5"
          
        ><a href="/knowmore">Know More</a>
        </button>


          
        </div>
      </div>
    </div>
  );
}

export default Product;
