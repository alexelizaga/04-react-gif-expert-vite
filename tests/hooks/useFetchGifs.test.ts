import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test useFetchGifs hook', () => {

    test('should return initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    
    });

    test('should return an array of images and isLoading in false', async () => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        await waitFor(
            () => expect( result.current.isLoading ).toBeFalsy()
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    
    });

});