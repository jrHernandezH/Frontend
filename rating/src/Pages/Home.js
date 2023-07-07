import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from '../Components/Card';
import Res from '../Components/Res';
import '../Styles/home.css';

export default function Home() {
    return (
        <div className='Container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Card />} />
                    <Route path="/resultado" element={<Res />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}