import { useState, useEffect } from "react"
import { ContentBox, Box } from "./styles"

export function BoxAll() {

    const image_path = 'https://image.tmdb.org/t/p/w500'
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4763a69b2e14542c7417e04afbecb667&language=en-US&page=1'
    const url2 = 'https://api.themoviedb.org/3/tv/popular?api_key=4763a69b2e14542c7417e04afbecb667&language=en-US&page=1'
    const [shows, setShows] = useState([]) 
    const [bananas, setBananas] = useState([]) 


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setShows(data.results) )
        fetch(url2)
            .then(response => response.json())
            .then(data => setBananas(data.results) )
    }, [])

    return(
        <ContentBox>
            {shows.map(show => {
                return (
                    <Box key={show.id}>
                         <img src={`${image_path}${show.poster_path}`} alt={show.title} />
                         <p>{show.title}</p>
                    </Box>
                )
            })}

            {bananas.map(banana => {
                return(
                    <Box key={banana.id}>
                        <img src={`${image_path}${banana.poster_path}`} alt={banana.title} />
                         <p>{banana.name}</p>
                    </Box>
                )
            })}
        </ContentBox>
    )
}