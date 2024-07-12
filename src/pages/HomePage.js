import '../styles/HomePage.css';
import Navbar from '../components/Navbar'; 

function HomePage() {
    return ( 
        <div>
            <Navbar/>
            <div className='home'>
                <div className='card'>
                    <h3>Breakfast</h3>
                </div>
                <div className='card'>
                    <h3>Lunch</h3>
                </div>
                <div className='card'>
                    <h3>Dinner</h3>
                </div>
            </div>
        </div>    
    );
};

export default HomePage;