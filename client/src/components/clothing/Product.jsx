import React from 'react'

function Product(props) {
  console.log("Props are ", props);
  let prodObj = props.prodObj;
  
  function knowMore(prodObj){
    
  }
  return (
    <div class="card shadow-sm border-0 overflow-hidden rounded-lg h-100 bg-white">
  <img
    src={prodObj.image || 'https://via.placeholder.com/300x200?text=Product+Image'}
    class="card-img-top img-fluid cover-image"
    alt={prodObj.name || 'Product'}
  />
  <div class="card-body p-4 d-flex flex-column justify-content-between">
    <div class="d-flex justify-content-between mb-3">
      <h3 class="card-title text-primary mb-0">{prodObj.title}</h3>
    </div>
    <p class="card-text mb-2 fs-5">{prodObj.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p class="card-text text-danger fs-5 fw-bold mb-0">${prodObj.price}</p>
      <button
        class="btn btn-outline-primary px-4 py-2 fs-5"
        onClick={() => knowMore(prodObj)}
      >
        Know More
      </button>
    </div>
  </div>
</div>
  )
}

export default Product