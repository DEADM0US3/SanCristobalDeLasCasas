import homeImage from '../../img/Tours.webp';
import CarouselComponent from "./components/CarouselComponent.js";

const Tours = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
            </div>
            
            <CarouselComponent/>
        </>
    )
}

export default Tours;