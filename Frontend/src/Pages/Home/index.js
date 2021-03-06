import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Anime from 'animejs';

import './style.css';
import Allcategories from '../../components/categories'

import Game1 from '../../../src/assets/MortalKombat11.jfif'
//import Game2 from '../../../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png'



export default function Home() {

    const [highlightGames, setHighlightGames] = useState([]);
    const categs = ['Ação', 'Corrida', 'Aventura', 'Casual', 'Esportes', 'Estratégia', 'MMO', 'RPG', 'Simulação' ]; 

    var preview;
    preview = Game1;

    useEffect(() => {
        async function loadGames() {
            const response = await api.get('/games', { highlight: "yes" });

            setHighlightGames(response.data);
        }

        loadGames();        
    }, []);

    function textAnimationIn() {
        Anime({
            targets: '.middleText_highlight',
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
            targets: '.middleText_highlight',
            translateX: -50,
            opacity: '0'
        });
        Anime({
            targets: 'text',
            translateX: 0,
        });
    }    
    var gameUrl; 
    function changePreview(id) {
        preview = id;
        var bigImage = document.querySelector('#bigSlide');
        var gameName = document.querySelector('.text_highlight');
        var gameTitle = document.querySelector('#highlightTile');
        var gameDesc = document.querySelector('.highlightDesc span');
        var gamePrice = document.querySelector('#valor');
        var gameLink = document.querySelector('#gameLink')
        gameName.innerHTML = preview.name;
        gameTitle.innerHTML = preview.name;
        bigImage.src = preview.thumbnail_url;
        gameDesc.innerHTML = preview.desc;
        gamePrice.innerHTML = "R$ " + preview.price + ",00";
        gameLink.href = '/game?_id=' + preview.id; 
        gameUrl = preview.id;
    }

    preview = Game1;

    function buyGameAction(){
        if (localStorage.getItem('_id')){
            console.log('usuario logado')
            window.location = 'buygame?_id=' + gameUrl; 
        } else {
            console.log('está off')
            window.location = '/login';
        }
        
        
        console.log('função')
    }



    return (
        <>
            <div id="homePage">
                <div className="topContainer">
                    <div className="highlights-games">
                        <div className="content" onMouseOver={textAnimationIn} onMouseOut={textAnimationOut}>
                            <a href='/' id="gameLink">
                                <img src={preview} alt="" className="slide" id="bigSlide"/>
                            </a>                            
                            <div className="middleText_highlight">
                                <div className="text_highlight"> Mortal Kombat 11
 </div>
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
                                            <a href={`game?_id=${highlight._id}`} alt="">
                                                <img src={highlight.thumbnail_url} alt="" />

                                            </a>
                                        </li>
                                    ))}
                                </ul>


                            </div>

                            <div className="highlightDesc">
                                <h1 id="highlightTile"> Mortal Kombat 11
 </h1>
                                <span >
                                    Mortal Kombat 11 é um jogo de luta em que dois jogadores lutam um contra o outro, usando uma enorme variedade de ataques. Além de incluir várias mecânicas usadas em capítulos anteriores, em Mortal Kombat 11 cada lutador tem três ‘variações’ predefinidas pelos desenvolvedores, cada uma com o seu próprio estilo e lista de movimentos e com possibilidade de modificá-las e adicionar mais

                                </span>

                                <h1 id="valor" > R$ 200,00 </h1>

                                <div className="buttonArea">
                                    <div></div>                                    
                                    <button type="button" id="buyButton"onClick={buyGameAction}> Comprar </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br/>
                <div className="categories">                    
                    {categs.map(catg => <Allcategories key={catg} catg={catg}/>)}
                    
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