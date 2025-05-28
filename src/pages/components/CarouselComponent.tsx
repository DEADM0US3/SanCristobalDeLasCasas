
import { Carousel } from 'primereact/carousel';
import { GalleryImg, Gallery } from '../../data/GalleryImg';
import { useEffect, useState } from 'react';

export const GalleryService = {

    getImagesData() {
        return GalleryImg;
    },

    getImages() {
        return Promise.resolve(this.getImagesData());
    },

}


const carouselTemplate = (object: Gallery) => {
  return (
    <div
      style={{ backgroundImage: `url(${object.src})` }}
      className="border-1 h-52 bg-cover bg-center surface-border border-round m-2 text-center py-5 px-3 flex items-end justify-center"
    >
    </div>
  );
};



const CarouselComponent = () => {

    const [products, setProducts] = useState<Gallery[]>([]);

    useEffect(() => {
        GalleryService.getImages().then((data) => setProducts(data.slice(0, 32)));
    }, []);


    //bg-[#1a1a1e]

    return (
        <>
            <div className=" z- w-[100%] mb-10 h-[40dvh] flex flex-col justify-center items-center p-5">
                <Carousel className="custom-carousel" value={products} numVisible={4} numScroll={1} showIndicators={true} itemTemplate={carouselTemplate} />
            </div>
        </>
    )
}

export default CarouselComponent;