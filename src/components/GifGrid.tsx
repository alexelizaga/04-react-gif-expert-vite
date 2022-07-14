import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { Gifs } from '../interfaces/gifs';


interface GifGridProps {
    category: string;
}



export const GifGrid = ({ category }: GifGridProps) => {

    const [images, setImages] = useState<Gifs[]>([]);

    const getImages = async (): Promise<void> => {
        setImages(await getGifs(category));
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{ category }</h3>

            <div className='card-grid'>
                {
                    images.map( image => (
                        <GifItem
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
