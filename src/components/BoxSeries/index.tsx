import { ContentBox, Box, BigOne } from "./styles"
import { useState, useEffect, createContext } from "react"
import { Header } from "../Header"

// interface series {
//     id: string
//     
// }

interface ApiContextType {
    series: string
}

export const ApiContext = createContext({} as ApiContextType)

export function BoxSeries() {
    
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const url = 'https://api.themoviedb.org/3/tv/popular?api_key=4763a69b2e14542c7417e04afbecb667&language=en-US&page=1'
    const [series, setSeries] = useState([]) 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setSeries(data.results) )
    }, [])
 
    return(
        <ContentBox>
            {series.map(serie => {
                return (
                    <Box key={serie.id}>
                         <img src={`${image_path}${serie.poster_path}`} alt={serie.name} />
                         <p>{serie.name}</p>
                    </Box>
                )
            })}
        </ContentBox>
    )
}