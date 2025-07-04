import homeImage from '../../img/homeImage.webp';
import logo from '../../img/logo.png';

const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${homeImage})` }}
            className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
        >
            <Texto
                titulo="San Cristóbal de las Casas"
                descripcion="San Cristóbal de las Casas es un encantador pueblo colonial en Chiapas, México, conocido por su rica herencia cultural, arquitectura colonial y vibrante vida indígena."
                ></Texto>
        </div>
    );
};

interface TextoProps {
    titulo: string;
    descripcion: string;
}

const Texto = ({ titulo, descripcion }: TextoProps) => {
    return (
        <div className="absolute">
            {/* Logo */}
            <div className="mb-4">
                <img src={logo} alt="Pueblos Mágicos" className="w-40"/>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm mb-2">
                <span className="text-gray-300">Inicio / </span>
                <span className="text-purple-400">Chiapas</span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">{titulo}</h1>

            {/* Descripción */}
            <p className="text-lg text-gray-200 mb-6 w-2/3">{descripcion}</p>

            {/* Clima */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🌧️</span>
                    <div>
                        <p className="text-sm text-gray-300">Clima Actual</p>
                        <p className="text-white">Lluvia moderada</p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-300">Temperatura</p>
                    <p className="text-2xl text-white font-bold">14°</p>
                </div>

                <div>
                    <p className="text-sm text-gray-300">Humedad</p>
                    <p className="text-2xl text-white font-bold">97%</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
