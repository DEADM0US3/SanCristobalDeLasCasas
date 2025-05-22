import homeImage from '../../img/Atractivos.webp';

const AtractivosActividades = () => {
    return(
        <>
            <div
                style={{backgroundImage: `url(${homeImage})`}}
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            >
            </div>
        </>
    )
}

export default AtractivosActividades;