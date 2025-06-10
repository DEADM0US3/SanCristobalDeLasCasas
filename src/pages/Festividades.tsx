import homeImage from '../../img/Festividades.webp';
import Carousel2 from "../components/Carousel"
import Texto from '../components/Textos';

const Festividades = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
                <Texto 
                    titulo="Festividades"
                    descripcion="Las festividades en San Cristóbal combinan tradiciones indígenas y españolas, con desfiles, danzas y rituales llenos de color y cultura.">

                    </Texto>
            </div>
            <div className="bg-[#1a1a1e] z-10 w-screen h-[40dvh] flex flex-col justify-center items-center">
                <Carousel2 />
            </div>
        </>
    )
}

export default Festividades;