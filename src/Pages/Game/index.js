import React from 'react'; 

export default props=> {

    function teste(){
        console.log('teste'); 
    }
    return (
        <>
        <div>
            <h1>Nome do jogo {teste} </h1>
        </div>
        </>
    );
};