import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import MovieList from '../components/MovieList'

interface Results {
  adutlt: boolean,
  genre_ids: [],
  id: number,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path:string, // Stack overflow:- image?: String
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

interface PageResults {
  results: Results[]
}


export default function Home({ results }: PageResults, ) {
  console.log(results)
 
  return (
    <div className={styles.container}>
        <head>
          <title>TMDB API</title>
        </head>
       
            <MovieList results={results}/>
        
        <h1>Another Attempt</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch (`https://api.themoviedb.org/3/discover/movie?with_genres=Comedy&with_cast=23659&sort_by=vote_average.desc&api_key=8af03f276cc7c85ac2ecce75b2cc2d57&language=eng`)
  const articles = await res.json()
  const results = articles.results
  
  return {
    props: {
      results,
    }
  }
}

