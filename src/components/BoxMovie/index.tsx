import { ArrowArcLeft, ArrowBendDoubleUpLeft, ArrowLeft, ArrowRight, ArrowsClockwise, Triangle } from "phosphor-react"
import { useEffect, useState } from "react"
import { ContentBox, Box } from "./styles"

export function BoxMovie() {

    const image_path = 'https://image.tmdb.org/t/p/w500'
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4763a69b2e14542c7417e04afbecb667&language=en-US&page=1'
    const [movies, setMovies] = useState([]) 
    const [number, setNumber] = useState(0)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results) 
                setNumber(number + 1)
            })
    }, [])

    function GetNewMovies() {
      
        

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4763a69b2e14542c7417e04afbecb667&language=en-US&page=${number+1}`)
            .then(response => response.json())
            .then(data => {setMovies(data.results)
                setNumber(number + 1)
            })
            console.log(number)

    }

    function ShowPastMovies() {
       
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4763a69b2e14542c7417e04afbecb667&language=en-US&page=${number-1}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
            setNumber(number - 1)

            })
            console.log(number)

    }

    return(
        
        <ContentBox>
            {movies.map(movie => {
                return (
                    <Box key={movie.id}>
                         <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                         <p>{movie.title}</p>
                    </Box>
                )
            })}
            <div>
                <button onClick={ShowPastMovies}>
                    <ArrowLeft  size={50}/>
                </button>
                <button onClick={GetNewMovies}>
                    <ArrowRight  size={50}/>
                </button>
            </div>
            
        </ContentBox>
    )
}

