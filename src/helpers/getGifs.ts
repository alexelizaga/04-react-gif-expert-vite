import { GifsResponse, Datum } from '../interfaces/gifsResponse';

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4CLydWVgN5ipduT0Jt9a03FuFR1sYrHY&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } : GifsResponse = await resp.json();

    const gifs = data.map((img: Datum) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log( gifs );
}