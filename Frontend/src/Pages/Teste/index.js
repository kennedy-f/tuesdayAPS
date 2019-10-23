import React, {useState, useEffect} from 'react';

import api from '../../services/api';
import Anime from 'animejs';

import './style.css';

import Game1 from '../../../src/assets/CapaForzaHorizon4Wivernz@2x.png'
//import Game2 from '../../../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png'



export default function Teste() {

    const [highlightGames, setHighlightGames] = useState([]); 

    useEffect(() => {
        async function loadGames (){
            const response = await api.get('/games', { highlight : "yes" }); 

            setHighlightGames(response.data);                
            console.log(highlightGames); 
            console.log(response.data); 
        }
        loadGames();
    }, []); 

    console.log('tsete' );

function textAnimationIn() {
    Anime({
        targets: '.middleText',
        opacity: '1',
        translateX: 50,
        duration: 3000,
        stagger: 300
    });
}

function textAnimationOut() {
    Anime({
        targets: '.middleText',
        opacity: '0'
    });
    Anime({
        targets: 'text',
        translateX: 0,
    });
}

var game = {
    thubmnail : Game1, 
    title : 'Forza Horizon 4',
    text : ' Texto do jogo vai ter que ocupar o maximo possivel sem quebrar as imagens vamos ver se quebra não tá quebrando legal, então tá tudo certo vamos encher mais e ver até onde vai, será que no fim vai quebrar o espaço da div? Eu espero que não, ainda to colocando mais textos, caralho cabe texto pra porra Não da nem pra acreditar slc eu pensei que ia ficar pequeno  Bom acho que vai caber tudo e mais  Mais uma linha  mais outra  A ultima eu acho  Essa vai quebrar a div  tá essa vai  porra essa, essa quebrou uhu, veja o tamanho da imagem tá esticando  interessante',
    price : '150,00'
}
/*
function changeSlide(){
    var highlightThumbnail = document.querySelector ('.slide');     
    var highlightTitle = document.querySelector('#highlightTile');  
    var highlightSpan = document.querySelector ('.text')
    var highlightText = document.querySelector ('.highlightDesc span')
    var highlightPrice = document.querySelector('#valor'); 
    highlightThumbnail.src = game.thumbnail; 
    highlightTitle.innerHTML = game.title;  
    highlightSpan.innerHTML = game.title;   
    highlightText.innerHTML = game.text;   
    highlightPrice.innerHTML = 'R$ ' + game.price; 
}
*/
    return (        


        <>
            <div id="homePage">
                <div className="topContainer">
                    <div className="highlights-games">
                        <div className="content" onMouseOver={textAnimationIn} onMouseOut={textAnimationOut}>
                            <img src={game.thubmnail} alt="" className="slide" />
                        
                            <div className="middleText">
                                <div className="text"> {game.title} </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="preview">
                                <ul>
                                    {highlightGames.map(highlight => (
                                        <li key={highlight._id}>
                                            <img src={highlight.thubmnail} alt=""/>
                                        </li>
                                    ))}
                                </ul>
                                
                                
                            </div>   

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};