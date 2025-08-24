import React from 'react';
import './home.scss';
import matilda from '../../assets/images/matilda.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1>Maria F. Guzman</h1>
                <p>Bienvenidos a la pagina de la ferchis, experta en lloracion</p>
                <button 
                    className='btn-1'
                    onClick={() => alert('Button Clicked!')}
                >
                    Learn More
                </button>
            </div>
            <div className='home-image'>
                <img src={matilda} alt='Placeholder' />
            </div>
        </div>
    );
};

export default Home;