import homeImage from '../../img/Festividades.webp';
import CarouselComponent from './components/CarouselComponent';

const Festividades = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${homeImage})` }}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
            </div>
            <CarouselComponent />

        </>
    )
}

export default Festividades;