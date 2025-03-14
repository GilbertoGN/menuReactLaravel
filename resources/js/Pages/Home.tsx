

import React from 'react';
import SideBar from '@/components/SideBar';

interface HomeProps {
    title: string;
}
const Home: React.FC<HomeProps> = ({ title }) => {
    return (
        <>
            {/* <Header /> */}
            <SideBar />
            <div className='contenedor-inicial'>
            <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
      <img src="https://i.imgur.com/8Q6QX6B.png" alt="Logo"></img>
    </div>
    <div className="col">
      <img src="https://i.imgur.com/8Q6QX6B.png" alt="Logo"></img>
    </div>
    <div className="col">
      <img src="https://i.imgur.com/8Q6QX6B.png" alt="Logo"></img>
    </div>
    <div className="col">
      <img src="https://i.imgur.com/8Q6QX6B.png" alt="Logo"></img>
    </div>
  </div>
</div>
            </div>
        </>
    );
};

export default Home;
