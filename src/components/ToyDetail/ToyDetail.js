import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './style.css'

const ToyDetail = () => {
  const state = useLocation()
  
  const {age, brand, category, description, image, name, price} = state.state


  return (
    <div>
      <Header />
      <div className="toy-detail-container">
        <div>
          <img src={process.env.REACT_APP_API_HOST + image.url} alt="" />
          <div>
            <p>{brand}</p>
            <p>{name}</p>
          </div>
          <p>{category}</p>
        </div>
        <div className="rent-toy-container">
          <h2>How many days of rent?</h2>
          <input type="radio" name="" id="" />
          <label htmlFor="">7 days</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">14 days</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">21 days</label>
          <button>Rent toy</button>
        </div>
      </div>
      <div className="description">
        <h2>Description:</h2>
        <p>{description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default ToyDetail;