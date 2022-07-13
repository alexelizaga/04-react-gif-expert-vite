import { getGifs } from '../helpers/getGifs';


interface GifGridProps {
    category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {

    getGifs(category);

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
