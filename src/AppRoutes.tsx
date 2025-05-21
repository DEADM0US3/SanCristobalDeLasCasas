import type {RouteObject} from "react-router";
import Home from "./pages/Home.jsx.tsx";

const appRoute: RouteObject[] = [
    {
        path:"/",
        element: <Home></Home>
    },
]

export default appRoute