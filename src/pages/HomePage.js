import React, {useState, useEffect} from 'react';
import Layout from "../components/Layout";
import PopularDrinks from "../components/PopularDrinks";
const HomePage = () => {

    return (
        <Layout>
            <div className="container" style={{minHeight: '100vh'}}>
                <PopularDrinks/>
            </div>
        </Layout>
    );
};

export default HomePage;