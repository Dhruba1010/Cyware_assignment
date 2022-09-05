import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <h3>Not Started</h3>
        </div>

        <div className='home__container'>
            <h3>In Development</h3>
        </div>

        <div className='home__container'>
            <h3>Completed</h3>
        </div>

        <div className='home__container'>
            <h3>Add New Task</h3>
        </div>
    </div>
  )
}

export default Home