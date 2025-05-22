import homeImage from '../../img/Tours.webp';
import {Carousel} from "primereact/carousel";

const carouselTemplate = (object) => {
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div className="mb-3">
                <img src={`https://primefaces.org/cdn/primereact/images/object/${object.image}`} alt={object.name} className="w-6 shadow-2 w-full h-full" />
            </div>
        </div>
    );
};


const Tours = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
            </div>
            <div className="bg-[#1a1a1e] z-40 w-screen h-[40dvh] flex flex-col justify-center items-center">
                <Carousel value={[0,0,0,0,0,0,0,0]} numVisible={4} numScroll={1} itemTemplate={carouselTemplate} />
            </div>
        </>
    )
}

export default Tours;