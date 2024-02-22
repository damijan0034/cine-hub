import { fetchTrending } from '@/actions/movieData'
import { unstable_noStore as noStore } from 'next/cache'

import HeroCard from './HeroCard'

const Hero =async () => {
 noStore()
    const trending=await fetchTrending()

    const randomNumber=Math.floor(Math.random() * trending.length)
    console.log(randomNumber)
    const trendingMovie=trending[randomNumber]
    console.log(trendingMovie)
  return (
    <div>
        <HeroCard trendingMovie={trendingMovie} />
    </div>
  )
}

export default Hero