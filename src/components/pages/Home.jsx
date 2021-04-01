import React from 'react'
import Footer from '../layouts/Footer';
import Jumbotron from '../layouts/Jumbotron';
import Navbar from '../layouts/Navbar';

const Home = () => {
    return ( 
        <>
            <Jumbotron />
            <Navbar/>
            <div className="container-app bg-gray-50">
                <div className="container mx-auto p-5 bg-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repellat
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Home;