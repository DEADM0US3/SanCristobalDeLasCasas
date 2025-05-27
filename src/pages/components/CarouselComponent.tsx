
import {Carousel} from "primereact/carousel";
import { GalleryImg } from '../../data/GalleryImg';

const carouselTemplate = (object) => {
    return (
        <div style={{backgroundImage: `url(${object.src})`}} className={`border-1 h-52 bg-repeat-round surface-border border-round m-2 text-center py-5 px-3`} >
         
        </div>
    );
};


const CarouselComponent = () =>{
    return(
        <>
            <div className="bg-[#1a1a1e] z- w-[100%] mb-10 h-[40dvh] flex flex-col justify-center items-center p-5">
                <Carousel value={GalleryImg} numVisible={4} numScroll={1} itemTemplate={carouselTemplate} />
            </div>
        </>
    )
}

export default CarouselComponent;