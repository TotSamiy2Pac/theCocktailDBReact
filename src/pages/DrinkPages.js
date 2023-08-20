import React from 'react';
import {useParams} from 'react-router-dom';
import Drink from "../components/Drink";
import Layout from "../components/Layout";

const DrinkPages = () => {
    return (
        <Layout>
            <div className={'container'}>
                <Drink/>
            </div>
        </Layout>
    );
};

export default DrinkPages;