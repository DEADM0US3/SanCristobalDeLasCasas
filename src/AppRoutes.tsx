import type {RouteObject} from "react-router";
import Home from "./pages/Home.jsx.tsx";
import BaseComponent from "./BaseComponent.tsx";
import AtractivosActividades from "./pages/Atractivos&Actividades.jsx.tsx";
import Festividades from "./pages/Festividades.tsx";
import Hoteles from "./pages/Hoteles.tsx";
import Tours from "./pages/Tours.tsx";
import Restuarantes from "./pages/Restaurante.tsx";

const appRoute: RouteObject[] = [
    {
        element: <BaseComponent></BaseComponent>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/Atractivos&Actividades",
                element: <AtractivosActividades></AtractivosActividades>
            },
            {
                path:"/Festividades",
                element: <Festividades></Festividades>
            },
            {
                path:"/Hoteles",
                element: <Hoteles></Hoteles>
            },
            {
                path:"/Restaurantes",
                element: <Restuarantes></Restuarantes>
            },
            {
                path:"/Tours",
                element: <Tours></Tours>
            },

        ]
    }
]

export default appRoute