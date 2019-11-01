import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Anime from 'animejs';

import './style.css';

import Game1 from '../../../src/assets/CapaForzaHorizon4Wivernz@2x.png'
//import Game2 from '../../../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png'



export default function Teste() {

    const [highlightGames, setHighlightGames] = useState([]);
    const [catgs, setCatgs] = useState('');
    const [actionCategorie, setActionCategorie] = useState([]);
    const [raceCategorie, setRaceCategorie] = useState([]);
    var saveCategorie = [];

    var preview;
    preview = Game1;

    useEffect(() => {
        async function loadGames() {
            const response = await api.get('/games', { highlight: "yes" });

            setHighlightGames(response.data);
        }

        loadGames();
    }, []);

    async function loadCategories(categorieName) {

        console.log(catgs);
        const response = await api.post('/gamesCtg');
        categorieName(response.data);
    }

    function textAnimationIn() {
        Anime({
            targets: '.middleText',
            opacity: '1',
            translateX: 50,
            duration: 3000,
            stagger: 300
        });
    }

    setInterval(() => {
        textAnimationOut();
    }, 5000);

    function textAnimationOut() {
        Anime({
            targets: '.middleText',
            translateX: -50,
            opacity: '0'
        });
        Anime({
            targets: 'text',
            translateX: 0,
        });
    }

    function changePreview(id) {
        preview = id;
        var bigImage = document.querySelector('.slide');
        var gameName = document.querySelector('.text');
        var gameTitle = document.querySelector('#highlightTile');
        var gameDesc = document.querySelector('.highlightDesc span');
        var gamePrice = document.querySelector('#valor');
        gameName.innerHTML = preview.name;
        gameTitle.innerHTML = preview.name;
        bigImage.src = preview.thumbnail_url;
        gameDesc.innerHTML = preview.desc;
        gamePrice.innerHTML = "R$ " + preview.price + ",00";
    }

    preview = Game1;



    return (
        <>
            <div id="homePage">
                <div className="topContainer">
                    <div className="highlights-games">
                        <div className="content" onMouseOver={textAnimationIn} onMouseOut={textAnimationOut}>

                            <img src={preview} alt="" className="slide" />
                            <div className="middleText">
                                <div className="text">  </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="preview">
                                <ul>
                                    {highlightGames.map(highlight => (
                                        <li key={highlight._id} onMouseOver={changeSlide => {
                                            preview = highlight;
                                            changePreview(highlight);
                                            textAnimationIn();


                                        }}>
                                            <img src={highlight.thumbnail_url} alt="" />
                                        </li>
                                    ))}
                                </ul>


                            </div>

                            <div className="highlightDesc">
                                <h1 id="highlightTile"> FORZA HORIZON 4 </h1>
                                <span >
                                    <p> Aqui tem um texto bem loco </p>
                                    <p> aqui tem mais outro </p>

                                </span>

                                <h1 id="valor" > R$  </h1>

                                <div className="buttonArea">
                                    <div></div>
                                    <button type="submit"> favoritar </button>
                                    <button type="submit"> adicionar ao carrinho</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="categories">
                    <h1 className="categorieTitle"
                        onMouseMove={event => {
                            setCatgs('Assassinato');
                            loadCategories(setActionCategorie);
                        }} > Ação </h1>
                    <ul>
                        {actionCategorie.map(categorie => (
                            <li key={categorie._id} className="categoryImage">
                                <img src={categorie.thumbnail_url} alt="" />
                            </li>

                        ))}
                    </ul>
                    <h1 className="categorieTitle"
                        onWheel={event => {
                            setCatgs('Corrida');
                            loadCategories(setRaceCategorie);
                        }} > corrida </h1>
                    <ul>
                        {raceCategorie.map(categorie => (
                            <li>

                            </li>


                        ))}
                    </ul>

                </div>
                
            </div>
        </>
    );


};
/*
<div className="categories">
                    <h1 className="categorieTitle"
                        onMouseMove={event => {
                            setCatgs('Assassinato');
                            loadCategories(setActionCategorie);
                        }} > Ação </h1>
                    <ul>
                        {actionCategorie.map(categorie => (
                            <li key={categorie._id}>
                                <img src={categorie.thumbnail_url} alt="" />
                            </li>

                        ))}
                    </ul>
                    <h1 className="categorieTitle"
                        onWheel={event => {
                            setCatgs('Corrida');
                            loadCategories(setRaceCategorie);
                        }} > corrida </h1>
                    <ul>
                        {raceCategorie.map(categorie => (
                            <li key={categorie._id}>
                                <img src={categorie.thumbnail_url} alt="" />
                            </li>

                        ))}
                    </ul>

                </div>*/ 