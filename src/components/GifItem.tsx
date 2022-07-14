import { Gifs } from '../interfaces/gifs';

export const GifItem = ( { title, url }: Gifs ) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{ title }</p>
    </div>
  )
}
