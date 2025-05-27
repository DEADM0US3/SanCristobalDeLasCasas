import homeImage from '../../img/Atractivos.webp';
import CarouselComponent from './components/CarouselComponent';

const AtractivosActividades = () => {
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

export default AtractivosActividades;