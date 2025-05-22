import homeImage from '../../img/homeImage.webp';

const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${homeImage})` }}
            className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
        >
        </div>
    );
};

export default Home;
