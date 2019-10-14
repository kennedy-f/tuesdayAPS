import React from 'react';

import anime from 'animejs';

import './Styles.css';



setTimeout(() => {
    anime({
        targets: '.insidebar',
        easing: 'linear',
        translateX: - 150
    });    
}, 1500);

anime({
    targets: '.insidebar',
    easing: 'linear',
    translateX: - 150
}); 



function showSidebar() {
    console.log('vou abrir');
    anime({
        targets: '.insidebar',
        translateX: 0,
        easing: 'linear',
        duration: 300        
    });
    
}

function closeSideBar() {
    anime({
        targets: '.insidebar',
        easing: 'linear',
        translateX: - 150
    });
};

export default props => {   
    

    return (
        <>
            <div className="side-bar" onMouseOver={showSidebar}>
                <div className="insidebar" >
                    <button id="closeBtn" onClick={closeSideBar}> X </button>
                    <ul >
                        <li  >  Home  </li>
                        <li  > Games </li>
                        <li  > WishList </li>
                        <li  > MyAccount </li>
                        <li  > Logoff </li>
                    </ul>
                    
                </div>

            </div>
        </>
    );
};
