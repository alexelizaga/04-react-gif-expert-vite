import { useEffect, useState } from 'react';

import { Gifs } from '../interfaces/gifs';
import { getGifs } from '../helpers';

export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<Gifs[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    const getImages = async (): Promise<void> => {
        setImages(await getGifs(category));
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}