import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Location = () => {

    const [isLoading,setIsLoading] = useState(false);
    const [episodes,setEpisodes] = useState([]);
    const [page,setPage] = useState(1);
    const [pageNumber,setPageNumber] = useState(1);
    const episodesUrl = `https://rickandmortyapi.com/api/location/?page=${pageNumber}`;
    

    useEffect(() => {
        axios
        .get(episodesUrl)
        .then(res=>{setEpisodes(res.data.results)
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

    const episodeContent = isLoading?episodes.map((episode,index)=>(
        <div className="episode-div">    
            <div className="episode">{episode.name}</div>
            <div className="episode">{episode.type}</div>
            <div className="episode">{episode.dimension}</div>
        </div>
    )):'loading';


    return (
        <div className="container">
        <div class="pagination">
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
            <button>{pageNumber} of {page}</button>
        </div>
        <div className="episodes-div">
        {episodeContent}
        </div>
    </div>
    )
}

export default Location;