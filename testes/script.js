var highlight = document.querySelector('.slide'); 
var highlightText = document.querySelector ('.text');


//import anime from '../node_modules/animejs/anime.es.js';

function changeSlide(id)  {
    switch (id) {

        case 'game1':
            anime ({
                targets: '.slide', 
                keyframes : [                    
                    { translateX: [523, 0], translateY: [-186, 0], scale: [0.251, 1] },                   
                ], 
                easing: 'easeOutElastic(1, .8)',
                duration : 1000

            });

            anime({
                targets: '.text',
                scale: 1,
                translateX: [-500, 0],
                easing: 'easeOutElastic(1, .8)',
                duration: 1000,
                delay: 500
            });            
            highlight.src = '../src/assets/CapaForzaHorizon4Wivernz@2x.png';
            highlightText.innerHTML = ('Forza Horizon 4');

            break;

        case 'game2':  
            highlight.src = '../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png';
            highlightText.innerHTML = ('Assasins Creed Unity ');  
            anime({
                targets: '.slide',
                keyframes: [
                    { translateX: [523, 0], translateY: [-86, 0], scale: [0.251, 1] },
                ],
                easing: 'easeOutElastic(1, .8)',
                duration: 1000

            });    

            anime({
                targets: '.text',
                scale: 1,
                translateX: [-500, 0],
                easing: 'easeOutElastic(1, .8)',
                duration: 1000,
                delay: 500
            });            
            
            
            break;

        case 'game3':
            anime({
                targets: '.slide',
                keyframes: [
                    { translateX: [523, 0], translateY: [26, 0], scale: [0.251, 1] },
                ],
                easing: 'easeOutElastic(1, .8)',
                duration: 1000

            });
            anime({
                targets: '.text',
                scale: 1,
                translateX: [-500, 0],
                easing: 'easeOutElastic(1, .8)',
                duration: 1000,
                delay: 500
            });        

            highlight.src = '../src/assets/CapaForzaHorizon4Wivernz@2x.png';
            highlightText.innerHTML = ('Forza Horizon 4');
            
            break;

        case 'game4':
            anime({
                targets: '.slide',
                keyframes: [
                    { translateX: [523, 0], translateY: [126, 0], scale: [0.251, 1] },                    
                ],
                easing: 'easeOutElastic(1, .8)',
                duration: 1000
            });

            anime({
                targets: '.text',
                scale : 1,
                translateX : [ -500, 0],
                easing: 'easeOutElastic(1, .8)',
                delay : 500
                
            });   

            highlight.src = '../src/assets/FundoAssassinsCreedUnityGoldEditionELAMIGOSWivernz@2x.png';
            highlightText.innerHTML = ('Assasins Creed Unity ');

            break;


        default:
            highlight.src = '../src/assets/CapaForzaHorizon4Wivernz@2x.png';
            break;
            
    }
}

