import articleStyles from '../styles/MovieList.module.css'
import Link from 'next/link'
import Image from "next/image";


const MovieItem = ({result}) => {
    
    
    return (
            
            <a className={articleStyles.card}>
                <h3>{result.original_title} &rarr;</h3>
                <p>{result.overview}</p>
                 
            </a>
    )
}

export default MovieItem