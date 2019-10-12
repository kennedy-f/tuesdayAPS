//Animações do F5

anime({
    targets: '.container',
    keyframes: [
        { translateY: -600 },
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
        targets: text,
        translateX: 0,
    });
}


// sidebar 


anime({
        targets : '.insidebar', 
        translateX : -150,         
});

function showSidebar (){    
    anime({
        targets: '.insidebar',
        translateX: 0,        
        easing : 'linear',
        duration : 300
    });
};

function hideSidebar(){
    anime({
        targets : '.insidebar',
        easing: 'linear',
        translateX : -150
    });
};