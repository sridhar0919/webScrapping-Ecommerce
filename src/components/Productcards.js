import React from 'react';

export default function Productcards(props) {
  // const { _id, title, price, final_price, offer, imgUrl, rating } = props.data;
  console.log(data);
  console.log(title);
  return (
    <div>
      <div class="card mb-3" style={{ 'max-width': '540px' }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={imgUrl} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3>Card title:{title}</h3>
              <h5 class="card-text">Price:{price}</h5>
              <h5 class="card-text">Final Price:{final_price}</h5>
              <h5 class="card-text">Offer:{offer}</h5>
              <h5 class="card-text">Rating:{rating}</h5>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
