import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import appRoute from "./AppRoutes.tsx";

const router = createBrowserRouter(appRoute);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <RouterProvider router={router} />
    </StrictMode>,
)
