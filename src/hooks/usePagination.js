import React,{useState,useEffect} from 'react';

export default function usePagination() {
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

    return [nextPage,prevPage];
}

