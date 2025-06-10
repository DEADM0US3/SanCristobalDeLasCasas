import homeImage from '../../img/Restaurantes.webp';
import Carousel2 from "../components/Carousel"
import Texto from '../components/Textos';

const Restuarantes = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
                <Texto
                    titulo="Restaurantes"
                    descripcion="Los restaurantes en San Cristóbal combinan cocina chiapaneca con sabores internacionales en ambientes acogedores."
                />
            </div>
            <div className="bg-[#1a1a1e] z-10 w-screen h-[40dvh] flex flex-col justify-center items-center">
                <Carousel2 />
            </div>
        </>
    )
}

export default Restuarantes;