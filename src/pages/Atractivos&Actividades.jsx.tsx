import homeImage from '../../img/Atractivos.webp';
import Carousel2 from "../components/Carousel"

const AtractivosActividades = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
            </div>
            <div className="bg-[#1a1a1e] z-10 w-screen h-[40dvh] flex flex-col justify-center items-center">
                <Carousel2 />
            </div>
        </>
    )
}

export default AtractivosActividades;