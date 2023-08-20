import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Drink = () => {
    const [drink, setDrink] = useState({})
    const [ing, setIng] = useState([])
    let {id} = useParams()
    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => setDrink(res.data.drinks[0]))
    },[])

    return (
        <div className={'row'}>
            <div className={'col-4'}>
                <div className="box">
                    <h3>{drink.strDrink}</h3>
                    <img style={{width: '400px'}} src={drink.strDrinkThumb} alt=""/>
                </div>
            </div>
            <div className="col-8">
                <div className="box">
                    <h3>ingredients</h3>
                    <div className="row">
                        {
                            drink.strIngredient1 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient1}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure1} {drink.strIngredient1}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient2 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient2}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure2} {drink.strIngredient2}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient3 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient3}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient3}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure3} {drink.strIngredient3}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient4 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient4}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient4}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure4} {drink.strIngredient4}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient5 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient5}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient5}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure5} {drink.strIngredient5}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient6 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient6}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient6}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure6} {drink.strIngredient6}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient7 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient7}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient7}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure7} {drink.strIngredient7}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient8 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient8}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient8}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure8} {drink.strIngredient8}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient9 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient9}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient9}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure9} {drink.strIngredient9}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient10 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient10}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient10}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure10} {drink.strIngredient10}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient11 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient11}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient11}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure11} {drink.strIngredient11}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient12 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient12}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient12}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure12} {drink.strIngredient12}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient13 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient13}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient13}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure13} {drink.strIngredient13}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient14 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient14}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient14}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure14} {drink.strIngredient14}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {
                            drink.strIngredient15 &&
                            <div className={'col-4'}>
                                <Link to={`/ingredients/${drink.strIngredient15}`}>
                                    <div className="box">
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient15}-Medium.png`} alt=""/>
                                        <p className={'nameP'}>{drink.strMeasure15} {drink.strIngredient15}</p>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drink;