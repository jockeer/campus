import React from 'react'
import Articulos from '../articulos/Articulos';
import ArticulosNuevos from '../articulos/ArticulosNuevos';
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
                    <ArticulosNuevos />
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <main>
                        <div className="grid xs: grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  my-2">
                            <Articulos />
                            <div className="extras">hol</div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Home;