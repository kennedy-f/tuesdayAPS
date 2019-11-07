import React, {useState, useEffect } from 'react';

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import './style.css';

import api from '../../services/api';

export default function Categories({ catg }){
    const [games, setGames] = useState([]);     
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    

    useEffect (() => {
        async function loadCategories(){
            const response = await api.get('/gamesCtg', {
                params:  { catg } 
            })          
            setGames(response.data);                         
        }

        loadCategories();         
    }, [catg]);  

    return (
        <>
        
        
            <div className="categories_container">
                <h1> {catg} </h1>
                <Carousel 
                swipeable={false}
                draggable={false}
                customTransition="all .5"
                responsive={responsive}                 
                infinite={true}
                dotListClass="custom-dot-list-style"                 
                showDots={true}
                >
                {games.map(game => (
                    <div key={game._id}>
                        <a href={`game?_id=${game._id}`}>
                            <img src={game.thumbnail_url} alt=""/>
                        </a>
                    </div>
                ))}

            </Carousel>
        
        </div>
        </>

   
    ); 
}