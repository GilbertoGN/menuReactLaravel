import React from 'react';
import styles from './Home.module.css';
import SideBar from '@/components/SideBar';
import Img1 from '../../../assets/img/SCO__Administracion.png';
import Img2 from '../../../assets/img/SCO__Comunicacion.png';
import Img3 from '../../../assets/img/SCO__Operaciones.png';
import Img4 from '../../../assets/img/SCO__Produccion.png';

interface HomeProps {
  title: string;
}
const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <div className="contenedor-inicial">
        <div className="container text-center">
          <div className={`row align-items-start ${styles.menuContainer}`}>
            <div className={`col ${styles.imgContainer}`}>
              <img src={Img1} alt="Logo" className={styles.image}></img>
              <p className={`fs-3 fw-semibold text-light ${styles.imgText}`}>Administración</p>
            </div>
            <div className={`col ${styles.imgContainer}`}>
              <img src={Img2} alt="Logo" className={styles.image}></img>
              <p className={`fs-3 fw-semibold text-light ${styles.imgText}`}>Administración</p>
            </div>
            <div className={`col ${styles.imgContainer}`}>
              <img src={Img3} alt="Logo" className={styles.image}></img>
              <p className={`fs-3 fw-semibold text-light ${styles.imgText}`}>Administración</p>
            </div>
            <div className={`col ${styles.imgContainer}`}>
              <img src={Img4} alt="Logo" className={styles.image}></img>
              <p className={`fs-3 fw-semibold text-light ${styles.imgText}`}>Administración</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
