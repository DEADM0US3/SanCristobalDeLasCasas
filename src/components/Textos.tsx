import React from "react";
import logo from '../../img/logo.png';
// const logo = require('../../img/logo.png');

interface Props {
    titulo: string;
    descripcion: string;
}

const Texto: React.FC<Props> = ({ titulo, descripcion }) => {
    return (
        <>
            <div
                className="absolute -top-26 left-40 w-full h-full px-2 sm:px-6 lg:px-14 py-8 flex flex-col justify-center text-white z-10 max-w-3xl">

                 <img src={logo} alt="Pueblos Mágicos" className="w-40" />

                <h1 className="font-[Montserrat, sans-serif] text-5xl font-extrabold tracking-tight mb-2 ">
                    {titulo}
                </h1>

                <p className="text-base lg:text-xl text-white/90 montserrat">
                    {descripcion}
                </p>
            </div>
        </>

    );
};

export default Texto;
