import Image from 'next/image'
import dogKitten from '../public/images/dog kitten.gif'
import spinCat from '../public/images/spinning cat.gif'
import starwars from '../public/images/starwarsCats.gif'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen space-y-8 lg-flex-row">
      <h1 className="text-3xl">The Cat App</h1>
      <div className='relative p-12 overflow-hidden rounded-full w-42 h-42 margin-8 ring-2 ring-pink-300 ring-offset-4'>
        <Image 
        objectFit='cover'
        src={dogKitten}
        alt='golden retriever and black kitten in dogbed'
        layout='fill'
        priority
        />
      </div>

      <div className='relative p-12 overflow-hidden rounded-full w-42 h-42 margin-8 ring-2 ring-pink-300 ring-offset-4'>
        <Image 
        objectFit='cover'
        src={spinCat}
        alt='a cats reaction to being spun in a cirlce in the air'
        layout='fill'
        priority
        />
      </div>

      <div className='relative overflow-hidden rounded-full w-42 h-42 ring-2 ring-pink-300 ring-offset-4'>
        <Image 
        objectFit='cover'
        src={starwars}
        alt='two cats on a couch fighting with lightsabers'
        layout='fill'
        priority
        />
      </div>
      
    </div>
  )
}
