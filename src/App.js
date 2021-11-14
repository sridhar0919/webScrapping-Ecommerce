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
      <Productcards data={productDetails[0]} />
      <Productcards />
      <Productcards />
      <Productcards />
      <Productcards />
    </div>
  );
}

export default App;
