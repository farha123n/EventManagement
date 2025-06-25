import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;