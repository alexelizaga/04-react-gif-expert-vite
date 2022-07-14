import { Gifs } from '../interfaces/gifs';
import { GifsResponse, Datum } from '../interfaces/gifsResponse';
import giphyApi from '../apis/giphyApi';

export const getGifs = async (category: string): Promise<Gifs[]> => {

    const resp = await giphyApi.get<GifsResponse>('/gifs/search', {
        params: {
            q: category
        }
    });

    const { data } : GifsResponse = resp.data;

    const gifs = data.map((img: Datum) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

