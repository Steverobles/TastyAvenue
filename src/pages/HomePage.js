import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const [breakfast, setBreakfast] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [dinner, setDinner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const responseBreakfast = await axios.get(`http://localhost:8000/api/breakfast/1/`);
      const responseLunch = await axios.get(`http://localhost:8000/api/lunch/2/`);      
      const responseDinner = await axios.get(`http://localhost:8000/api/dinner/3/`); 

      setBreakfast(responseBreakfast.data);
      setLunch(responseLunch.data);
      setDinner(responseDinner.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error Loading data</div>;
  }

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            {breakfast && (
              <>
                <img
                  src={`http://localhost:8000${breakfast.image}`}
                  className="card-img-top"
                  alt="Breakfast"
                />
                <div className="card-body">
                  <h5 className="card-title">{breakfast.name}</h5>
                  <p className="card-text">{breakfast.description}</p>
                  <hr />
                  <h6>Ingredients:</h6>
                  <p className="card-text">{breakfast.ingredients}</p>
                  <hr />
                  <h6>Instructions:</h6>
                  <p className="card-text">{breakfast.instructions}</p>
                  <Link to={`/recipe/${breakfast.id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            {lunch && (
              <>
                <img
                  src={`http://localhost:8000${lunch.image}`}
                  className="card-img-top"
                  alt="Lunch"
                />
                <div className="card-body">
                  <h5 className="card-title">{lunch.name}</h5>
                  <p className="card-text">{lunch.description}</p>
                  <hr />
                  <h6>Ingredients:</h6>
                  <p className="card-text">{lunch.ingredients}</p>
                  <hr />
                  <h6>Instructions:</h6>
                  <p className="card-text">{lunch.instructions}</p>
                  <Link to={`/recipe/${lunch.id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            {dinner && (
              <>
                <img
                  src={`http://localhost:8000${dinner.image}`}
                  className="card-img-top"
                  alt="Dinner"
                />
                <div className="card-body">
                  <h5 className="card-title">{dinner.name}</h5>
                  <p className="card-text">{dinner.description}</p>
                  <hr />
                  <h6>Ingredients:</h6>
                  <p className="card-text">{dinner.ingredients}</p>
                  <hr />
                  <h6>Instructions:</h6>
                  <p className="card-text">{dinner.instructions}</p>
                  <Link to={`/recipe/${dinner.id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;