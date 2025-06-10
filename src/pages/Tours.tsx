import homeImage from '../../img/Tours.webp';
import Carousel2 from "../components/Carousel"
import Texto from '../components/Textos';


const Tours = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
                <Texto
                    titulo="Tours"
                    descripcion="Los tours en San Cristóbal te llevan a descubrir pueblos indígenas, cascadas y paisajes naturales, ofreciendo una inmersión cultural y ecológica única."
                />
            </div>
            <div className="bg-[#1a1a1e] z-10 w-screen h-[40dvh] flex flex-col justify-center items-center">
                <Carousel2 />
            </div>
        </>
    )
}

export default Tours;