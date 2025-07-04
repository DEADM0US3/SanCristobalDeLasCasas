import tour from '../img/tours.webp';
import restaurante from '../img/restaurante.webp';
import actividades from '../img/actividades.webp';
import atractivos from '../img/atractivos.webp';
import hoteles from '../img/hoteles.webp';
import { NavLink, Outlet, useLocation } from "react-router";
import { useState } from "react";


const BaseComponent = () => {

    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }

    const location = useLocation();

    return (
        <>
            <div
                className="w-screen h-[100dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">

                <div style={{ visibility: open && location.pathname == "/" ? "visible" : "hidden" }} className=" bg-gradient-to-r from-[#000000dd] via-[#00000088] to-[#00000000] absolute left-0 top-0 h-full w-[80%]" />

                <div
                    className=" bg-gradient-to-r from-[#000000dd] via-[#00000088] to-[#00000000] absolute left-0 top-0 h-full w-[80%]">

                    <div className="z-30 relative flex items-center w-full h-full">

                        <div onClick={onClick} className={"h-full w-12 z-30"}>
                        </div>

                        <div onClick={onClick} style={{ visibility: !open ? "visible" : "hidden" }}
                            className=" h-24 w-8 border-2 rounded-full border-white flex flex-col justify-center gap-1 items-center">
                            <div
                                className="cursor-pointer h-3 w-3 rounded-full bg-white flex justify-center items-center">
                            </div>
                            <div className="h-3 w-3 rounded-full bg-white flex justify-center items-center">
                            </div>
                            <div className="h-3 w-3 rounded-full bg-white flex justify-center items-center">
                            </div>
                        </div>

                        <div onClick={onClick} style={{ visibility: open ? "visible" : "hidden" }}
                            className=" backdrop-blur-xs h-fit w-fit gap-10  border-2 p-10 rounded-3xl border-white flex flex-col justify-center gap-1 items-center text-white flex text-2xl items-start">
                            <NavLink to={"/#/Atractivos&Actividades"}
                                className=" cursor-pointer hover:ring-2 ring-white rounded-lg px-5 py-3 flex items-center justify-start gap-4 w-full">
                                <div
                                    style={{ backgroundImage: `url(${atractivos})` }}
                                    className=" h-12 w-12 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                                />
                                <p>
                                    Atractivos y Actividades
                                </p>
                            </NavLink>
                            <NavLink to={"/#/Festividades"}
                                className=" cursor-pointer hover:ring-2 ring-white rounded-lg px-5 py-3 flex items-center justify-start gap-4 w-full">
                                <div
                                    style={{ backgroundImage: `url(${actividades})` }}
                                    className=" h-12 w-12 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                                />
                                <p>
                                    Festividades
                                </p>
                            </NavLink>

                            <NavLink to={"/#/Hoteles"}
                                className=" cursor-pointer hover:ring-2 ring-white rounded-lg px-5 py-3 flex items-center justify-start gap-4 w-full">
                                <div
                                    style={{ backgroundImage: `url(${hoteles})` }}
                                    className=" h-12 w-12 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                                />
                                <p>
                                    Hoteles
                                </p>
                            </NavLink>

                            <NavLink to={"/#/Restaurantes"}
                                className=" cursor-pointer hover:ring-2 ring-white rounded-lg px-5 py-3 flex items-center justify-start gap-4 w-full">
                                <div
                                    style={{ backgroundImage: `url(${restaurante})` }}
                                    className=" h-12 w-12 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                                />
                                <p>
                                    Restaurantes
                                </p>
                            </NavLink>

                            <a href={"/Tours"}
                                className=" cursor-pointer hover:ring-2 ring-white rounded-lg px-5 py-3 flex items-center justify-start gap-4 w-full">
                                <div
                                    style={{ backgroundImage: `url(${tour})` }}
                                    className=" h-12 w-12 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                                />
                                <p>
                                    Tours
                                </p>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="absolute left-0 top-0 h-full w-60"></div>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default BaseComponent;

