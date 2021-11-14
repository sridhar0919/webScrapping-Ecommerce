import React from 'react';

export default function Productcards(props) {
  const { _id, title, price, final_price, offer, imgUrl, rating } = props.data;
  // console.log(data);
  // console.log(title);
  return (
    <div>
      <div class="card mb-3 mx-auto mt-5" style={{ 'max-width': '540px' }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={imgUrl} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-text">{title}</h3>
              <h5 class="card-text">{price}</h5>
              <p class="card-text text-muted">
                <del>{final_price}</del>
              </p>
              <p class="card-text text-success">{offer}</p>
              <div className="d-inline p-2 bg-primary text-white border border-success rounded bg-success mt-3">
                <i className="fas fa-star fa-sm"></i>
                {rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
