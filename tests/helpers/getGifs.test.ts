import { getGifs } from '../../src/helpers/getGifs';
import { Gifs } from '../../src/interfaces/gifs';

describe('Test getGifs', () => {
    
    test('should return un array of gifs', async () => {
        
        const gifs: Gifs[] = await getGifs('cats');
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

    });

});