import React from 'react';
import './style.css';
import Anime from 'animejs';

import Game1 from '../../../src/assets/CapaForzaHorizon4Wivernz@2x.png'
import Game2 from '../../../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png'

export default function Home() {

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
                                    <li > 
                                        <img src={Game1}
                                        onMouseOver={() => {                                                              
                                            game.thumbnail = Game1;      
                                            game.title = 'Forza Horizon 4' 
                                            changeSlide ();    
                                            setTimeout(() => {textAnimationIn()}, 1500)                                                                                
                                        }} 
                                        alt="" /> 
                                    </li>

                                    <li > 
                                        <img src={Game2} alt="" 
                                        onMouseOver={() => {                                        
                                            game.thumbnail = Game2;      
                                            game.title = 'Assasins creed Unity' 
                                            
                                            changeSlide ();
                                            setTimeout(() => {textAnimationIn()}, 1500)         
                                            }}/>
                                    </li>
                                </ul>
                                        
                                <ul>
                                    <li > 
                                        <img src={Game1}
                                        onMouseOver={() => {                                        
                                            game.thumbnail = Game1;      
                                            game.title = 'Forza Horizon 4' 
                                            game.text = "Forza Horizon 4 é um jogo de corrida em mundo aberto desenvolvido pela.  Playground Games em colaboração com a Turn 10 e publicado pela Microsoft Studios[1]. É o quarto da franquia Forza Horizon e o décimo primeiro da edição Forza. Foi lançado em 02 de outubro de 2018 exclusivamente para Xbox One e Windows 10. Os donos da versão Suprema do jogo tem acesso antecipado de 04 dias.\nEm 11 de junho de 2018, a Microsoft anunciou que o supercarro esportivo McLaren Senna, que homenageia Ayrton Senna, será capa do jogo."
                                            game.price = '150,00'; 
                                            changeSlide ();     
                                            setTimeout(() => {textAnimationIn()}, 1500)                                                                
                                    
                                        }} alt="" /> 
                                    </li>

                                    <li  > 
                                        <img src={Game2} alt="" 
                                        onMouseOver={() => {                                        
                                            game.thumbnail = Game2;      
                                            game.title = 'Assasins creed Unity'
                                            game.text = "Assassin's Creed Unity é um videojogo histórico de ação-aventura produzido pela Ubisoft Montreal com o apoio de nove outros estúdios da companhia. Unity é o oitavo jogo principal da série Assassin's Creed e o sucessor de Assassin's Creed IV: Black Flag com ligações a Assassin's Creed Rogue. Foi editado em 11 de Novembro de 2014 pela Ubisoft para Microsoft Windows, PlayStation 4 e Xbox One.Tal como nos jogos anteriores da série, a ação do jogo decorre num cenário histórico, neste caso em Paris, durante o período da Revolução Francesa, no final do século XVIII. A história segue Arno Victor Dorian e os seus companheiros assassinos nos seus esforços para expor os poderes por detrás da Revolução. O jogo mantém a exploração do mundo aberto na terceira pessoa, típico da série, assim como as já familiares mecânicas de combate e infiltração. Unity introduz o multijogador cooperativo na série Assassin's Creed, permitindo que até quatro jogadores possam explorar o mapa e executar missões baseadas na narrativa.Assassin's Creed Unity teve uma recepção variada por parte dos críticos profissionais. Os sites de pontuações agregadas GameRankings e Metacritic deram à versão PlayStation 4 68.12% e 70/100 e à versão Xbox One 70.64% e 73/100, respectivamente. Os elogios foram feitos principalmente aos visuais e ao formato orientado para o multijogador, enquanto que as criticas foram mais em direção à história, à jogabilidade pouco refinada e aos numerosos erros que apresentava quando foi colocado à venda, como a baixa frame rate, bugs, glitches, etc. De acordo com o website VG Chartz, no início de Fevereiro de 2015 já tinham sido vendidas cerca de 5,76 milhões de cópias de Unity.";
                                            game.price = '120,00'; 
                                            changeSlide ();
                                            setTimeout(() => {textAnimationIn()}, 1500) 
                                            }} /> 
                                    </li>
                                </ul>
                            </div>                        

                            <div className="highlightDesc">
                                <h1 id="highlightTile">{game.title}</h1>
                                <span >
                                    {game.text}
                                </span>

                                <h1 id="valor" > R$ {game.price} </h1>

                                <div className="buttonArea">
                                    <div></div>
                                    <button> favoritar </button>
                                    <button> adicionar ao carrinho</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};