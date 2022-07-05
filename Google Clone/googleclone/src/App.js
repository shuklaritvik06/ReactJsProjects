import React,{ useState } from "react";
import "./global.css";

// Components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./components/Routes";


export default function App(){
    return (
        <div>
            <div className="min-h-screen dark:bg-gray-800">
                <Navbar/>
                <AppRoutes />
                <Footer />
            </div>
        </div>
    );
}