import React, {useEffect, useState} from 'react'; 

import api from '../../services/api'; 
import './styles.css'

export default function Categories(){

   /* const [catgs] = useState('Assassinato');
    const [categories, setCategories] = useState([]);    */

    const [games, setGames] = useState([]); 
    const [gameCategories, setGameCategories] = useState([]); 
    var saveCategorie = [];
    
    useEffect (() => {
        
        async function loadGames (){        
            const response = await api.post('/gamesCtg'); 
            setGames(response.data); 
            console.log(response.data);             
        }
        loadGames(); 
    }, []);


    useEffect (() => {            
        var i= 0, j=0;                 
        games.map(categorie => {     
            j=0;                               
            for (j; j<= categorie.catgs.length; j++){
                if(saveCategorie.indexOf(categorie.catgs[j],0) === -1){
                    if (categorie.catgs[j] != undefined){                        
                        saveCategorie.push(categorie.catgs[j]); 
                    }
                } 
            }
        })
        
        async function insertCategories()  {
            const response = await saveCategorie; 
            console.log(response); 
            setGameCategories(response.data); 
        }
        insertCategories();
    }, [])    


     return (
         <>
            <div className="container">

                <div className="content">
                    <h1 className="categorieTitle"> Teste categorias  </h1>
                    <ul>
                        
                        
                    </ul>                        

                </div>
            </div>
         </> 
     );
}