import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DrinkPages from "./pages/DrinkPages";
import CocktailIngredients from "./pages/CocktailIngredients";
import ForumPage from "./pages/ForumPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/drink/:id' element={<DrinkPages/>} />
            <Route path='/ingredients/:nameIng' element={<CocktailIngredients/>} />
            <Route path='/forum' element={<ForumPage/>} />
            <Route path={'/search/:nameDrink'} element={<SearchPage/>} />
        </Routes>
    );
};

export default App;