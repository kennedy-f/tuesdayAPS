//Animações do F5

anime({
    targets: '.container',
    keyframes: [
        { translateY: -800 },
        { translateY: 0 }
    ],
    duration: 1300
});

anime({
    targets: '.slide',
    keyframes: [
        { translateY: -600 },
        { translateY: 0 }
    ],
    duration: 1000
});

anime({
    targets: '.preview',
    keyframes: [
        { translateY: -600 },
        { translateY: 0 }
    ],
    duration: 1200
});



// hover Highlight preview 

function textAnimationIn() {
    anime({
        targets: '.middleText',
        opacity: '1',
        translateX: 50,
        duration: 3000,
        stagger: 300
    });

}
function textAnimationOut() {
    anime({
        targets: '.middleText',
        opacity: '0'
    });
    anime({
        targets: 'text',
        translateX: 0,
    });
}


// sidebar 

anime({
        targets : '.insidebar', 
        translateX : -150,         
});

function showSidebar() {       
        console.log('vou abrir');
        anime({
            targets: '.insidebar',
            translateX: 0,        
            easing : 'linear',
            duration : 300
        });
} 

function closeSideBar(){
    anime({
        targets: '.insidebar',
        easing: 'linear',
        translateX: - 150
    });
}

//MouseOver Game Images 

function showGameTitle(id, changeState) {
    var label = document.querySelector('#' + id + ' label');    
    
    if (changeState == 1){
        anime ({
            targets: label,
            scale : [0, 1.1, 1],
            duration: 400,
            easing : 'linear'
        });
        
        label.style.display = 'initial';
    } else {
        label.style.display = 'none';    
    }
    
    
    
    
}