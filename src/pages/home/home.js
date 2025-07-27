import React from 'react';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Maria F. Guzman</h1>
            <p>Bienvenidos a la pagina de la ferchis, experta en lloracion</p>
            <button 
                className='btn-1'
                onClick={() => alert('Button Clicked!')}
            >
                Learn More
            </button>
        </div>
    );
};

export default Home;