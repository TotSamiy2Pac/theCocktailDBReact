import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";

const CocktailIngredients = () => {
    const [drinks, setDrinks] = useState([])
    let {nameIng} = useParams()
    // console.log(nameIng)
    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${nameIng}`)
            .then(res => setDrinks(res.data.drinks))
    })

    return (
        <Layout>
            <div className="container" >
                <div className="row">
                    <div className="col-3">
                        <div className="box d-flex flex-column align-items-center overflow-hidden">
                            <h3>{nameIng}</h3>
                            <img style={{width: '400px'}} src={`https://www.thecocktaildb.com/images/ingredients/${nameIng}-Medium.png`} alt=""/>
                        </div>
                    </div>
                    <div className="col-9 gap-3">
                        <h3 className={'text-center'}>Drinks</h3>
                        <div className="row">
                            {drinks &&
                                drinks.map((drink) => {
                                    return (
                                        <div key={drink.idDrink} className="col-3">
                                            <Link to={`/drink/${drink.idDrink}`} >
                                                <div key={drink.idDrink} className='d-flex flex-column align-items-center overflow-hidden gap-2'>
                                                    <img width={'300px'} src={drink.strDrinkThumb} alt=""/>
                                                    <p className={'nameP'}>{drink.strDrink}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CocktailIngredients;