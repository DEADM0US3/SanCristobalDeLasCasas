import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router";
import appRoute from "./AppRoutes.tsx";

const router = createHashRouter(appRoute);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <RouterProvider router={router} />
    </StrictMode>,
)
