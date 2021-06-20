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