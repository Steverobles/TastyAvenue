import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/RecipePage.css';

function RecipePage() {
  const { type } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/${type}/`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [type]); // `type` is the only dependency

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error Loading recipe</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            {recipe && (
              <>
                <img src={`http://localhost:8000${recipe.image}`} className="card-img-top" alt={recipe.name} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;