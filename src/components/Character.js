import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './character.css';
import {  Link } from 'react-router-dom';

const Character = () => {

    const [isLoading,setIsLoading] = useState(false);
    const [character,setCharacter] = useState([]);
    const [page,setPage] = useState(1);
    const [pageNumber,setPageNumber] = useState(1);
    const charactersUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    

    useEffect(() => {
        setIsLoading(false);
        axios
        .get(charactersUrl)
        .then(res=>{setCharacter(res.data.results)
        setPage(res.data.info.pages)
        })
        .then(setIsLoading(true))
        .catch(err=>console.log(err));
      },[pageNumber]);

    const nextPage = () =>{
        if(pageNumber===page)
            setPageNumber(1);
        else
            setPageNumber(pageNumber+1);
    }

    const prevPage = () =>{
        if(pageNumber===1)
            setPageNumber(page);
        
        else
            setPageNumber(pageNumber-1);
    }

    const charactersRender = isLoading?character.map((character,index)=>(
        <Link key={index} to={
            {
                pathname:`/Character/${character.id}`,
            }
        }>
            <div className="character-div">
                <figure>
                    <img className="char-img" src={character.image} alt={character.id}/>
                    <figcaption>{character.name} </figcaption> 
                </figure>
            </div>
            </Link>)):'LOADING';
    
    
      
    return (
        <div className="container">
            <div class="pagination">
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
                <button>{pageNumber} of {page}</button>
            </div>
            <div className="characters-div">
                {charactersRender}
            </div>
        </div>
    )
}

export default Character;