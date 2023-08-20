import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";

const PopularDrinks = () => {
    const [cocktail, setCocktail] = useState([])
    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
            .then(res => setCocktail(res.data.drinks))
    },[])
    return (
        <>
            <h2 className={'nameSections'}>The Popular Drinks</h2>
            <div className="row">
                {
                    cocktail.map((el, idx) => {
                            return (
                                <div key={el.idDrink} className={'col-3'}>
                                    <Link to={`/drink/${el.idDrink}`} >
                                        <div key={el.idDrink} className='d-flex flex-column align-items-center overflow-hidden gap-2'>
                                            <img width={'300px'} src={el.strDrinkThumb} alt=""/>
                                            <p className={'nameP'}>{el.strDrink}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                    })
                }
            </div>
        </>
    );
};

export default PopularDrinks;