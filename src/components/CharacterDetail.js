import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './characterdetails.css';

const CharacterDetail = props => {
    const id = props.location.pathname.split('/');
    const charactersUrl = `https://rickandmortyapi.com/api/character/${id[id.length-1]}`;
    const [character,setCharacter] = useState({});
    
    useEffect(() => {
        axios
        .get(charactersUrl)
        .then(res=>setCharacter(res.data))
        .catch(err=>console.log(err));
      },[]);

    const {image,name,status,species,type,gender,location,origin} = character;
      
    return (
        <div className="container">
            <div className="details">
                <div className="avatar"><img src={image} alt="avatar"/></div>
                <div className="info">
                    <div className="name">name: {name}</div>
                    <div className="status">status: {status}</div>
                    <div className="species">species: {species}</div>
                    <div className="gender">gender: {gender}</div>
                    <div className="location">location: {location?location.name:''}</div>
                    <div className="origin">origin: {origin?origin.name:''}</div>                   
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail;