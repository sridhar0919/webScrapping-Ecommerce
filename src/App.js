import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navibar from './components/Navibar';
import Productcards from './components/Productcards';

function App() {
  const [productDetails, setproductDetails] = useState([]);

  useEffect(() => {
    axios
      .get('https://webscrapping-ecommerceapi.herokuapp.com/')
      .then((res) => setproductDetails(res.data.details));
  }, []);
  console.log(productDetails);
  return (
    <div>
      <Navibar />
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[0]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[1]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[2]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[3]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[4]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[5]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[6]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[7]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[8]} />
        ) : null}
      </div>
      <div>
        {productDetails.length !== 0 ? (
          <Productcards data={productDetails[9]} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
