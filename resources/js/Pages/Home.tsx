import React from 'react';
import SideBar from '@/components/SideBar';
import Img1 from "../../assets/img/SCO__Administracion.png"
import Img2 from "../../assets/img/SCO__Comunicacion.png"
import Img3 from "../../assets/img/SCO__Operaciones.png"
import Img4 from "../../assets/img/SCO__Produccion.png"

interface HomeProps {
    title: string;
}
const Home: React.FC<HomeProps> = ({ title }) => {
    return (
        <>
            {/* <Header /> */}
            <SideBar />
            <div className="contenedor-inicial">
                <div className="container text-center" >
                    <div className="row justify-content-between">
                        <div className="col-3 fade-in">
                            <img src={Img1} alt="Logo"></img>
                            <p className="text-3xl text-center">Comunicación</p>
                        </div>
                        <div className="col-3 fade-in">
                            <img src={Img3} alt="Logo"></img>
                            <p className="text-3xl text-center">Comunicación</p>
                        </div>
                        <div className="col-3 fade-in">
                            <img src={Img2} alt="Logo"></img>
                            <p className="text-3xl text-center">Comunicación</p>
                        </div>
                        <div className="col-3 fade-in">
                            <img src={Img4} alt="Logo"></img>
                            <p className="text-3xl text-center">Comunicación</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
