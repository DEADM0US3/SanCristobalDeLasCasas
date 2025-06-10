import homeImage from '../../img/Hoteles.webp';
import Carousel2 from "../components/Carousel"
import Texto from '../components/Textos';


const Hoteles = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
                <Texto
                    titulo="Hoteles"
                    descripcion="Los hoteles en San Cristóbal ofrecen opciones coloniales y modernas, perfectas para disfrutar de su encanto y cultura."
                />
            </div>
            <div className="bg-[#1a1a1e] z-10 w-screen h-[40dvh] flex flex-col justify-center items-center">
                <Carousel2 />
            </div>
        </>
    )
}

export default Hoteles;