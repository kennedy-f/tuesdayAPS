import React from 'react';
import './style.css';
import Anime from 'animejs';

import Game1 from '../../../src/assets/CapaForzaHorizon4Wivernz@2x.png'
import Game2 from '../../../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png'

// <li> <img src={game1} alt="" /> </li> 
//<li> <img src={game1} alt="" /> </li>
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
    thumbnail : Game1,
    title : 'Forza Horizon 4'
} 
console.log(game.thumbnail);
export default props => {
    return (
        <>
            <div className="topContainer">
                <div className="highlights-games">
                    <div className="content" onMouseOver={textAnimationIn} onMouseOut={textAnimationOut}>
                        <img src={game.thumbnail} alt="" className="slide" />
                        <div className="middleText">
                            <div className="text"> {game.title} </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="preview">
                            <ul>
                                <li id="game1" > <img src={Game1} alt="" /> </li>
                                <li id="game2" > <img src={Game2} alt="" onMouseOver={() => {
                                    game.thumbnail = Game2; 
                                    console.log('troca')
                                    console.log(game.thumbnail);}
                                }/> </li>
                            </ul>
                            <ul>
                                <li id="game3" > <img src={Game1} alt="" /> </li>
                                <li id="game4" > <img src={Game2} alt="" /> </li>
                            </ul>
                        </div>                        

                        <div className="highlightDesc">
                            <h1>Forza Horizon 4</h1>
                            <span >
                                Texto do jogo vai ter que ocupar o maximo possivel
                                sem quebrar as imagens vamos ver se quebra não tá quebrando
                                legal, então tá tudo certo vamos encher mais e ver até onde vai,
                                será que no fim vai quebrar o espaço da div? Eu espero que não,
                                ainda to colocando mais textos, caralho cabe texto pra porra
                                Não da nem pra acreditar slc eu pensei que ia ficar pequeno <br />
                                Bom acho que vai caber tudo e mais <br />
                                Mais uma linha <br />
                                mais outra <br />
                                A ultima eu acho <br />
                                Essa vai quebrar a div <br />
                                tá essa vai <br />
                                porra essa, essa quebrou uhu, veja o tamanho da imagem tá esticando <br />
                                interessante
                            </span>

                            <h3 id="valor" > R$ 150,00</h3>

                            <div className="buttonArea">
                                <div></div>
                                <button> adicionar ao carrinho</button>
                                <button> adicionar ao carrinho</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};