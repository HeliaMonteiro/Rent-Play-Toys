import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './style.css'

const ToyDetail = () => {
  const state = useLocation()
  const navigate = useNavigate()

  const token = localStorage.getItem('bearer')
  const userId = localStorage.getItem('userId')

  const {id, brand, category, description, image, name, status} = state.state

  const rentToy = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: {
        user: {
          id: userId
        },
        toy: {
          id
        }
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const result = await fetch(`${process.env.REACT_APP_API_HOST}/api/rents`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

    if (result.data) {

      raw = JSON.stringify({
        data: {
          status: false
        }
      });

      requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch(`${process.env.REACT_APP_API_HOST}/api/toys/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      navigate('/')
    }
  }
  
  return (
    <div><Header />
      <div className="container">
      
      <div className="toy-detail-container">
        <div>
        { !token && (
          <h1>Did you like it? Please login or register to rent this toy.</h1>
        )}
        { !status && (<h2 className="unavailable">Product is currently unavailable.</h2>)}
        
          <img src={image} alt="" />
          <div>
            <p>{brand}</p>
            <p>{name}</p>
          </div>
          <p>{category}</p>
        </div>
        
        { status && token && (
          <div className="rent-toy-container">
            <h2>How many days of rent?</h2>
            <input type="radio" name="rent-option" value="7" id="7" />
            <label htmlFor="">7 days</label>
            <input type="radio" name="rent-option" value="14" id="14" />
            <label htmlFor="">14 days</label>
            <input type="radio" name="rent-option" value="21" id="21" />
            <label htmlFor="">21 days</label>
            <button onClick={rentToy}>Rent Toy</button>
          </div>
        )}


      </div>
      <div className="description">
        <h2>Description:</h2>
        <div dangerouslySetInnerHTML={{__html: description}}/>
      </div>
     
      </div>
      <Footer />
    </div>
  );
}

export default ToyDetail;