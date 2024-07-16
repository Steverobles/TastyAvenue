import '../styles/HomePage.css';
import '../styles/HomePage.css'

function HomePage() {
    return ( 
<div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="" className="card-img-top" alt="Breakfast" />
            <div className="card-body">
              <h5 className="card-title">Breakfast</h5>
              <p className="card-text">This is a description of the breakfast dish.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="" className="card-img-top" alt="Lunch" />
            <div className="card-body">
              <h5 className="card-title">Lunch</h5>
              <p className="card-text">This is a description of the lunch dish.</p>

            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="" className="card-img-top" alt="Dinner" />
            <div className="card-body">
              <h5 className="card-title">Dinner</h5>
              <p className="card-text">This is a description of the dinner dish.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HomePage;